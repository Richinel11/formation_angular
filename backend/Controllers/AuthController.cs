namespace backend.Controllers
{
    using backend.Models;
    using Microsoft.AspNetCore.Mvc;
    using backend.Services;
    using backend.Models.Dtos;

    [ApiController]
        [Route("api/[controller]")]
        public class AuthController : ControllerBase
        {
            private readonly dbConn _context;
            private readonly AuthService _auth;

            public AuthController(dbConn context, AuthService auth)
            {
                _context = context;
                _auth = auth;
            }

            [HttpPost("register")]
            public IActionResult Register([FromBody] User user)
            {
                if (_context.Users.Any(u => u.Username == user.Username))
                    return BadRequest("Username already exists.");

                user.PasswordHash = _auth.HashPassword(user.PasswordHash);
                _context.Users.Add(user);
                _context.SaveChanges();

                return Ok("User registered successfully.");
            }

            [HttpPost("login")]
            public IActionResult Login([FromBody] User user)
            {
                var dbUser = _context.Users.FirstOrDefault(u => u.Username == user.Username);
                if (dbUser == null)
                    return Unauthorized("User not found.");

                if (!_auth.VerifyPassword(user.PasswordHash, dbUser.PasswordHash))
                    return Unauthorized("Invalid password.");

                var token = _auth.GenerateToken(dbUser);
                var userDto = new UserDto(dbUser.Username);
                return Ok(new { token, userDto });
            }
        }

}

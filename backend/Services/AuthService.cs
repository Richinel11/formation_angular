namespace backend.Services
{
    using System.IdentityModel.Tokens.Jwt;
    using System.Security.Claims;
    using System.Text;
    using Microsoft.IdentityModel.Tokens;
    using backend.Models;

        public class AuthService
        {
            private readonly IConfiguration _config;
            private readonly dbConn _context;

            public AuthService(IConfiguration config, dbConn context)
            {
                _config = config;
                _context = context;
            }

            public string HashPassword(string password)
            {
                return BCrypt.Net.BCrypt.HashPassword(password);
            }

            public bool VerifyPassword(string password, string hash)
            {
                return BCrypt.Net.BCrypt.Verify(password, hash);
            }

            public string GenerateToken(User user)
            {
                var claims = new[]
                {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: _config["Jwt:Issuer"],
                    audience: _config["Jwt:Audience"],
                    claims: claims,
                    expires: DateTime.Now.AddHours(1),
                    signingCredentials: creds
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
        }
}

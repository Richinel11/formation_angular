namespace backend.Models.Dtos
{
    public class UserDto
    {
        public string username { set; get; }

        public UserDto(string username)
        {
            this.username = username;
        }
    }


}

namespace backend.Models
{
    using System.ComponentModel.DataAnnotations.Schema;
    using System.ComponentModel.DataAnnotations;

    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "text")] // PostgreSQL text
        public string Username { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "text")] // PostgreSQL text
        public string PasswordHash { get; set; } = string.Empty;
    }

}

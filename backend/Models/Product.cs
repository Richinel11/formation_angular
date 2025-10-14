namespace backend.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

     public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "text")] // PostgreSQL text
        public string Name { get; set; }

        [Column(TypeName = "numeric")] // PostgreSQL decimal
        public decimal Price { get; set; }

        [Column(TypeName = "text")] // PostgreSQL text
        public string Description { get; set; }

        public int Stock { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.Models
{
    public class ProductUnit
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Unit { get; set; }
    }
}
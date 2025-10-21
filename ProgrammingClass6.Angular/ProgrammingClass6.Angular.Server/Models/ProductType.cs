using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.Models
{
    public class ProductType
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
    }
}

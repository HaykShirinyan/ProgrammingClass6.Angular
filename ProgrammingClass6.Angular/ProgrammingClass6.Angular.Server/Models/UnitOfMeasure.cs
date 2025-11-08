using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.Models
{
    public class UnitOfMeasure
    {
        [Key]   
        public int Id { get; set; }

        [Required]  
        [StringLength(20)]
        public string Name { get; set; }

        [StringLength(10)]
        public string Symbol { get; set; } 
    }
}

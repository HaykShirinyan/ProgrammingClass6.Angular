using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.DataTrnasferObjects
{
    public class UnitOfMeasureDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Unit { get; set; }
    }

    public class ReferencedUnitOfMeasureDto
    {
        [Required]
        public int? Id { get; set; }

        public string Unit { get; set; }
    }
}

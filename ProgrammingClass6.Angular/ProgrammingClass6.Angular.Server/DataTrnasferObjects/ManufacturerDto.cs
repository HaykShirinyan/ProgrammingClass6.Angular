using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.DataTrnasferObjects
{
    public class ManufacturerDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }
    }

    public class ReferencedManufacturerDto
    {
        [Required]
        public int? Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.DataTrnasferObjects
{
    public class UnitOfMeasureDto
    {
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [StringLength(500)]
        public string Type { get; set; }
        public decimal UnitOfMeasureValue { get; set; }
        public decimal Price { get; set; }

        public decimal Quantity { get; set; }
        public ReferencedManufacturerDto Manufacturer { get; set; }
    }
}

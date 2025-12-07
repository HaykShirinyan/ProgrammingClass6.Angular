using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.DataTrnasferObjects
{
    public class ProductDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Name { get; set; }

        [StringLength(500)]
        public string Description { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public ReferencedManufacturerDto Manufacturer { get; set; }

        public ReferencedProductTypeDto ProductType { get; set; }

        public ReferencedUnitOfMeasureDto UnitOfMeasure { get; set; }
    }
}

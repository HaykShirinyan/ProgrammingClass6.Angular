using System.ComponentModel.DataAnnotations;

namespace ProgrammingClass6.Angular.Server.DataTrnasferObjects
{
    public class ProductTypeDto
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }
    }

    public class ReferencedProductTypeDto
    {
        [Required]
        public int? Id { get; set; }
              
        public string Name { get; set; }
    }
}

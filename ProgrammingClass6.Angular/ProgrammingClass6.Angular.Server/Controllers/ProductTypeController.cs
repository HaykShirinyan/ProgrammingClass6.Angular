using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/ProductTypes")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly IProductTypeRepository _productTypeRepository;

        public ProductTypeController(IProductTypeRepository productTypeRepository)
        {
            _productTypeRepository = productTypeRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _productTypeRepository.GetAll();
            return Ok(productTypes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _productTypeRepository.Get(id);

            if (productType == null)
            {
                return NotFound();
            }

            return Ok(productType);
        }

        [HttpPost]
        public IActionResult Create(ProductType productType)
        {
            _productTypeRepository.Add(productType);

            return Ok(productType);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductType productType)
        {
            if (id != productType?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _productTypeRepository.Update(productType);

            return Ok(productType);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productType = _productTypeRepository.Delete(id);

            if (productType != null)
            {
                return Ok(productType);
            }

            return NotFound();
        }
    }
}
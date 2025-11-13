using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;

        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _productRepository.GetAll();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _productRepository.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            _productRepository.Add(product);

            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product)
        {
            if (id != product?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _productRepository.Update(product);

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _productRepository.Delete(id);

            if (product != null)
            {
                return Ok(product);
            }

            return NotFound();
        }
    }
}

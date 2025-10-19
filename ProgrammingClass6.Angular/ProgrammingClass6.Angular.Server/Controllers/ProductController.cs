using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _dbContext.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _dbContext
                .Products
                .SingleOrDefault(p => p.Id == id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult Create(Product product)
        {
            _dbContext.Products.Add(product);
            _dbContext.SaveChanges();

            return Ok(product);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Product product)
        {
            if (id != product?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _dbContext.Products.Update(product);
            _dbContext.SaveChanges();

            return Ok(product);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _dbContext
                .Products
                .SingleOrDefault(p => p.Id == id);

            if (product != null)
            {
                _dbContext.Products.Remove(product);
                _dbContext.SaveChanges();

                return Ok(product);
            }

            return NotFound();
        }
    }
}

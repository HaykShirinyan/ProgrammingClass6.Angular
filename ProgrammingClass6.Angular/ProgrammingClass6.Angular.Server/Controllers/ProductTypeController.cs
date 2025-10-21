using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/ProductTypes")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductTypeController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _dbContext.ProductTypes.ToList();

            return Ok(productTypes);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _dbContext.ProductTypes.SingleOrDefault(p => p.Id == id);

            if(productType == null)
            {
                return NotFound();
            }
            
            return Ok(productType);
        }

        [HttpPost]
        public IActionResult Create(ProductType productType)
        {
            _dbContext.ProductTypes.Add(productType);
            _dbContext.SaveChanges();

            return Ok(productType);
        }

        [HttpPut("{id}")]
        public IActionResult Update(ProductType productType, int id)
        {
            if(id != productType?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _dbContext.ProductTypes.Update(productType);
            _dbContext.SaveChanges();

            return Ok(productType);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productType = _dbContext
                .ProductTypes
                .SingleOrDefault(productType => productType.Id == id);

            if(productType != null)
            {
                _dbContext.ProductTypes.Remove(productType);
                _dbContext.SaveChanges();

                return Ok(productType);
            }

            return NotFound();
        }
    }    
}

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
        private readonly ApplicationDbContext _dbcontext;
        public ProductTypeController(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _dbcontext.ProductTypes.ToList();
            return Ok(productTypes);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _dbcontext.ProductTypes.SingleOrDefault(pt => pt.Id == id);

            if (productType == null)
            {
                return NotFound();
            }
            return Ok(productType);
        }
        [HttpPost]
        public IActionResult Create(ProductType productType)
        {
            _dbcontext.ProductTypes.Add(productType);
            _dbcontext.SaveChanges();
            return Ok(productType);
        }
        [HttpPut("{Id}")]
        public IActionResult Update(int id, ProductType productType)
        {
            if (id != productType?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _dbcontext.ProductTypes.Update(productType);
            _dbcontext.SaveChanges();
            return Ok(productType);
        }
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var productType = _dbcontext.ProductTypes.SingleOrDefault(pt => pt.Id == Id);
            if (productType != null)
            {
                _dbcontext.ProductTypes.Remove(productType);
                _dbcontext.SaveChanges();
                return Ok(productType);
            }
            return NotFound();
        }
    }
}

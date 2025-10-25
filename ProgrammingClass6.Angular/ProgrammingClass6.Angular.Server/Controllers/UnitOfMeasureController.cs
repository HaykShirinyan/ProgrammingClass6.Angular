using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unitofmeasures")]
    [ApiController]
    public class UnitOfMeasurController : ControllerBase
    {
        private readonly ApplicationDbContext _dbcontext;
        public UnitOfMeasurController(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _dbcontext.ProductUnits.ToList();
            return Ok(unitOfMeasures);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var unitOfMeasure = _dbcontext.ProductUnits.SingleOrDefault(u => u.Id == id);

            if (unitOfMeasure == null)
            {
                return NotFound();
            }
            return Ok(unitOfMeasure);
        }

        [HttpPost]
        public IActionResult Create(ProductUnit unitOfMeasure)
        {
            _dbcontext.ProductUnits.Add(unitOfMeasure);
            _dbcontext.SaveChanges();
            return Ok(unitOfMeasure);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductUnit unitOfMeasure)
        {
            if (id != unitOfMeasure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }
            _dbcontext.ProductUnits.Update(unitOfMeasure);
            _dbcontext.SaveChanges();
            return Ok(unitOfMeasure);
        }
        
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _dbcontext.ProductUnits.SingleOrDefault(u => u.Id == id);
            if (unitOfMeasure != null)
            {
                _dbcontext.ProductUnits.Remove(unitOfMeasure);
                _dbcontext.SaveChanges();
                return Ok(unitOfMeasure);
            }
            return NotFound();
        }
    }
}
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit-of-measures")]
    [ApiController]
    public class UnitOfMeasureController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfMeasureController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _dbContext.UnitOfMeasures.ToList();

            return Ok(unitOfMeasures);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id) 
        {
            var unitOfMeasure = _dbContext.UnitOfMeasures.SingleOrDefault(p => p.Id == id);

            if (unitOfMeasure == null) 
            {
                return NotFound();
            }
            return Ok(unitOfMeasure);
        }

        [HttpPost]
        public IActionResult Create(UnitOfMeasure unitOfMeasure) 
        {
            _dbContext.UnitOfMeasures.Add(unitOfMeasure);
            _dbContext.SaveChanges();

            return Ok(unitOfMeasure);
        }

        [HttpPut("{id}")]
        public IActionResult Update(UnitOfMeasure unitOfMeasure, int id)
        {
            if(id != unitOfMeasure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _dbContext.UnitOfMeasures.Update(unitOfMeasure);
            _dbContext.SaveChanges();

            return Ok(unitOfMeasure);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _dbContext
                .UnitOfMeasures
                .SingleOrDefault(unitOfMeasure => unitOfMeasure.Id == id);

            if(unitOfMeasure != null)
            {
                _dbContext.UnitOfMeasures.Remove(unitOfMeasure);
                _dbContext.SaveChanges();

                return Ok(unitOfMeasure);
            }

            return NotFound();
        }
    }
}

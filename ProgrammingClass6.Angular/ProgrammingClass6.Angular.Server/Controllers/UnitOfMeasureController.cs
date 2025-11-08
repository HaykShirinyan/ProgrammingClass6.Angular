using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unitOfMeasure")]
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
            var unitOfMeasure = _dbContext
                .UnitOfMeasures
                .SingleOrDefault(u => u.Id == id);

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
        public IActionResult Update(int id, UnitOfMeasure unitOfMeasure)
        {
            if (id != unitOfMeasure?.Id)
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
                .SingleOrDefault(u => u.Id == id);

            if (unitOfMeasure != null)
            {
                _dbContext.UnitOfMeasures.Remove(unitOfMeasure);
                _dbContext.SaveChanges();

                return Ok();
            }

            return NotFound();
        }
    }
}

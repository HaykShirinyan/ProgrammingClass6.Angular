using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/UnitOfMeasures")]
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
            var unitOfMeasures = _dbcontext.UnitOfMeasures.ToList();
            return Ok(unitOfMeasures);
        }
        [HttpGet]
        public IActionResult Get(int id)
        {
            var unitOfMeasure = _dbcontext.UnitOfMeasures.SingleOrDefault(uom => uom.Id == id);

            if (unitOfMeasure == null)
            {
                return NotFound();
            }
            return Ok(unitOfMeasure);
        }
        [HttpPost]
        public IActionResult Create(UnitOfMeasure unitOfMeasure)
        {
            _dbcontext.UnitOfMeasures.Add(unitOfMeasure);
            _dbcontext.SaveChanges();
            return Ok(unitOfMeasure);
        }
        [HttpPut("{Id}")]
        public IActionResult Update(int id, UnitOfMeasure unitOfMeasure)
        {
            if (id != unitOfMeasure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }
            _dbcontext.UnitOfMeasures.Update(unitOfMeasure);
            _dbcontext.SaveChanges();
            return Ok(unitOfMeasure);
        }
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            var unitOfMeasure = _dbcontext.UnitOfMeasures.SingleOrDefault(uom => uom.Id == Id);
            if (unitOfMeasure != null)
            {
                _dbcontext.UnitOfMeasures.Remove(unitOfMeasure);
                _dbcontext.SaveChanges();
                return Ok(unitOfMeasure);
            }
            return NotFound();
        }
    }
}

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit_of_measures")]
    [ApiController]
    public class Unit_Of_MeasureController : ControllerBase
    {
        private readonly ApplicationDbContext _dbcontext;
        public Unit_Of_MeasureController(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _dbcontext.Unit_Of_Measures.ToList();
            return Ok(unitOfMeasures);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var unitOfMeasure = _dbcontext.Unit_Of_Measures.SingleOrDefault(uom => uom.Id == id);
            if (unitOfMeasure == null)
            {
                return NotFound();
            }
            return Ok(unitOfMeasure);
        }
        [HttpPost]
        public IActionResult Create(Unit_Of_Measure unit_Of_measure)
        {
             _dbcontext.Unit_Of_Measures.Add(unit_Of_measure);
            _dbcontext.SaveChanges();
            return Ok(unit_Of_measure);

        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, Unit_Of_Measure unit_Of_Measure)
        {
            if (id != unit_Of_Measure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }
            _dbcontext.Unit_Of_Measures.Update(unit_Of_Measure);
            _dbcontext.SaveChanges();
            return Ok(unit_Of_Measure);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _dbcontext.Unit_Of_Measures.SingleOrDefault(uom => uom.Id == id);
            if (unitOfMeasure != null)
            {
                _dbcontext.Unit_Of_Measures.Remove(unitOfMeasure);
                _dbcontext.SaveChanges();
                return Ok(unitOfMeasure);
            }
            return NotFound();
        }

    }
}

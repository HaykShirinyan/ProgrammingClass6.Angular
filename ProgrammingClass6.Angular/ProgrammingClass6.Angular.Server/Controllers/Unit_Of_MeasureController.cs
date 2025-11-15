using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Implementations;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit-of-measures")]
    [ApiController]
    public class Unit_Of_MeasureController : ControllerBase
    {
        private readonly UnitOfMeasureRepository _unitOfMeasureRepository;
        public Unit_Of_MeasureController(UnitOfMeasureRepository unitOfMeasureRepository)
        {
            _unitOfMeasureRepository = unitOfMeasureRepository;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _unitOfMeasureRepository.GetAll();
            return Ok(unitOfMeasures);
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Get(id);
            if (unitOfMeasure == null)
            {
                return NotFound();
            }
            return Ok(unitOfMeasure);
        }
        [HttpPost]
        public IActionResult Create(Unit_Of_Measure unit_Of_measure)
        {
            _unitOfMeasureRepository.Add(unit_Of_measure);
           
            return Ok(unit_Of_measure);

        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, Unit_Of_Measure unit_Of_Measure)
        {
            if (id != unit_Of_Measure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }
           _unitOfMeasureRepository.Update(unit_Of_Measure);
            return Ok(unit_Of_Measure);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Get(id);
            if (unitOfMeasure != null)
            {
                _unitOfMeasureRepository.Delete(id);
                return Ok(unitOfMeasure);
            }
            return NotFound();
        }

    }
}

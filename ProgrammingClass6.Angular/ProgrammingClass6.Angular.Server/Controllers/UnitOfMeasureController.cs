using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;


namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit-of-measures")]
    [ApiController]
    public class UnitOfMeasureController : ControllerBase
    {
        private readonly IUnitOfMeasureRepository _unitOfMeasureRepository;

        public UnitOfMeasureController(IUnitOfMeasureRepository unitOfMeasureRepository)
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
        public IActionResult Create(UnitOfMeasure unitOfMeasure) 
        {
            _unitOfMeasureRepository.Add(unitOfMeasure);

            return Ok(unitOfMeasure);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, UnitOfMeasure unitOfMeasure)
        {
            if(id != unitOfMeasure?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _unitOfMeasureRepository.Update(unitOfMeasure);

            return Ok(unitOfMeasure);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Delete(id);

            if(unitOfMeasure != null)
            {               
                return Ok(unitOfMeasure);
            }

            return NotFound();
        }
    }
}

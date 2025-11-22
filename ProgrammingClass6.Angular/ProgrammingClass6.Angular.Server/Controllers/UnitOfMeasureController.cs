using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unitofmeasures")]
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
            var unitsOfMeasure = _unitOfMeasureRepository.GetAll();
            return Ok(unitsOfMeasure);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var unit = _unitOfMeasureRepository.Get(id);

            if (unit == null)
            {
                return NotFound();
            }

            return Ok(unit);
        }

        [HttpPost]
        public IActionResult Create(ProductUnit unit)
        {
            _unitOfMeasureRepository.Add(unit);

            return Ok(unit);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductUnit unit)
        {
            if (id != unit?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            _unitOfMeasureRepository.Update(unit);

            return Ok(unit);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unit = _unitOfMeasureRepository.Delete(id);

            if (unit != null)
            {
                return Ok(unit);
            }

            return NotFound();
        }
    }
}
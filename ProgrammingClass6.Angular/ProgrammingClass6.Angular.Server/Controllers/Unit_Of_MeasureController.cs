using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using AutoMapper;



namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit-of-measures")]
    [ApiController]
    public class Unit_Of_MeasureController : ControllerBase
    {
        private readonly IUnitOfMeasureRepository _unitOfMeasureRepository;
        private readonly IMapper _mapper;
        public Unit_Of_MeasureController(IUnitOfMeasureRepository unitOfMeasureRepository, IMapper mapper)

        {
            _unitOfMeasureRepository = unitOfMeasureRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _unitOfMeasureRepository.GetAll();
            var dtoList = _mapper.Map<List<UnitOfMeasureDto>>(unitOfMeasures);
            return Ok(dtoList);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Get(id);
            if (unitOfMeasure == null)
            {
                return NotFound();
            }

            var dto = _mapper.Map<Unit_Of_Measure,UnitOfMeasureDto>(unitOfMeasure);
            return Ok(dto);
        }

        [HttpPost]
        public IActionResult Create(UnitOfMeasureDto unit_Of_measureDto)
        {
            var unit_Of_measureModel = _mapper.Map<UnitOfMeasureDto, Unit_Of_Measure>(unit_Of_measureDto);

            _unitOfMeasureRepository.Add(unit_Of_measureModel);
            unit_Of_measureDto.Id = unit_Of_measureModel.Id;

            return Ok(unit_Of_measureDto);

        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, UnitOfMeasureDto unit_Of_measureDto)
        {
            if (id != unit_Of_measureDto.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }


            var unit_Of_measureModel = _mapper.Map<UnitOfMeasureDto, Unit_Of_Measure>(unit_Of_measureDto);

            _unitOfMeasureRepository.Update(unit_Of_measureModel);
            return Ok(unit_Of_measureDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Get(id);
            if (unitOfMeasure != null)
            {
                var dto = _mapper.Map<Unit_Of_Measure, UnitOfMeasureDto>(unitOfMeasure);

                return Ok(dto);
            }
            return NotFound();
        }

    }
}

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Data.Migrations;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;


namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/unit-of-measures")]
    [ApiController]
    public class UnitOfMeasureController : ControllerBase
    {
        private readonly IUnitOfMeasureRepository _unitOfMeasureRepository;
        private readonly IMapper _mapper;

        public UnitOfMeasureController(IUnitOfMeasureRepository unitOfMeasureRepository, IMapper mapper)
        {
            _unitOfMeasureRepository = unitOfMeasureRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var unitOfMeasures = _unitOfMeasureRepository.GetAll();

            var dtoList = _mapper.Map<List<UnitOfMeasure>, List<UnitOfMeasureDto>>(unitOfMeasures);

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

            var unitOfMeasureDto = _mapper.Map<UnitOfMeasure, UnitOfMeasureDto>(unitOfMeasure);

            return Ok(unitOfMeasureDto);
        }

        [HttpPost]
        public IActionResult Create(UnitOfMeasureDto unitOfMeasureDto) 
        {
            var unitOfMeasureModel = _mapper.Map<UnitOfMeasureDto, UnitOfMeasure>(unitOfMeasureDto);

            _unitOfMeasureRepository.Add(unitOfMeasureModel);

            unitOfMeasureDto.Id = unitOfMeasureModel.Id;

            return Ok(unitOfMeasureDto);
        }
        
        [HttpPut("{id}")]
        public IActionResult Update(int id, UnitOfMeasureDto unitOfMeasureDto)
        {
            if(id != unitOfMeasureDto?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            var unitOfMeasureModel = _mapper.Map<UnitOfMeasureDto, UnitOfMeasure>(unitOfMeasureDto);

            _unitOfMeasureRepository.Update(unitOfMeasureModel);

            return Ok(unitOfMeasureDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var unitOfMeasure = _unitOfMeasureRepository.Delete(id);

            if(unitOfMeasure != null)
            {
                var unitOfMeasureDto = _mapper.Map<UnitOfMeasure, UnitOfMeasureDto>(unitOfMeasure);

                return Ok(unitOfMeasureDto);
            }

            return NotFound();
        }
    }
}

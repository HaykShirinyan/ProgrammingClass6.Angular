using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/product-types")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly IProductTypeRepository _productTypeRepository;
        private readonly IMapper _mapper;

        public ProductTypeController(IProductTypeRepository productTypeRepository, IMapper mapper)
        {
            _productTypeRepository = productTypeRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var productTypes = _productTypeRepository.GetAll();

            var dtoList = _mapper.Map<List<ProductType>, List<ProductTypeDto>>(productTypes);

            return Ok(dtoList);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var productType = _productTypeRepository.Get(id);

            if(productType == null)
            {
                return NotFound();
            }

            var productTypeDto = _mapper.Map<ProductType, ProductTypeDto>(productType);

            return Ok(productTypeDto);
        }

        [HttpPost]
        public IActionResult Create(ProductTypeDto productTypeDto)
        {
            var productTypeModel = _mapper.Map<ProductTypeDto, ProductType>(productTypeDto);

            _productTypeRepository.Add(productTypeModel);

            productTypeDto.Id = productTypeModel.Id;

            return Ok(productTypeDto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductTypeDto productTypeDto)
        {
            if(id != productTypeDto?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            var productTypeModel = _mapper.Map<ProductTypeDto, ProductType>(productTypeDto);

            _productTypeRepository.Update(productTypeModel);

            return Ok(productTypeDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var productType = _productTypeRepository.Delete(id);

            if(productType != null)
            {
                var productTypeDto = _mapper.Map<ProductType, ProductTypeDto>(productType);

                return Ok(productTypeDto);
            }

            return NotFound();
        }
    }    
}

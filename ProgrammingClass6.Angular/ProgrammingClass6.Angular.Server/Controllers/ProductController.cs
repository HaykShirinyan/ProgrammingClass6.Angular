using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly IMapper _mapper;

        public ProductController(IProductRepository productRepository, IMapper mapper)
        {
            _productRepository = productRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var products = _productRepository.GetAll();

            var dtoList = _mapper.Map<List<Product>, List<ProductDto>>(products);

            return Ok(dtoList);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var product = _productRepository.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            var productDto = _mapper.Map<Product, ProductDto>(product);

            return Ok(productDto);
        }

        [HttpPost]
        public IActionResult Create(ProductDto productDto)
        {
            var productModel = _mapper.Map<ProductDto, Product>(productDto);

            _productRepository.Add(productModel);

            productDto.Id = productModel.Id;

            return Ok(productDto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, ProductDto productDto)
        {
            if (id != productDto?.Id)
            {
                return BadRequest("Id in the body doesn't match with Id in the URL.");
            }

            var productModel = _mapper.Map<ProductDto, Product>(productDto);

            _productRepository.Update(productModel);

            return Ok(productDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var product = _productRepository.Delete(id);

            if (product != null)
            {
                var productDto = _mapper.Map<Product, ProductDto>(product);

                return Ok(productDto);
            }

            return NotFound();
        }
    }
}

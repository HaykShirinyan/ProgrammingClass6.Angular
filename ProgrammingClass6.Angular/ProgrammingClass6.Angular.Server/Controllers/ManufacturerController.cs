using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Controllers
{
    [Route("api/manufacturers")]
    [ApiController]
    public class ManufacturerController : ControllerBase
    {
        private readonly IManufacturerRepository _manufacturerRepository;

        public ManufacturerController(IManufacturerRepository manufacturerRepository)
        {
            _manufacturerRepository = manufacturerRepository;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var manufacturers = _manufacturerRepository.GetAll();
            return Ok(manufacturers);
        }
    }
}

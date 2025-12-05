using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Repositories.Implementations
{
    public class ManufacturerRepository : IManufacturerRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ManufacturerRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Manufacturer> GetAll()
        {
            return _dbContext
                .Manufacturers
                .ToList();
        }
    }
}

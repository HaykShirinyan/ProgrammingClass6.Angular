using System.Collections.Generic;
using System.Linq;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Repositories.Implementations
{
    public class UnitOfMeasureRepository : IUnitOfMeasureRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfMeasureRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ProductUnit> GetAll()
        {
            return _dbContext.ProductUnits.ToList();
        }

        public ProductUnit Get(int id)
        {
            return _dbContext.ProductUnits
                .SingleOrDefault(u => u.Id == id);
        }

        public ProductUnit Add(ProductUnit unit)
        {
            _dbContext.ProductUnits.Add(unit);
            _dbContext.SaveChanges();
            return unit;
        }

        public ProductUnit Update(ProductUnit unit)
        {
            _dbContext.ProductUnits.Update(unit);
            _dbContext.SaveChanges();
            return unit;
        }

        public ProductUnit Delete(int id)
        {
            var unit = _dbContext.ProductUnits.Find(id);
            if (unit != null)
            {
                _dbContext.ProductUnits.Remove(unit);
                _dbContext.SaveChanges();
            }
            return unit;
        }
    }
}
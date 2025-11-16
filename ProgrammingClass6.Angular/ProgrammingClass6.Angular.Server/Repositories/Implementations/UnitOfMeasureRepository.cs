using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;
using System.Linq;
using System.Collections.Generic;

namespace ProgrammingClass6.Angular.Server.Repositories.Implementations
{
    public class UnitOfMeasureRepository : IUnitOfMeasureRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public UnitOfMeasureRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<UnitOfMeasure> GetAll()
        {
            return _dbContext
                .UnitOfMeasures
                .ToList();
        }

        public UnitOfMeasure Get(int id)
        {
            return _dbContext
                .UnitOfMeasures
                .SingleOrDefault(unit => unit.Id == id);
        }

        public UnitOfMeasure Add(UnitOfMeasure unit)
        {
            _dbContext.UnitOfMeasures.Add(unit);
            _dbContext.SaveChanges();

            return unit;
        }

        public UnitOfMeasure Update(UnitOfMeasure unit)
        {
            _dbContext.UnitOfMeasures.Update(unit);
            _dbContext.SaveChanges();

            return unit;
        }

        public UnitOfMeasure Delete(int id)
        {
            var unit = Get(id);

            if (unit != null)
            {
                _dbContext.UnitOfMeasures.Remove(unit);
                _dbContext.SaveChanges();
            }

            return unit;
        }
    }
}

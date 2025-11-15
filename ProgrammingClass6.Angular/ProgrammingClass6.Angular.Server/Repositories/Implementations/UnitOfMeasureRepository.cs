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
                .SingleOrDefault(unitOfMeasure => unitOfMeasure.Id == id);
        }

        public UnitOfMeasure Add(UnitOfMeasure unitOfMeasure) 
        {
            _dbContext.UnitOfMeasures.Add(unitOfMeasure);
            _dbContext.SaveChanges();

            return unitOfMeasure;
        }

        public UnitOfMeasure Update(UnitOfMeasure unitOfMeasure)
        {
            _dbContext.UnitOfMeasures.Update(unitOfMeasure);
            _dbContext.SaveChanges();

            return unitOfMeasure;
        }

        public UnitOfMeasure Delete(int id)
        {
            var unitOfMeasure = Get(id);

            if(unitOfMeasure != null)
            {
                _dbContext.UnitOfMeasures.Update(unitOfMeasure);
                _dbContext.SaveChanges();

                return unitOfMeasure;
            }

            return null;
        }
    } 
} 

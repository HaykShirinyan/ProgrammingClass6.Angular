using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Repositories.Implementations

{
    public class UnitOfMeasureRepository: IUnitOfMeasureRepository
    {
        private readonly ApplicationDbContext _dbcontext;

        public UnitOfMeasureRepository(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public List<Unit_Of_Measure> GetAll()
        {
            return _dbcontext.Unit_Of_Measures.ToList();
        }
        public Unit_Of_Measure Get(int id)
        {
            return _dbcontext.Unit_Of_Measures.SingleOrDefault(uom => uom.Id == id);
        }
        public Unit_Of_Measure Add(Unit_Of_Measure unitOfMeasure)
        {
            _dbcontext.Unit_Of_Measures.Add(unitOfMeasure);
            _dbcontext.SaveChanges();
            return unitOfMeasure;
        }
        public Unit_Of_Measure Update(Unit_Of_Measure unitOfMeasure)
        {
            _dbcontext.Unit_Of_Measures.Update(unitOfMeasure);
            _dbcontext.SaveChanges();
            return unitOfMeasure;
        }
        public Unit_Of_Measure Delete(int id)
        {
            var unitOfMeasure = Get(id);
            if (unitOfMeasure != null)
            {
                _dbcontext.Unit_Of_Measures.Remove(unitOfMeasure);
                _dbcontext.SaveChanges();
            }
            return unitOfMeasure;
        }

        LinkedList<Unit_Of_Measure> IUnitOfMeasureRepository.GetAll()
        {
            throw new NotImplementedException();
        }

        void IUnitOfMeasureRepository.Add(Unit_Of_Measure unitOfMeasure)
        {
            throw new NotImplementedException();
        }

        void IUnitOfMeasureRepository.Update(Unit_Of_Measure unitOfMeasure)
        {
            throw new NotImplementedException();
        }

        void IUnitOfMeasureRepository.Delete(int id)
        {
            throw new NotImplementedException();
        }
    }
}

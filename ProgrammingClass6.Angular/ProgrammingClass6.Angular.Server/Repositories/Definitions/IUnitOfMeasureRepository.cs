using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IUnitOfMeasureRepository
    {
      LinkedList<Unit_Of_Measure> GetAll();
      Unit_Of_Measure Get(int id);
      void Add(Unit_Of_Measure unitOfMeasure);
      void Update(Unit_Of_Measure unitOfMeasure);
      void Delete(int id);
    }
}

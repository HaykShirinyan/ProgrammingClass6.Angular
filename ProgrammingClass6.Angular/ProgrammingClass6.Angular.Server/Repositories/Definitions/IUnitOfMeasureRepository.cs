using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IUnitOfMeasureRepository
    {
      List<Unit_Of_Measure> GetAll();
        Unit_Of_Measure Get(int id);
        Unit_Of_Measure Add(Unit_Of_Measure unitOfMeasure);
        Unit_Of_Measure Update(Unit_Of_Measure unitOfMeasure);
        Unit_Of_Measure Delete(int id);


    }
}

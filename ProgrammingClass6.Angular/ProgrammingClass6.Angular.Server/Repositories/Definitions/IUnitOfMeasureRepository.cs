using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IUnitOfMeasureRepository
    {
        List<UnitOfMeasure> GetAll();

        UnitOfMeasure Get(int id);

        UnitOfMeasure Add(UnitOfMeasure unitOfMeasure);

        UnitOfMeasure Update(UnitOfMeasure unitOfMeasure);

        UnitOfMeasure Delete(int id);
    }
}

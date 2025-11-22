using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IUnitOfMeasureRepository
    {
        List<ProductUnit> GetAll();

        ProductUnit Get(int id);

        ProductUnit Add(ProductUnit unit);

        ProductUnit Update(ProductUnit unit);

        ProductUnit Delete(int id);
    }
}
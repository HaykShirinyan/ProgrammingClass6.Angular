using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IProductTypeRepository
    {
        List<ProductType> GetAll();

        ProductType Get(int id);

        ProductType Add(ProductType productType);

        ProductType Update(ProductType productType);

        ProductType Delete(int id);
    }
}
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Repositories.Definitions
{
    public interface IProductRepository
    {
        List<Product> GetAll();

        Product Get(int id);

        Product Add(Product product);

        Product Update(Product product);

        Product Delete(int id);
    }
}

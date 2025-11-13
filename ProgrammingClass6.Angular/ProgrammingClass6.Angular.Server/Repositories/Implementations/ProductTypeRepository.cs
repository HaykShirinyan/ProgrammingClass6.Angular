using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;


namespace ProgrammingClass6.Angular.Server.Repositories.Implementations
{
    public class ProductTypeRepository: IProductTypeRepository
    {
        private readonly ApplicationDbContext _dbcontext;
        public ProductTypeRepository(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public List<ProductType> GetAll()
        {
            return _dbcontext.ProductTypes.ToList();
        }
        public ProductType? Get(int id)
        {
            return _dbcontext.ProductTypes.SingleOrDefault(pt => pt.Id == id);
        }

        public ProductType Add(ProductType productType)
        {
            _dbcontext.ProductTypes.Add(productType);
            _dbcontext.SaveChanges();
            return productType;
        }

        public ProductType Update(ProductType productType)
        {
            
            _dbcontext.ProductTypes.Update(productType);
            _dbcontext.SaveChanges();
            return productType;
        }

        public ProductType Delete(int id)
        {
            var productType = Get(id);
            if (productType != null)
            {
                _dbcontext.ProductTypes.Remove(productType);
                _dbcontext.SaveChanges();
            }
            return productType;
        }
    }
}

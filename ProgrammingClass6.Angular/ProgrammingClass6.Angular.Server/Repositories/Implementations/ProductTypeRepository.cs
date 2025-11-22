using System.Collections.Generic;
using ProgrammingClass6.Angular.Server.Data;
using ProgrammingClass6.Angular.Server.Models;
using ProgrammingClass6.Angular.Server.Repositories.Definitions;

namespace ProgrammingClass6.Angular.Server.Repositories.Implementations
{
    public class ProductTypeRepository : IProductTypeRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ProductTypeRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<ProductType> GetAll()
        {
            return _dbContext.ProductTypes.ToList();
        }

        public ProductType Get(int id)
        {
            return _dbContext.ProductTypes
                .SingleOrDefault(pt => pt.Id == id);
        }

        public ProductType Add(ProductType productType)
        {
            _dbContext.ProductTypes.Add(productType);
            _dbContext.SaveChanges();

            return productType;
        }

        public ProductType Update(ProductType productType)
        {
            _dbContext.ProductTypes.Update(productType);
            _dbContext.SaveChanges();

            return productType;
        }

        public ProductType Delete(int id)
        {
            var productType = _dbContext.ProductTypes.Find(id);

            if (productType != null)
            {
                _dbContext.ProductTypes.Remove(productType);
                _dbContext.SaveChanges();
            }

            return productType;
        }
    }
}
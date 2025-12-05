using Microsoft.EntityFrameworkCore;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<Manufacturer> Manufacturers { get; set; }

        public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<UnitOfMeasure> UnitOfMeasures { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
    }
}

using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class ProductProfile : Profile
    {
        public ProductProfile() 
        {
            CreateMap<Product, ProductDto>();

            CreateMap<ProductDto, Product>()
                .ForMember(product => product.ManufacturerId, options => options.MapFrom(product => product.Manufacturer.Id))
                .ForMember(product => product.Manufacturer, options => options.Ignore());
        }
    }
}

using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class ProductTypeProfile : Profile
    {
        public ProductTypeProfile()
        {
            CreateMap<ProductTypeDto, ProductType>();
            CreateMap<ProductType, ProductTypeDto>();

            CreateMap<ReferencedProductTypeDto, ProductType>();
            CreateMap<ProductType, ReferencedProductTypeDto>();
        }
    }
}

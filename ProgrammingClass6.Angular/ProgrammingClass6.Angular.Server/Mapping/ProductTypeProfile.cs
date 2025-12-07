using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class ProductTypeProfile: Profile
    {
        public ProductTypeProfile()
        {
            CreateMap<ProductType,ProductTypeDto>();
            CreateMap<ProductTypeDto,ProductType>()
                .ForMember(productType => productType.ManufacturerId, options => options.MapFrom(productType => productType.Manufacturer.Id))
                .ForMember(productType => productType.Manufacturer, options => options.Ignore());
        }
    }
}

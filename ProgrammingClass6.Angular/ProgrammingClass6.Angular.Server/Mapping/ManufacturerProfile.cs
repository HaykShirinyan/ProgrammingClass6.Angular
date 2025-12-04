using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class ManufacturerProfile : Profile
    {
        public ManufacturerProfile()
        {
            CreateMap<ManufacturerDto, Manufacturer>();
            CreateMap<ManufacturerDto, Manufacturer>();

            CreateMap<ReferencedManufacturerDto, Manufacturer>();
            CreateMap<Manufacturer, ReferencedManufacturerDto>();
        }
    }
}

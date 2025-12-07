using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class UnitOfMeasureProfile : Profile
    {
        public UnitOfMeasureProfile() 
        { 
            CreateMap<UnitOfMeasureDto, UnitOfMeasure>();
            CreateMap<UnitOfMeasure, UnitOfMeasureDto>();

            CreateMap<ReferencedUnitOfMeasureDto, UnitOfMeasure>();
            CreateMap<UnitOfMeasure, ReferencedUnitOfMeasureDto>();
        }
    }
}

using AutoMapper;
using ProgrammingClass6.Angular.Server.DataTrnasferObjects;
using ProgrammingClass6.Angular.Server.Models;

namespace ProgrammingClass6.Angular.Server.Mapping
{
    public class UnitOfMeasureProfile: Profile
    {
        public UnitOfMeasureProfile() 
        {
            CreateMap<Unit_Of_Measure, UnitOfMeasureDto>();
            CreateMap<UnitOfMeasureDto, Unit_Of_Measure>()
                .ForMember(unitOfMeasure => unitOfMeasure.Manufacturer, opt => opt.MapFrom(dto => dto.Manufacturer))
                .ForMember(unitOfMeasure => unitOfMeasure.Manufacturer, options => options.Ignore());
        }

    }
}

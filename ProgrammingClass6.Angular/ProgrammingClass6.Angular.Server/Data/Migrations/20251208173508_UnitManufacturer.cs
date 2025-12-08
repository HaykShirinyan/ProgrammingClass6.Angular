using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProgrammingClass6.Angular.Server.Data.Migrations
{
    /// <inheritdoc />
    public partial class UnitManufacturer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ManufacturerId",
                table: "Unit_Of_Measures",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Unit_Of_Measures_ManufacturerId",
                table: "Unit_Of_Measures",
                column: "ManufacturerId");

            migrationBuilder.AddForeignKey(
                name: "FK_Unit_Of_Measures_Manufacturers_ManufacturerId",
                table: "Unit_Of_Measures",
                column: "ManufacturerId",
                principalTable: "Manufacturers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Unit_Of_Measures_Manufacturers_ManufacturerId",
                table: "Unit_Of_Measures");

            migrationBuilder.DropIndex(
                name: "IX_Unit_Of_Measures_ManufacturerId",
                table: "Unit_Of_Measures");

            migrationBuilder.DropColumn(
                name: "ManufacturerId",
                table: "Unit_Of_Measures");
        }
    }
}

import HoroImg from "../../assets/DashBoard/DashBordHeroSectionIMG.png";
import CompanyInfo from "../../components/ReceptionPannel/companyInfo";
import ChartSesion from "../../components/ReceptionPannel/Homepage/ChartSesion";
import StatsBox from "../../components/ReceptionPannel/StatsBox";
import TodoList from "../../components/ReceptionPannel/Todo";
import WeatherCard from "../../components/ReceptionPannel/WeatherCard";
const Dashboard = () => {
  return (
    <div className="p-4 lg:p-8 bg-background ">
      {/* Company info card */}
      <CompanyInfo companyName={"Topmost Group "} />
      {/* Weather and stats container */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2  ">
        {/* Weather Card - Assuming it takes a color prop for background */}
        <div className="md:col-span-2 xl:col-span-1 ">
          <WeatherCard
            HoroImg={HoroImg}
            temperature="31"
            city="Bangalore"
            country="India"
            color="bg-blue-500"
          />
        </div>

        {/* Stats Boxes */}
        <div className="flex  flex-grow gap-4 my-auto md:col-span-2 xl:col-span-1 ">
          <div className="flex  flex-col gap-4 flex-grow ">
            <StatsBox
              title="Today's Bookings"
              value="4006"
              percentage="100%"
              color="bg-blue-500"
            />
            <StatsBox
              title="Total Bookings"
              value="61344"
              percentage="220%"
              color="bg-purple-500"
            />
          </div>
          <div className="flex flex-col gap-4 flex-grow ">
            <StatsBox
              title="Number of Meetings"
              value="34040"
              percentage="200%"
              color="bg-pink-500"
            />
            <StatsBox
              title="Number of Clients"
              value="47033"
              percentage="22%"
              color="bg-red-500"
            />
          </div>
        </div>
      </div>

      <ChartSesion />
      <TodoList />
    </div>
  );
};

export default Dashboard;

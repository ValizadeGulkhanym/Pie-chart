import "./App.css";
import DateChart from "./components/DateChart";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  return (
    <div className="sm: w-[350px] bg-[black]">
      <DoughnutChart />
      
      <DateChart />
   
    
    </div>
  );
}

export default App;

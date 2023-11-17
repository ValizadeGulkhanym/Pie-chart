
import './App.css'
import DateChart from './components/DateChart'
import DoughnutChart from './components/DoughnutChart'
import DoughnutChart2 from './components/DoughnutChart2'

function App() {


  return (
    <div className='app sm: w-[350px] '>
  <DoughnutChart/>
  <DoughnutChart2/>
  <DateChart/>
    </div>
  )
}

export default App

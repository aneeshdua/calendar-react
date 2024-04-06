import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar/Calendar';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const handleSetToday = () => setCurrentDate(new Date());
  return (
    <div className="">
      <div className="">
        <p>
          <strong>Selected Date: </strong>
          {currentDate.toDateString()}
        </p>

        <button onClick={handleSetToday}>Reset to today</button>
      </div>

      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

export default App;

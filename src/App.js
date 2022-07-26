import { useEffect } from "react";
import { ListItem } from "./components/listItem";
import { SideNav } from "./components/sideNav";
import { data, data_set_2 } from "./utils/data";

import { useDate, useCountdown, } from "./hooks/useCountdown";
import { useToggle } from './hooks/useToggle';


function App() {
  const [date] = useDate();
  const [days, hours, minutes, seconds] = useCountdown(new Date("Jan 5, 2023 15:37:25").getTime());
  const [isOn, setIsOn] = useToggle();

  return (
    <>
    <div className="w-72">
        <SideNav 
            title="FOLLOWED CHANNELS"
            content={<ListItem data={data} />}
            content2={<ListItem data={data_set_2} />}
        />
        <div>
          {date && <p>Time : {date.toLocaleTimeString()}</p>}
          <button onClick={setIsOn}>{isOn ? "On" : "Off"}</button>
        </div>
        
    </div>
    <Clock />
    </>
  );
}

export default App;


function Clock() {
  const [day, hours, minutes, seconds] = useCountdown();

  console.log(hours.toLocaleString('en-US', {minimumIntegerDigits: 2}))

  return (
    <div className="flex justify-center items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500">
      {hours.toLocaleString('en-US', {minimumIntegerDigits: 2}).split("").map((value, index) => (
        <div className="text-7xl bg-white rounded-md p-3 my-10" key={index}>{value}</div>
      ))}

      <div className="text-7xl text-white">:</div>
      {minutes && minutes.toLocaleString('en-US', {minimumIntegerDigits: 2}).split("").map((value, index) => (
        <div className="text-7xl bg-white rounded-md p-3" key={index}>{value}</div>
      ))}

      <div className="text-7xl text-white">:</div>
      {/* needs a unique key. currently numbers like 55 have the same key */}
      {/* 00 causes the render to disappear */}
      {seconds.toLocaleString('en-US', {minimumIntegerDigits: 2}).split("").map((value, index) => (
        <div className="text-7xl bg-white rounded-md p-3" key={index}>{value}</div>
      ))}
    </div>
  )
}
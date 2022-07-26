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
    <div className="w-72">
        <SideNav 
            title="FOLLOWED CHANNELS"
            content={<ListItem data={data} />}
            content2={<ListItem data={data_set_2} />}
        />
        <div>
          {date && <p>Time : {date.toLocaleTimeString()}</p>}
          {hours && <h1>{days}d {hours}h {minutes}m {seconds}s</h1>}
          <button onClick={setIsOn}>{isOn ? "on" : "Off"}</button>
        </div>
    </div>
  );
}

export default App;

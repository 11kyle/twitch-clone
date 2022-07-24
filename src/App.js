import { ListItem } from "./components/listItem";
import { SideNav } from "./components/sideNav";
import { data, data_set_2 } from "./utils/data";

function App() {
  return (
    <div className="w-72">
        <SideNav 
            title="FOLLOWED CHANNELS"
            content={<ListItem data={data} />}
            content2={<ListItem data={data_set_2} />}
        />
    </div>
  );
}

export default App;

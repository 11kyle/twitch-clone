import { useState } from "react";
import { useResize } from "../hooks/useResize";

export const ListItem = ({ data }) => {
  const [size, setSize] = useState(7);
  const [size1, setSize1] = useResize(data);


  function showMore() {
    if (data.length > size) return setSize(prevSize => prevSize + 7);

    return setSize(prevSize => prevSize -7);
  }

  const items = data.slice(0, size).map(({name, game, viewers}) => {
    return (
      <a className="flex items-center justify-start p-1 bg-slate-700 hover:bg-slate-500" key={name} href="#">
        <div className="w-8 h-8 mr-1 bg-slate-300 rounded-full">
          {/* image here if there is an image */}
        </div>
        <div>
          <p className="text-sm text-white font-medium">{name}</p>
          <p className="text-xs text-slate-200">{game}</p>
        </div>
        <div className="flex items-center space-x-1 w-12 ml-auto">
          <div className="w-2 h-2 rounded-full bg-red-600"></div>
          <p className="text-white text-xs">{viewers}</p>
        </div>
      </a>
    );
  });

  return (
    <>
      {items}
      <button onClick={setSize1}>{data.length > size1 ? "Show More" : "Show Less"}</button>

      {data.length && <button className="text-violet-500 text-sm mx-2 hover:underline" 
      onClick={showMore}>
        {data.length > size ? "Show More" : "Show Less"}
      </button>}

    {/*
      {data.length > size ? 
        <button className="text-violet-500 text-sm mx-2 hover:underline" onClick={showMore}>
          {size <= 7 ? "Show More" : "Show Less"}
        </button> :
        <button className="text-violet-500 text-sm mx-2 hover:underline" onClick={showMore}>
        {size <= 7 ? "Show More" : "Show Less"}
      </button>
      }
    */}
    </>
  );
}
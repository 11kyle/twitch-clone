import { useState } from "react"

export const useResize = (data, initialSize = 7) => {
    const [size, setSize] = useState(initialSize);

    const resize = () => {
      if (data.length > size) return setSize(prevSize => prevSize + 7);
    
      return setSize(prevSize => prevSize -7);
    }

  return [size, resize];
}
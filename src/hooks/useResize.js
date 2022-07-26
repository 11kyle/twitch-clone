import { useState } from "react"

export const useResize = (data, incrementAmount = 7, initialSize = 7) => {
    const [size, setSize] = useState(initialSize);

    const resize = () => {
      if (data.length > size) return setSize(prevSize => prevSize + incrementAmount);
    
      return setSize(prevSize => prevSize - incrementAmount);
    }

  return [size, resize];
}
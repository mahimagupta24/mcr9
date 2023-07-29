import { createContext, useState } from "react";

export const VideosContext = createContext();
export default function VideosProvider({ children }) {
    const [watchLaterList,setWatchLaterList] = useState([])
  return <VideosContext.Provider value={{watchLaterList,setWatchLaterList}}>{children}</VideosContext.Provider>;
}

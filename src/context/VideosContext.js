import { createContext, useState } from "react";

export const VideosContext = createContext();
export default function VideosProvider({ children }) {
    const [watchLaterList,setWatchLaterList] = useState([])
    const handleWatchLater = (videoId) => {
      setWatchLaterList((prevWatchLaterList) =>
        prevWatchLaterList.includes(videoId)
          ? prevWatchLaterList.filter((_id) => _id !== videoId)
          : [...prevWatchLaterList, videoId]
      );
    };
  return <VideosContext.Provider value={{watchLaterList,setWatchLaterList,handleWatchLater}}>{children}</VideosContext.Provider>;
}

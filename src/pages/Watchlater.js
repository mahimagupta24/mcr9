import { useContext, useEffect } from "react";
import { VideosContext } from "../context/VideosContext";
import { videos } from "../data";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function WatchLater() {
  const { watchLaterList, setWatchLaterList ,isWatchLaterPresent,addWatchLater,removeWatchLater} =
    useContext(VideosContext);

  const watchLaterVideos = videos.filter(({ _id }) =>
    watchLaterList.includes(_id)
  );
  console.log(watchLaterList)
  console.log(watchLaterVideos);

  // useEffect(() => {
  //   const storeWatchedLaterList = localStorage.getItem("watchLaterList");
  //   if (storeWatchedLaterList) {
  //     setWatchLaterList(JSON.parse(storeWatchedLaterList));
  //   }
  // }, []);
  return (
    <div className="main-container">
      {watchLaterVideos.map((selectedVideo) =>{ 
        const { _id, thumbnail, views, creator } = selectedVideo
        return <div key={_id}>
          <img src={thumbnail} />
          <p>{creator}</p>
          <p>{views}</p>
          {isWatchLaterPresent(selectedVideo._id) ? (
                  <WatchLaterIcon className="watchlater" onClick={()=>removeWatchLater(selectedVideo._id)} />
                ) : (
                  <WatchLaterIcon className="add-watchlater"onClick={()=>addWatchLater(selectedVideo._id)} />
                )}
          {/* <WatchLaterIcon
            className="watchlater"
            onClick={() => handleWatchLater(_id)}
          /> */}
        </div>
      })}
    </div>
  );
}

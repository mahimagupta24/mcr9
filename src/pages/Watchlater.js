import { useContext, useEffect } from "react";
import { VideosContext } from "../context/VideosContext";
import { videos } from "../data";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function WatchLater() {
  const { watchLaterList, setWatchLaterList, handleWatchLater } =
    useContext(VideosContext);

  const watchLaterVideos = videos.filter(({ _id }) =>
    watchLaterList.includes(_id)
  );
  // console.log(watchLaterList)
  console.log(watchLaterVideos);

  useEffect(() => {
    const storeWatchedLaterList = localStorage.getItem("watchLaterList");
    if (storeWatchedLaterList) {
      setWatchLaterList(JSON.parse(storeWatchedLaterList));
    }
  }, []);
  return (
    <div className="main-container">
      {watchLaterVideos.map(({ _id, thumbnail, views, creator }) => (
        <div key={_id}>
          <img src={thumbnail} />
          <p>{creator}</p>
          <p>{views}</p>
          <WatchLaterIcon
            className="watchlater"
            onClick={() => handleWatchLater(_id)}
          />
        </div>
      ))}
    </div>
  );
}

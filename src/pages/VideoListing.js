import { useParams } from "react-router-dom";
import { videos } from "../data";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useContext, useEffect } from "react";
import { VideosContext } from "../context/VideosContext";
export default function VideoListing() {
  const { videoCategory } = useParams();
  const { watchLaterList, setWatchLaterList } = useContext(VideosContext);
  const selectedVideos = videos.filter(
    ({ category }) => category === videoCategory
  );

  useEffect(() => {
    localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

  const handleWatchLater = (videoId) => {
    setWatchLaterList((prevWatchLaterList) =>
      prevWatchLaterList.includes(videoId)
        ? prevWatchLaterList.filter((_id) => _id !== videoId)
        : [...prevWatchLaterList, videoId]
    );
  };
  
//   const handleWatchLater = (videoId) => {
//      setWatchLaterList(watchLaterList.includes(videoId)?watchLaterList.filter(({_id})=>_id!==videoId):[...watchLaterList,videoId])
    // if (watchLaterList.includes(videoId)) {
    //   setWatchLaterList(watchLaterList.filter(({ id }) => id !== videoId));
    // } else {
    //   setWatchLaterList([...watchLaterList, videoId]);
    // }
  

  return (
    <div>
      <h1>{videoCategory}</h1>
      <div className="category-main">
        {selectedVideos.map(({ _id, thumbnail, title, category, views }) => (
          <div className="video-card">
            <img src={thumbnail} alt="category" />
            <b>
              <p className="title">{title}</p>
            </b>
            <b>
              <p>{category}</p>
            </b>
            <p>
              <span>{views} views</span>
            </p>
            <div>
              <WatchLaterIcon
                className="watchlater"
                onClick={() => handleWatchLater(_id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

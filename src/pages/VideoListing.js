import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../data";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { useContext, useEffect } from "react";
import { VideosContext } from "../context/VideosContext";
export default function VideoListing() {
  const navigate = useNavigate()
  const { videoCategory } = useParams();

  const {
    watchLaterList,
    handleWatchLater,
    addWatchLater,
    removeWatchLater,
    isWatchLaterPresent,
  } = useContext(VideosContext);
  const selectedVideos = videos.filter(
    ({ category }) => category === videoCategory
  );

  useEffect(() => {
    localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList));
  }, [watchLaterList]);

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
        {selectedVideos.map((selectedVideo) => {
          const { _id, thumbnail, title, category, views } = selectedVideo;
          return (
            <div className="video-card" key={_id}>
              <img src={thumbnail} alt="category"onClick={()=>navigate(`/video/${_id}`)} />
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
                {isWatchLaterPresent(selectedVideo._id) ? (
                  <WatchLaterIcon className="watchlater" onClick={()=>{
                    removeWatchLater(selectedVideo._id)
                  console.log("remove")
                  }
                   } />
                ) : (
                  <WatchLaterIcon className="add-watchlater"onClick={()=>addWatchLater(selectedVideo._id)} />
                )}
                {/* <WatchLaterIcon
                className={`${
                  watchLaterList.some((video) => video._id === _id)
                    ? "added-to-watch-later-btn"
                    : "watch-later-btn"
                }`}
                onClick={() => handleWatchLater(_id)}
              /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import { videos } from "../data";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import { VideosContext } from "../context/VideosContext";
import { useNavigate } from "react-router-dom";

export default function Explore() {
    const navigate = useNavigate()
  const { handleWatchLater } = useContext(VideosContext);
  const [searchText, setSearchText] = useState("");
const[filteredVideos,setFilteredVideos] = useState(videos)

  const searchHandler = (text) => {
   const filtered= videos.filter(({ title }) =>
      title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredVideos(filtered)
    setSearchText(text)
  };

  return (
    <div>
      <h1>Explore</h1>
      <div className="input">
        <input placeholder="Search video by title"type="text" onChange={(e)=>searchHandler(e.target.value)}/>
      </div>
      <div className="category-main">
        {filteredVideos.map(({ _id, thumbnail, title, category, views }) => (
          <div className="video-card" key={_id} onClick={()=>navigate(`/video/${_id}`)}>
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

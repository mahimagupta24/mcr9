import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate()
  return (
    <div className="side-bar-main">
      <div className="side-bar-content">
        <span>
          <i className="fa fa-home"></i>Home
        </span>
      </div>
      <div className="side-bar-content">
        <span>
          <i className="fa fa-compass"></i>Explore
        </span>
      </div>
    
      <div className="side-bar-content">
        <WatchLaterIcon style={{ fontSize: "1rem" }} onClick={()=>navigate("/watchlater")}/>
    Watch later
      </div>
      <div className="side-bar-content">
        <PlaylistAddIcon style={{ fontSize: "1.3rem" }} />
        Playlists
      </div>
    </div>
  );
}

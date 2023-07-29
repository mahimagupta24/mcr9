import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoListing from "./pages/VideoListing";
import WatchLater from "./pages/Watchlater";
import Playlist from "./pages/Playlist";
import Explore from "./pages/Explore";
import Video from "./pages/Video";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoCategory" element={<VideoListing />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/explore" element={<Explore />} />
        <Route path ="/video/:videoId"element={<Video/>}/>
      </Routes>
    </div>
  );
}

export default App;

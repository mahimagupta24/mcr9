import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoListing from "./pages/VideoListing";
import WatchLater from "./pages/Watchlater";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/videos/:videoCategory"element={<VideoListing/>}/>
        <Route path ="/watchlater"element={<WatchLater/>}/>
      </Routes>
    </div>
  );
}

export default App;

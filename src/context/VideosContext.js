import { createContext, useState, useEffect } from "react";

export const VideosContext = createContext();
export default function VideosProvider({ children }) {
  const [watchLaterList, setWatchLaterList] = useState(JSON.parse(localStorage.getItem("watchLaterList"))||[]);
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showPlaylistModel, setShowPlaylistModel] = useState(false);

  // const handleWatchLater = (videoId) => {
  //   setWatchLaterList((prevWatchLaterList) =>
  //     prevWatchLaterList.includes(videoId)
  //       ? prevWatchLaterList.filter((_id) => _id !== videoId)
  //       : [...prevWatchLaterList, videoId]
  //   );
  // };

  const isWatchLaterPresent = (videoId) => watchLaterList?.includes(videoId);
  // console.log

  const addWatchLater = (videoId) =>
    setWatchLaterList((watchLaterList) => [...watchLaterList, videoId]);

  const removeWatchLater = (videoId) =>
    setWatchLaterList((watchLaterList) =>
      watchLaterList.filter((watchLater) => watchLater !== videoId)
    );
  // useEffect(() => {
  //   const storedPlaylists = JSON.parse(localStorage.getItem("playlists"));
  //   setPlaylists(storedPlaylists);
  // }, []);

  useEffect(() => {
    localStorage.setItem("watchLaterList", JSON.stringify(watchLaterList));
  }, [watchLaterList]);
  
 
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const createPlaylist = () => {
    const newPlaylist = {
      id:new Date(),
      playListName: name,
      playListDescription: description,
       imageURL: "https://picsum.photos/300/200",
      videos: [],
    };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const deletePlaylist = (playlistName) => {
    setPlaylists((playlists) =>
      playlists.filter(({ playListName }) => playListName !== playlistName)
    );
  };
  return (
    <VideosContext.Provider
      value={{
        watchLaterList,
        setWatchLaterList,
        // handleWatchLater,
        playlists,
        setPlaylists,
        handleName,
        handleDescription,
        showPlaylistModel,
        setShowPlaylistModel,
        createPlaylist,
        deletePlaylist,
        isWatchLaterPresent,
        addWatchLater,
        removeWatchLater,
        name
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

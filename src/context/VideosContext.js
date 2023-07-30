import { createContext, useState, useEffect } from "react";

export const VideosContext = createContext();
export default function VideosProvider({ children }) {
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [showPlaylistModel, setShowPlaylistModel] = useState(false);

  const handleWatchLater = (videoId) => {
    setWatchLaterList((prevWatchLaterList) =>
      prevWatchLaterList.includes(videoId)
        ? prevWatchLaterList.filter((_id) => _id !== videoId)
        : [...prevWatchLaterList, videoId]
    );
  };

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
    localStorage.setItem("playlists", JSON.stringify(playlists));
  }, [playlists]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const createPlaylist = () => {
    const newPlaylist = {
      name: name,
      description: description,
      imageURL: "https://picsum.photos/200/300",
      videos: [],
    };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  const deletePlaylist = (playlistName) => {
    setPlaylists((playlists) =>
      playlists.filter(({ name }) => name !== playlistName)
    );
  };
  return (
    <VideosContext.Provider
      value={{
        watchLaterList,
        setWatchLaterList,
        handleWatchLater,
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
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

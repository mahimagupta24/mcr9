import { useContext,useEffect } from "react";
import { VideosContext } from "../context/VideosContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";



export default function Playlist() {

    
  const {
    playlists,
    setShowPlaylistModel,
    showPlaylistModel,
    handleDescription,
    handleName,
    createPlaylist,
    setPlaylists,deletePlaylist
  } = useContext(VideosContext);

  useEffect(() => {
    const storedPlaylists = localStorage.getItem("playlists")
    console.log("abc",storedPlaylists)
    if(storedPlaylists){
    setPlaylists(JSON.parse(storedPlaylists))
    }
  }, []);

  const handleCreatePlaylist = () => {
    createPlaylist();
    setShowPlaylistModel(false);
  };

  const handleDeletePlaylist =(playlistName)=>{
     deletePlaylist(playlistName)
    setShowPlaylistModel(false)
  }

  return (
    <div>
      <div>
        {" "}
        <PlaylistAddIcon
          style={{ fontSize: "1.3rem" }}
          onClick={() => setShowPlaylistModel(true)}
        />
      </div>
      {showPlaylistModel && (
        <div>
          <label>Name</label>
          <input type="text" onChange={handleName} />
          <label>Description</label>
          <input type="text" onChange={handleDescription} />
          <button onClick={handleCreatePlaylist}>Create</button>
         
        </div>
      )}
      {playlists.map(({ name, description, imageURL }) => (
        <div>
            <img src={imageURL}/>
          <p>{name}</p>
          <p>{description}</p>
          <button onClick ={()=>handleDeletePlaylist(name)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

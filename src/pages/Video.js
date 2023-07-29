import { useParams } from "react-router-dom";
import { videos } from "../data";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useEffect, useState } from "react";

export default function Video() {
  const { videoId } = useParams();
  const videoDetails = videos.find(({ _id }) => _id === Number(videoId));
  const { thumbnail, src, title, handleName, handleDescription ,showPlaylistModel,setShowPlaylistModel} = videoDetails;
  const [notes, setNotes] = useState("");
  const [showModal, setShowModal] = useState(false);

  //   const addNotes = ()=>{
  //     setShowModal(true)
  //   }

  const saveNotes = () => {
    localStorage.setItem(`video_${videoId}_notes`, notes);
    setShowModal(false);
  };
  const editNotes = () => {
    const existingNotes = localStorage.getItem(`video_${videoId}_notes`);
    setNotes(existingNotes);
    setShowModal(true);
  };
  const deleteNotes = () => {
    localStorage.removeItem(`video_${videoId}_notes`);
    setNotes("");
    setShowModal(false);
  };
  useEffect(() => {
    const storedNotes = localStorage.getItem(`video_${videoId}_notes`);
    setNotes(storedNotes);
  }, []);
  return (
    <div>
      <img src={thumbnail} alt="video" />
      <video controls>
        <source src={src} />
        Your browser does not support the video tag.
      </video>
      <h4>{title}</h4>
      <div>
        {" "}
        <PlaylistAddIcon style={{ fontSize: "1.3rem" }} onClick={()=>setShowPlaylistModel(true)}/>
      </div>
      {showPlaylistModel && (
        <div>
            <label>Name</label>
          <input type="text" onChange={handleName} />
          <label>Description</label>
          <input type="text" onChange={handleDescription} />
        </div>
      )}
      <div>
        <EditNoteIcon onClick={editNotes} />
      </div>

      {showModal && (
        <div>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button onClick={saveNotes}>Save</button>
          <button onClick={deleteNotes}> delete</button>
        </div>
      )}
      <p>{notes}</p>
    </div>
  );
}

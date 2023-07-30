import { useParams } from "react-router-dom";
import { videos } from "../data";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "../context/VideosContext";

export default function Video() {
  const { videoId } = useParams();
  const [editNoteId, setEditNoteId] = useState();
  const videoDetails = videos.find(({ _id }) => _id === Number(videoId));
  const {
    thumbnail,
    src,
    title,
    handleName,
    handleDescription,
   
  } = videoDetails;
  const [notes, setNotes] = useState([]);
  const [textNote, setTextNote] = useState("");
  const [showModal, setShowModal] = useState(false);
 const {showPlaylistModel,
  setShowPlaylistModel} = useContext(VideosContext)

  //   const addNotes = ()=>{
  //     setShowModal(true)
  //   }
  const closeModal = () => {
    setShowModal(false);
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleOutsideClick = () => {
    closeModal();
  };

  const saveNotes = () => {
    if (editNoteId !== null) {
      setNotes((notes) =>
        notes.map((note) =>
          note.id === editNoteId ? { ...note, title: textNote } : note
        )
      );
      // setNotes("")
      setEditNoteId(null)
    } else{
    const note = {
      id: new Date().getTime(),
      title: textNote,
    };
    setNotes((notes) => [...notes, note]);
  }
    setTextNote("");
    // localStorage.setItem(`video_${videoId}_notes`, notes);
    setShowModal(false);
  };

  const editNotes = (noteId) => {
    setEditNoteId(noteId);
    const noteToEdit = notes.find((note) => note.id === noteId);
    setTextNote(noteToEdit.title);
    setShowModal(true);
  };

  // const editNotes = () => {
  //   const existingNotes = localStorage.getItem(`video_${videoId}_notes`);
  //   setNotes(existingNotes);
  //   setShowModal(true);
  // };
  const deleteNotes = (note) => {
    // localStorage.removeItem(`video_${videoId}_notes`);
    setNotes((notes) => notes.filter(({ id }) => id !== note.id));
    setShowModal(false);
  };

  const cancelModal = ()=>{
    setShowModal(false)
  }
  const savePlaylist = ()=>{
    setShowPlaylistModel(false)
  }

  // useEffect(() => {
  //   const storedNotes = localStorage.getItem(`video_${videoId}_notes`);
  //   setNotes(storedNotes);
  // }, []);
  return (
    <div >
      {/* <img src={thumbnail} alt="video" /> */}
      <iframe src={src} height="400px" width="800px"></iframe>
      <h4>{title}</h4>
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
          <button onClick={savePlaylist}>Add</button>
        </div>
      )}
      <div>
        <EditNoteIcon onClick={() => setShowModal(true)} />
      </div>
      {notes?.map((note) => (
        <div >
          <p>{note.title}</p>
          <div className="edit-del-btn">
          <button className="delete-btn" onClick={() => deleteNotes(note)}> delete</button>
          <button className="edit-btn"onClick={() => editNotes(note.id)}> edit</button>
        </div>
        </div>
      ))}
      {showModal && (
        <div className="notes-main" onClick={handleOutsideClick}>
          <div className="modal-container" onClick={handleModalClick}>
          <input  
            type="text"
            value={textNote}
            onChange={(e) => setTextNote(e.target.value)}
          />
          <button onClick={() => saveNotes()}>Save</button>
          <button onClick={cancelModal}>Cancel</button>
        </div>
        </div>
      )}
    </div>
  );
}

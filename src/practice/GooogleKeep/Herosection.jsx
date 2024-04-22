import React, { useState } from 'react';
import img from './Google_Keep_icon_(2020).svg.png';
import './Herosection.css';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Cards from './Cards';

const Card = () => {
  const [note, setNote] = useState({
    title: '',
    text: '',
  });
  
  const [items, setItems] = useState([]);

  const input = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitNote = () => {
    setItems((prev) => [...prev, note]);
    setNote({
      title: '',
      text: '',
    });
  };

  const handleDeleteNote = (id) => {
    setItems((prevNotes) => prevNotes.filter((_, index) => index !== id));
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={img} width="30" height="30" className="d-inline-block align-top" alt="" />
          Keep Notes
        </a>
      </nav>

      <div className='NotePad'>
        <div className='input'>
          <input
            type="text"
            className='Title'
            placeholder='Title'
            value={note.title}
            name='title'
            onChange={input}
          />

          <textarea
            className='txtarea'
            name="text" id="" cols="43" rows="5"
            placeholder='Write Your Notes'
            value={note.text}
            onChange={input}
          ></textarea>
        </div>
        <span className='Add' onClick={submitNote}>
          <AddCircleRoundedIcon />
        </span>
      </div>

      <div>
        {items.length === 0 ? (
          <p>No notes available. Add some notes above!</p>
        ) : (
          items.map((val, ind) => (
            <Cards
              key={ind}
              onDelete={() => handleDeleteNote(ind)}
              title={val.title}
              note={val.text}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Card;





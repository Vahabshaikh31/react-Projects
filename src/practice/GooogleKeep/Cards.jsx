import React from 'react';
import './Cards.css';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';

const Cards = ({ title, note, id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <article className='main'>
      <div className='cards'>
        <h1 className='titles'>{title}</h1>
        <h3 className='Notes'>{note}</h3>
        <div className='BtnDiv'>
          <button className='DeletBtn' onClick={handleDelete}>
            <DeleteForeverRoundedIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Cards;

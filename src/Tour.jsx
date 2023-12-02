import { useState } from 'react';

const tour = ({ name, id, info, image, price, deleteTour }) => {
  const [isClickedToRead, setIsClickedToRead] = useState(false);

  return (
    <article className="tour">
      <img className="img" src={image} alt={name} />
      <span>{price} Euro</span>
      <div className="tour-info">
        <h5 className="title">{name}</h5>
        <p>
          {isClickedToRead ? info : `${info.substring(0, 200)}... `}
          <button
            className="read-btn"
            onClick={() => {
              setIsClickedToRead(!isClickedToRead);
            }}
          >
            {isClickedToRead ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          onClick={() => {
            deleteTour(id);
          }}
          className="btn btn-block "
        >
          Not Intrested
        </button>
      </div>
    </article>
  );
};
export default tour;

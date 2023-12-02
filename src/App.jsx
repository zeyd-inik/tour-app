import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <div className="container">
        <h3>No tours left</h3>
        <button
          onClick={() => {
            setIsLoading(true);
            fetchTours();
          }}
          className="refresh-btn btn"
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="app container">
      <Tours tours={tours} deleteTour={deleteTour} />
    </div>
  );
};
export default App;

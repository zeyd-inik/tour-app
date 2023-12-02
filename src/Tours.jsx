import Tour from './Tour';

const Tours = ({ tours, deleteTour }) => {
  return (
    <main className="tours">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      <div className="list">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />;
        })}
      </div>
    </main>
  );
};
export default Tours;

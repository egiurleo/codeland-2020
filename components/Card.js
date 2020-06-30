function Card({ name, image, children }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={image} />
      <div className="description">
        {children}
      </div>
      <style jsx>
        {`
          .card {
            width: 25rem;
            padding: 1.5rem;
            text-align: left;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            margin-bottom: 2rem;

            display: flex;
            flex-direction: column;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card img {
            width: 20rem;
          }

          .card .description {
            margin-top: 1rem;
            font-size: 1.25rem;
            line-height: 1.5rem;
          }
        `}
      </style>
    </div>
  );
}

export default Card;

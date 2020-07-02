function About({ name, imageUrl, description }) {
  return (
    <div className="about-container">
      <img
        className="about-image"
        src={imageUrl}
      />
      <div className="about">
        <h1>{name}</h1>
        {description}
      </div>
      <style jsx>{`
        .about-container {
          display: flex;
          flex-direction: row;
          padding: 2rem;
        }

        .about-image {
          flex: 3;
          width: 1rem;
        }

        .about {
          margin-left: 2rem;
          flex: 5;
        }
      `}</style>
    </div>
  );
}

export default About;

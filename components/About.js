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
          flex: 1;
        }

        .about-image {
          height: 20rem;
        }

        .about {
          margin-left: 2rem;
        }
      `}</style>
    </div>
  );
}

export default About;

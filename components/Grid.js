function Grid({ children }) {
  return (
    <div className="grid">
      {children}
      <style jsx>
        {`
          .grid {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            flex: 1;
            padding: 2rem;
          }
        `}
      </style>
    </div>
  );
}

export default Grid;

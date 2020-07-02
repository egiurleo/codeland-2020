function Header() {
  return (
    <header>
      <a href="/">
        <h1>
          <img
            className="title"
            src="/title.png"
            alt="Your First Open Source Workshop"
          />
        </h1>
      </a>

      <div className="menu">
        <a href="https://github.com/egiurleo/codeland-2020" target="_blank" rel="noreferrer noopener">
          Code
        </a>

        <a href="https://docs.google.com/presentation/d/1nGELytl08YFVrcH4bfWQIzooOBrak28-xOrEKNC0SwI/edit#slide=id.p" target="_blank" rel="noreferrer noopener">
          Slides
        </a>

        <a href="#">Resources</a>
      </div>

      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eaeaea;
          padding: 1.5rem 2rem;
        }

        .title {
          width: 17rem;
        }

        .menu {
          margin-right: 2rem;
          font-size: 1.75rem;
          display: flex;
          justify-content: space-between;
          min-width: 20rem;
        }

        .menu a:hover {
          color: #ff8dce;
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}

export default Header;

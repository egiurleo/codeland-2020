import Link from "next/link";

const linkStyle = {
  textDecoration: "underline",
  pointerEvents: "none",
  cursor: "default"
};

function Header({ route }) {
  return (
    <header>
      <a href="/">
        <img className="title" src="/title.png" alt="Codeland Cat Cafe Logo" />
      </a>

      <div className="menu">
        <a href="/cats" style={route === 'cats' ? linkStyle : null}>Cats</a>

        <a href="/adopt">Adopt</a>

        <a href="/support">Support</a>
      </div>

      <style jsx>{`
        header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #eaeaea;
          padding: 2rem;
        }

        .title {
          height: 7rem;
          margin-left: 2rem;
        }

        .menu {
          margin-right: 2rem;
          font-size: 1.75rem;
          display: flex;
          justify-content: space-between;
          min-width: 17rem;
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

function Footer() {
  return (
    <footer>
      <p>
        Made with ❤️ by{" "}
        <a
          href="https://emilygiurleo.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Emily Giurleo
        </a>
        {" "}for{" "}
        <a
          href="https://codelandconf.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Codeland 2020
        </a>
        .
      </p>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

      `}</style>
    </footer>
  );
}

export default Footer;

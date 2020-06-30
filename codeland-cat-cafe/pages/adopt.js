import Layout from "../components/Layout";
import { useState } from "react";
import cats from "../cats";

function Adopt() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Layout route="adopt" title="Adopt">
      <div className="content">
        {submitted ? (
          <p>You have submitted the form!</p>
        ) : (
          <>
            <p>Interested in adopting one of our cats? Fill out this form!</p>
            <form onSubmit={() => setSubmitted(true)}>
              <label className="horizontal-field">
                Name:
                <input type="text" />
              </label>
              <label className="horizontal-field">
                Email:
                <input type="text" />
              </label>
              <label className="vertical-field">
                Which cat would you like to adopt?
                <select id="cats" name="cats">
                  {cats.map((cat) => (
                    <option value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </label>
              <label className="vertical-field">
                Why do you want to adopt a cat?
                <textarea />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .content {
          padding: 2rem;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 50rem;
        }

        form label {
          display: flex;
          margin-bottom: 2rem;
        }

        form label.vertical-field {
          flex-direction: column;
        }

        form label.vertical-field textarea,
        select {
          margin-top: 1rem;
        }

        form label.horizontal-field input {
          margin-left: 1rem;
        }

        form select {
          width: 15rem;
        }

        form textarea {
          height: 6.5rem;
        }

        form button {
          height: 3rem;
          width: 7rem;
          border: none;
          background-color: #ff8dce;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
        }

        form button:hover {
          cursor: pointer;
        }
      `}</style>
    </Layout>
  );
}

export default Adopt;

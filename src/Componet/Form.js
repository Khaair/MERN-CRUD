import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  // const navigate = useNavigate();

  const sendDatatoApp = async () => {
    try {
      let x = await axios.post("http://localhost:4000/api/save", {
        title,
        body,
        author,
      });
      console.log(x, "success");
    } catch (er) {
      console.log(er);
    }

    // navigate("/");
  };

  return (
    <div className="container">
      <form action="">
        <div className="form-group mt-5 ">
          <label htmlFor="">Enter Title</label>
          <input
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ margin: "12px" }}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group mt-5 ">
          <label htmlFor="">Enter Author</label>
          <input
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ margin: "12px" }}
            placeholder="Enter author"
          />
        </div>
        <div className="form-group mt-5 ">
          <label htmlFor="">Enter Body</label>
          <input
            className="form-control"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ margin: "12px" }}
            placeholder="Enter body"
          />
        </div>
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={sendDatatoApp}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Form;

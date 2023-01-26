import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditForm = ({ data, up }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      const data = await axios.get(
        `http://localhost:4000/api/showSIngle/${id}`
      );

      console.log(data, "update data here");

      setTitle(data.data.title);
      setAuthor(data.data.author);
      setBody(data.data.body);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  const upDate = async () => {
    try {
      let ad = await axios.post(`http://localhost:4000/api/update/${id}`, {
        title,
        author,
        body,
      });
      console.log(ad);
    } catch (er) {
      console.log(er);
    }
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 justify-content-center text-center"></div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ margin: "12px" }}
          placeholder="Enter title"
        />
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ margin: "12px" }}
          placeholder="Enter author"
        />
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ margin: "12px" }}
          placeholder="Enter body"
        />
        <button type="button" onClick={upDate} style={{ width: "80px" }}>
          update
        </button>
      </div>
    </div>
  );
};

export default EditForm;

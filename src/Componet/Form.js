import React, { useState, useEffect } from "react";

function Formm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [file, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("body", body);
    formData.append("file", file);

    const res = await fetch("http://localhost:4000/api/save", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div class="formm-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <form class="form-group" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                class="form-control mt-3 mb-3"
                id="exampleFormControlInput1"
              />
              <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                class="form-control mb-3"
                id="exampleFormControlInput1"
              />
              <textarea
                class="form-control mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                class="form-control mb-3"
                id="exampleFormControlInput1"
              />
              <button className="btn btn-info" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formm;

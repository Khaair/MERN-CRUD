import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Home({ datas, DeleteFn }) {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const datahere = await axios.get("http://localhost:4000/api/show");
      setData(datahere.data);
    } catch (err) {
      console.log(err, "error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const deleteMe = async (id) => {
    try {
      let mydata = await axios.delete(`http://localhost:4000/api/delete/${id}`);
      console.log(mydata);

      const filterd = data.filter((a) => a._id !== id);
      setData(filterd);
    } catch (er) {
      console.log(er);
    }
  };

  return (
    <div className="container mt-5">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Sl</th>
            <th scope="col">title</th>
            <th scope="col">author</th>
            <th scope="col">body</th>
            <th scope="col">edit/delete</th>
          </tr>
        </thead>
        <tbody>
          {/* {JSON.stringify(datas)} */}

          {data.map((el, ind) => {
            return (
              <tr key={ind}>
                <th scope="row">{ind + 1}</th>
                <td>{el.title}</td>
                <td>{el.author}</td>
                <td>{el.body}</td>
                <td>
                  <Link to={`/edit/${el._id}`}>
                    <button className="btn btn-success mright"> Edit</button>
                  </Link>

                  <button
                    onClick={() => deleteMe(el._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

//comments for new branch

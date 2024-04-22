import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const history = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const headers = {"Access-Control-Allow-Origin": "*"}; // Define headers object here
    axios.post(
      'https://661f575016358961cd94109d.mockapi.io/api/crud/ceudeoYoutube', 
      {
        name: Name,
        email: Email,
      },
      { headers: headers } // Pass headers object as the third argument
    )
    .then(() => {
      history("/read");
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
    </>
  );
}

export default App;

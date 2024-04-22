import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [Name, setName] = useState("");
    const [id, setid] = useState("");
    const [Email, setEmail] = useState("");

    useEffect(() => {
      setid(localStorage.getItem("id")); 
        setEmail(localStorage.getItem("email"));
      setName(localStorage.getItem("name"));
   
    }, []);

    const navigate = useNavigate();
    
    function handleUpdate(e) {
      e.preventDefault();
        axios
        .put(`https://661f575016358961cd94109d.mockapi.io/api/crud/ceudeoYoutube/${id}`,
        {
          name: Name,
          email: Email,
        })
        .then(() => navigate('/Read'))
        .catch(error => console.error('Error updating data:', error));
    }
 
    return (
        <>
            <form>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={Email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div><div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={Name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
                <button type="submit" className="btn btn-primary" onClick={()=>{navigate(-1)}}>Back</button>
                
            </form>
        </>
    );
}

export default Update;

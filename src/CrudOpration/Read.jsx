import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";


const Read = () => {
    const [data, setData] = useState([]);

    function readD() {
        axios.get(
            "https://661f575016358961cd94109d.mockapi.io/api/crud/ceudeoYoutube")
            .then((res) => {
                setData(res.data);
            }
            );
    }
    useEffect(() => {
        readD();
    }, []);

    const back = useNavigate();

    function onDelete(id) {
        axios.delete(
            `https://661f575016358961cd94109d.mockapi.io/api/crud/ceudeoYoutube/${id}`
        )
            .then(() => {
                readD(); // Call readD() after successful deletion
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    }

    function setLocalStoage(id, email, name) {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email) 
    }


    return (
        <>
            <h1>Reading Mode </h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>

                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                {
                    data.map((each) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{each.id}</th>
                                        <td>{each.name}</td>
                                        <td>{each.email}</td>
                                        <button type="button" class="btn btn-danger" onClick={() => onDelete(each.id)}>Delete</button>

                                        <Link to="/update">
                                            <button type="button" class="btn btn-success" onClick={() => setLocalStoage(each.id, each.name, each.email)}>Upadte</button>
                                        </Link>
                                    </tr>

                                </tbody>
                            </>)
                    })
                }
               
                  <button type="submit" className="btn btn-primary" onClick={() => {
                    back('/')
                }}>Add new Data</button>
                

            </table></>
    )
}

export default Read

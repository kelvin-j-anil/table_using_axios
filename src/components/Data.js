import Axios from 'axios';
import { useEffect, useState } from 'react';
import './Data.css'

function Screen(){

    
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://dummyjson.com/users')
        .then((res) => {
            setData(res.data.users);
        })
    }, []);


    const mapping = () => {
        return data.map((user) => {
            return(
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td><img src={user.image} alt="profile_pic" style={{height: "50px", width: "50px", borderRadius: "50%"}} /></td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.domain}</td>
                    <td>{user.ip}</td>
                    <td>{user.university}</td>
                </tr>
            )
        })
    }

    return(
        <div>
            <div className='Header'>Dummy data</div>
            <table className="table">
                <thead>
                    <tr className='Heading '>
                        <th>Sno</th>
                        <th>Profile Pic</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>E-mail</th>
                        <th>Username</th>
                        <th>Domain</th>
                        <th>IP</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {mapping()}
                </tbody>
            </table>
        </div>
    )
}

export default Screen;
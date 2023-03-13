import axios from "axios";
const API = axios.create({baseURL: "https://garbagecanserver.onrender.com"});

const login = (username, password) => {
    API.post('/login', 
    {
        username: username, 
        password: password
    }, 
    {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

const fetchData = () => API.get('/garbageCans');

export {fetchData, login}
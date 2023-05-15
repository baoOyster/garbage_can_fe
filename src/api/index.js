import axios from "axios";
import { deleteCookie, getCookie } from "../utils/cookie";
const API = axios.create({baseURL: "https://garbagecanserver.onrender.com"});

function JWTandConfig() {
    const token = getCookie('jwt');
    if(!token) return console.log('Unauthorized');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    return {
        token,
        config
    }
}

const login = (username, password) => API.post('/login', {
        username: username, 
        password: password
    }, 
    {
        headers: {
            'Content-Type': 'application/json',
        }
    });

const register = (username, password) => API.post('/register',
    {
        username: username,
        password: password
    },
    {
        headers: {
            'Content-Type': 'application/json',
        }
    }
);

const logout = () => {
    console.log('Process started');
    return API.post('/logout');
};

// Home API

const fetchData = () => {
    const {token, config} = JWTandConfig();
    return API.get(`/user/home?token=${token}`, config);
};

const addSmartCan = (canId) => {
    if(!canId) return console.log('Please provided a canID');
    const {token, config} = JWTandConfig();
    console.log('Process started');
    return API.put(`/user/home?token=${token}&canId=${canId}`, {}, config);
}

const changeCanName = (canId, name) => {
    if(!canId || !name) return console.log('Please provided both canID and name');
    const {config} = JWTandConfig();
    console.log(canId);
    console.log(name);
    console.log('Process started');
    return API.put(`/user/name?id=${canId}&newName=${name}`, {}, config);
}

const changeFullState = (canId, full_state) => {
    if(!canId) return console.log('Please provided a canId');
    const {token} = JWTandConfig();
    const config = {
        headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    console.log("Process started");
    console.log(canId)
    return API.put(`/user/switch?id=${canId}`, {
        full_state: full_state
    }, config);
}

const discardACan = (canId) => {
    if(!canId) return console.log('Please provide a canId');
    const {token, config} = JWTandConfig();
    console.log('Process started');
    return API.delete(`/user/home?token=${token}&canId=${canId}`, config);
}

// Setting API
const updateUser = (password, newUsername, newPassword) => {
    const {token} = JWTandConfig();
    const config = {
        headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
     },

    }
    console.log('Process update');
    return API.put(`/user/setting?token=${token}`, 
    {
        password,
        newUsername,
        newPassword
    }, 
    config);
};

const deleteUser = () => {
    const {token, config} = JWTandConfig();
    console.log('Process delete');
    return API.delete(`/user/setting?token=${token}`, config);
}

export {
    fetchData, 
    login, 
    register, 
    logout, 
    addSmartCan, 
    changeCanName, 
    changeFullState, 
    discardACan,
    updateUser,
    deleteUser
};
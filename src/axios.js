import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://contactapp-app-default-rtdb.firebaseio.com/'
});

export default instance;
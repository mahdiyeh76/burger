import axios from 'axios';



const instance = axios.create({
    baseURL:'https://react-burger-1ec52.firebaseio.com/'
});


export default instance;

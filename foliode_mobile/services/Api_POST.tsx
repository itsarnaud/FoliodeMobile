import axios from 'axios';


const API_URL = process.env.IP_API;

const data_login = {
    email: 'tim',
    password: 'tim',

}


axios.post(`${API_URL}/api/user/signin`, data_login)  
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
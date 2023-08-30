import axios from "axios";

const baseUrl = 'http://127.0.0.1:5000';

const connection = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }

})

const jokeConnection = axios.create({
    baseURL: 'https://api.api-ninjas.com',
    timeout: 3000,
    headers: {
        'X-Api-Key': 'WztQyNP8YKnxNy6nPsIIKQ==3iXAl7NRCjXsNiPg'
    }
})

export {connection, jokeConnection};
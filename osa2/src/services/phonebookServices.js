import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const createNew = (personObject) => {
    return axios.post(baseUrl, personObject).then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const update = (id, personObject) => {
    return axios.put(`${baseUrl}/${id}`, personObject).then(response => response.data);
}

export default { getAll, createNew, deletePerson, update }



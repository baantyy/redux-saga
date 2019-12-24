import axios from 'axios';

const key = `?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02`;
const url = `https://api.unsplash.com/photos/`;

export const fetchImages = page => {
    return axios.get(`${url}${key}&per_page=6&page=${page}`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
}

export const fetchStats = id => {
    return axios.get(`${url}/${id}/statistics${key}`)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            return err;
        })
}
import axios from "axios";

const apiUrl = "http://localhost:8000"

const Get_comics = () => {
    return axios.get(`${apiUrl}/comics`);
};

const Get_comic = (id) => {
    return axios.get(`${apiUrl}/comic/${id}`);
};


const salida = {
    GetComicslist: Get_comics,
    GetComicDetail: Get_comic
};

export default salida;

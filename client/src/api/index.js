import axios from 'axios';

const URL = 'http://localhost:8080/apidog';

export const fetchData = async () => {

    try{
        const { data } = await axios.get(URL);
        
        return { //Retornamos los datos que queremos de todo lo que nos devuelve la api
            data
        }
        
    } catch (error){
        console.log(error);
    }
}

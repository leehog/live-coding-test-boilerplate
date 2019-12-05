import Axios from 'axios'

const API_KEY = 'YOUR_API_KEY'

export async function getWeather(coordinates) {
    try {
        const endpoint = `/${API_KEY}/${coordinates}`
        const response = await Axios.get(endpoint)
        console.log(response.data.currently)
        // Do something
    }
    catch(e) {
        console.log(e)
        return(e)
    }
}
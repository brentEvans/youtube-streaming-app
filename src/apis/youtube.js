import axios from 'axios';

const KEY = 'AIzaSyBoKsVfDCWz4McY_DsD32602cPCKXsSQ_E';

// making a preconfigured instance of axios that already has a base URL and some default parameters loaded into it
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

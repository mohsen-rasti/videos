import axios from 'axios';

const KEY='AIzaSyA0IveLnzAexGOwd28hNcFXACl2y6cRPgk';

export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});



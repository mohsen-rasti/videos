

import axios from 'axios';


const KEY='AIzaSyDGU_6I9-pXS7if0ZjEs8kSfpWTFpLbek4';


export default axios.create({

    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
    }
});



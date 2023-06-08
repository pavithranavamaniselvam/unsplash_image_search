import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID uNU8SEevQRo9h_O2Oexy0g2rBfXMKnDMgnno7_Z7Ld8'
        },
        params:{
            query: term
        }
    });
    
    return response.data.results;
};

export default searchImages;
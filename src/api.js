import axios from "axios";

const searchImages = async () =>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        header:{
            Authorizations: 'Client-ID uNU8SEevQRo9h_O2Oexy0g2rBfXMKnDMgnno7_Z7Ld8'
        },
        params:{
            query: 'cars'
        }
    });
    return response;
};

export default searchImages;
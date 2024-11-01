import axios from "axios";

const searchImages = async (terms) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID pMebQ8NuC4L1yDwOkH8BJ2ALG1MEnHL0IYcTgJFSMo4'
        },
        params: {
            query: 'terms'
        }
    })
    console.log(response);
    return response;
}

export default searchImages;
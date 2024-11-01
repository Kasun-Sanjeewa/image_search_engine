import axios from "axios";

const searchImages = async (term) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID pMebQ8NuC4L1yDwOkH8BJ2ALG1MEnHL0IYcTgJFSMo4'
            },
            params: {
                query: term,
                per_page: 30
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching images:", error);
        return [];
    }
};

export default searchImages;
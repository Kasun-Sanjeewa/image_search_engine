import axios from "axios";

const searchImages = async (term) => {
    try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: ''
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

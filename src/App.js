import React from 'react'
import SearchBar from './Components/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';
import NavBar from './Components/NavBar';

export default function App() {
    const [images, setImage] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImage(result);
    }

    return (
        <div>
            <NavBar />
            <SearchBar onSubmit={handleSubmit} />
            <ImageList imageListProp={images} />
        </div>
    )
}

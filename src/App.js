import React from 'react'
import SearchBar from './Components/SearchBar';
import searchImages from './api';
import ImageList from './Components/ImageList';
import { useState } from 'react';
import './Components/NavBar.css';


export default function App() {
    const [images, setImage] = useState([]);

    const handleSubmit = async (term) => {
        const result = await searchImages(term);

        setImage(result);
    }

    return (
        <div>
            <div class="navbar">
                <h1 className='logo'>Vision Explorer</h1>
                <nav>
                    <SearchBar onSubmit={handleSubmit} />
                </nav>
            </div>
            <ImageList imageListProp={images} />
        </div>
    )
}

import React from 'react'
import ImageShow from './ImageShow';
import './imageShow.css';

export default function ImageList({ imageListProp }) {
    const imageRender = imageListProp.map((imageMapVariable) => {
        return <ImageShow key={imageMapVariable.id} imageShowProp={imageMapVariable} />
    })
    return (
        <div className='image-list'>
            {imageRender}
        </div>
    )
}

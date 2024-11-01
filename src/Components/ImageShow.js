import React from 'react'

export default function ImageShow({ imageShowProp }) {
    return (
        <div >
            <img src={imageShowProp.urls.small} alt={imageShowProp.alt_description} ></img>
        </div>
    )
}

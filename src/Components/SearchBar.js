import React from 'react'
import { useRef } from 'react';

export default function SearchBar({ onSubmit }) {
    /*const handleClick = () => {
        onSubmit('cars')
    }*/
    const InputuseRef = useRef(null);
    const handleForm = (e) => {

        e.preventDefault();
        const term = InputuseRef.current.value;
        onSubmit(term);
    }
    return (
        <div>
            <form onSubmit={handleForm} >
                <input ref={InputuseRef}></input>
            </form>
        </div>
    )
}

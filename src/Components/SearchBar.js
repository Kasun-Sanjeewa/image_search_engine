import React from 'react'
import { useRef } from 'react';
import './NavBar.css';

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
            <form onSubmit={handleForm} className='Search-bar'>
                <input ref={InputuseRef} placeholder='Type Here' ></input>
                <button><i class="fa-solid fa-magnifying-glass" id='serchbtn' /></button>
            </form>
        </div>
    )
}

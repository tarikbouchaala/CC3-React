import React from 'react'
import './Accueil.css'
import { Routes, Route } from 'react-router-dom'
import ListUser from '../ListeUser/ListUser';
import DetailUser from './../DetailUser/DetailUser';
import ListeToDo from './../ListeToDo/ListeToDo';
export default function Accueil() {
    return (
        <div>
            <div className='Head'>Gestion des taches</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListeToDo/:id' element={<ListeToDo/>} />
            </Routes>
        </div>
    )
}

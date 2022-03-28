import React, { useEffect, useState } from 'react'
import '/node_modules/primeflex/primeflex.css'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
let FormData = require('form-data');



export default function RegisterMovie() {
    const [name, setName] = useState('')
    const [filmes, setfilmes] = useState([])
    const [filmes_id, setfilmes_Id] = useState()
    const [usuarios, setUsuarios] = useState([])
    const [usuarios_id, setUsuarios_id] = useState()
    const [placeholder, setPlaceholder] = useState('Selecione o usuario')
    const [placeholder2, setPlaceholder2] = useState('Selecione o filme')

    const formData = new FormData();

    
    function postData() {
        formData.append("filme_id", filmes_id);
        formData.append("idUser", usuarios_id);
        fetch('http://localhost:8000/favoritos/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json()).then(data =>{ console.log(data)}).catch(error => console.log(error))
    }

    useEffect(() => {
        fetch('http://localhost:8000/filmes/')
            .then(response => response.json())
            .then(data => setfilmes(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('http://localhost:8000/usuarios/')
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => console.log(error))
    }, [])
    console.log(filmes)
    console.log(usuarios)
    return (
        <div className='grid '>
            <Header/>
            <div className='col-12 flex justify-content-center align-items-center flex-wrap flex-column'>
                <div className='grid'>
                    <h1>Cadastrar Favoritos</h1>
                </div>
                <form className='col-12 flex justify-content-center align-items-center flex-column'>

                   
                    <label htmlFor='categoria'><h2>Usuario</h2></label>
                    <Dropdown className='col-10 md:col-8 lg:col-6' value='id' name='nome' optionLabel='nome' options={usuarios} placeholder={placeholder} onChange={(e) => {
                        setPlaceholder(e.target.value.nome)
                        setUsuarios_id(e.target.value.id)
                    }} />
                    <label htmlFor='categoria'><h2>Filme</h2></label>
                    <Dropdown className='col-10 md:col-8 lg:col-6' value='id' name='name' optionLabel='name' options={filmes} placeholder={placeholder2} onChange={(e) => {
                        console.log(placeholder2)
                        setPlaceholder2(e.target.value.name)
                        console.log(placeholder2)
                        setfilmes_Id(e.target.value.id)
                    }} />
                    
                    <Button className='mt-4' label='Cadastrar' onClick={(e) => {
                        e.preventDefault();
                        postData()
                    }} />

                </form>
            </div>
        </div>
    )
}
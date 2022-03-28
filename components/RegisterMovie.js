import React, { useEffect, useState } from 'react'
import '/node_modules/primeflex/primeflex.css'
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import styles from '../styles/Home.module.css'
let FormData = require('form-data');



export default function RegisterMovie() {
    const [name, setName] = useState('')
    const [categoria, setCategoria] = useState([])
    const [categoria_id, setCategoria_Id] = useState()
    const [placeholder, setPlaceholder] = useState('Selecione a categoria')
    const [imageName, setImageName] = useState(' ')
    const [imagePath, setImagePath] = useState()
    const body = {
        "name": name,
        "image": imagePath,
        "categoria_id": categoria_id
    }

    const formData = new FormData();

    
    function postData() {
        formData.append("name", name);
        formData.append("image", imagePath);
        formData.append("categoria_id", categoria_id);
        fetch('http://localhost:8000/filmes/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error))
    }

    useEffect(() => {
        fetch('http://localhost:8000/categoria/')
            .then(response => response.json())
            .then(data => setCategoria(data))
            .catch(error => console.log(error))
    }, [])
    console.log(categoria)
    return (
        <div className='grid '>
            <div className='col-12 flex justify-content-center align-items-center flex-wrap flex-column'>
                <div className='grid'>
                    <h1>Cadastrar Filmes</h1>
                </div>
                <form className='col-12 flex justify-content-center align-items-center flex-column'>

                    <label htmlFor="name"><h2>Nome</h2></label>
                    <InputText className='col-10 md:col-8 lg:col-6' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor='categoria'><h2>Categoria</h2></label>
                    <Dropdown className='col-10 md:col-8 lg:col-6' value='id' name='nome' optionLabel='nome' options={categoria} placeholder={placeholder} onChange={(e) => {
                        setPlaceholder(e.target.value.nome)
                        setCategoria_Id(e.target.value.id)
                    }} />
                    <label className='mt-3' for="image"><h2 className='bg-primary-reverse'>Selecione a capa do filme</h2></label>
                    <h2>{imageName}</h2>
                    <input className='hidden' accept="image/*" onChange={(e) => {
                        setImageName((e.target.value).replace('C:\\fakepath\\', ''))
                        console.log(e.target.files)
                        setImagePath(e.target.files[0])
                    }} type="file" id="image" name="cover"></input>
                    <Button label='Cadastrar' onClick={(e) => {
                        e.preventDefault();
                        postData()
                    }} />

                </form>
            </div>
        </div>
    )
}
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
    const [assinaturas, setAssinaturas] = useState([])
    const [assinaturas_id, setAssinaturas_Id] = useState()
    const [placeholder, setPlaceholder] = useState('Selecione a Assinatura')

    const formData = new FormData();

    
    function postData() {
        formData.append("nome", name);
        formData.append("assinatura_fk", assinaturas_id);
        fetch('http://localhost:8000/usuarios/', {
            method: 'POST',
            body: formData,
        }).then(response => response.json()).then(data =>{ console.log(data)}).catch(error => console.log(error))
    }

    useEffect(() => {
        fetch('http://localhost:8000/assinatura/')
            .then(response => response.json())
            .then(data => setAssinaturas(data))
            .catch(error => console.log(error))
    }, [])
    console.log(assinaturas)
    return (
        <div className='grid '>
            <Header/>
            <div className='col-12 flex justify-content-center align-items-center flex-wrap flex-column'>
                <div className='grid'>
                    <h1>Cadastrar Usuarios</h1>
                </div>
                <form className='col-12 flex justify-content-center align-items-center flex-column'>

                    <label htmlFor="name"><h2>Nome</h2></label>
                    <InputText className='col-10 md:col-8 lg:col-6' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                    <label htmlFor='categoria'><h2>Assinatura</h2></label>
                    <Dropdown className='col-10 md:col-8 lg:col-6' value='id' name='nome' optionLabel='nome' options={assinaturas} placeholder={placeholder} onChange={(e) => {
                        setPlaceholder(e.target.value.nome)
                        setAssinaturas_Id(e.target.value.id)
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
import React, { useEffect, useState } from 'react'

import { Card } from 'primereact/card';
import styles from '../styles/Home.module.css'


export default function ListMovie() {

    const [movie, setMovie] = useState([])

    useEffect(async () => {
        await fetch('http://localhost:8000/filmes/')
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.log(error));
    }, [])

    console.log(movie)

    return (
        <div className='grid '>
            <div className='col-12 flex flex-wrap flex-row'>
                {movie.map((item) => {
                    return (
                            <div className='col-12 md:col-4 lg:col-3'>
                                <Card title={item.name} header={<img height='500px' width='100%' alt={item.name} src={item.image}/>}>

                                </Card>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}
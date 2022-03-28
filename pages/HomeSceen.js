import React from 'react'
import Header from '../components/Header';
import Link from 'next/link';

export default function HomeScreen() {
    return (
        <div className='grid flex flex-direction-column justify-content-center align-items-start'>
            <Header/>
            <div className='col-12'>
                <Link href='/ListMovies'>
                    <a>Lista</a>
                </Link>
            </div>
        </div>
    )
}
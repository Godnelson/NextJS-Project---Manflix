import React from 'react'
import { Button } from 'primereact/button';
import RegisterUser from '../components/RegisterUser'
import reactDom from 'react-dom';
import RegisterMovie from './RegisterMovie';
import RegisterFavorites from './RegisterFavorites';
import Link from 'next/link';

export default function HomeScreen() {
    return (
        <div className='grid flex flex-direction-column justify-content-center align-items-start'>
            <div className='col-12 bg-gray-900'>
                <Link href=''>
                <h2 className='ml-4 text-white'>Home Screen</h2>
                </Link>
            </div>
            <div className='col-12'>
                <Link href='/ListMovies'>
                    <a>Lista</a>
                </Link>
            </div>
        </div>
    )
}
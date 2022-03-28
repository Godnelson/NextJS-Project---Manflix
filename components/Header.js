import Link from "next/link";
import React from 'react';

export default function Header() {
    return (
        <div className='flex flex-direction-row justify-content-space-envely col-12 bg-gray-900'>
            <Link href='/'>
                <a className='ml-4 text-white'><h2 className='m-0 ml-4 pt-3 pb-3'>Home Screen</h2></a>
            </Link>
            <Link href='/ListMovies'>
                <a className='ml-4 text-white'><h2 className='m-0 ml-4 pt-3 pb-3'>List Movies</h2></a>
            </Link>
            <Link href='/RegisterMovie'>
                <a className='ml-4 text-white'><h2 className='m-0 ml-4 pt-3 pb-3'>Register Movie</h2></a>
            </Link>
            <Link href='/RegisterUser'>
                <a className='ml-4 text-white'><h2 className='m-0 ml-4 pt-3 pb-3'>Register User</h2></a>
            </Link>
            <Link href='/RegisterFavorites'>
                <a className='ml-4 text-white'><h2 className='m-0 ml-4 pt-3 pb-3'>Register Favorites</h2></a>
            </Link>
        </div>
    )
}
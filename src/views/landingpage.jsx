import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react';                                                // import style

import background from '../assets/landingpagebg.jpg'
import placeholder from '../assets/placeholder.png'
import logo from '../assets/logo.png'

import LoginForm from '../components/loginform';
import Features from '../components/features'

const LandingPage = () => {


    return(
        <div className='login'>
            <div className='w-screen'>
                <header className='header p-2 h-16 flex justify-center'>
                    <div className='w-96 drop-shadow-2xl'>
                        <img src={logo} alt="Logo" />
                    </div>
                </header>
            </div>
            <div className='flex flex-row h-full'>
                <div className='flex flex-col basis-6/12 w-full h-full'>
                    <div className='font-mono font-bold text-8xl mt-28 ml-32'>
                        Just Squishmallow Trading
                        <div className='text-neutral-600'>
                            <TypeAnimation
                                sequence={[
                                    1500,
                                    'but easy.',
                                    2000,
                                    '',
                                    () => {
                                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                    }
                                ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                                style={{ whiteSpace: 'pre-line', display: 'inline-block', letterSpacing: 8, backgroundColor: 'white', padding: '6px', fontSize: '45px' }}
                                />
                        </div>
                    </div>
                </div>
                <div className='basis-6/12 w-full justify-center'>
                    <div className='ml-5 mt-28 w-1/3 fixed'>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
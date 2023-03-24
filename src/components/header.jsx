import React from 'react';
import {useEffect, useState} from 'react';                                                // import style

const LandingPage = () => {

    return(
        <div className='flex flex-row w-screen h-screen'>
            <div className='flex basis-7/12'>
                test
            </div>
            <div className='flex basis-5/12 justify-center'>
                <div className='border-8 border-stone-400 w-3/4 h-1/2 p-14 self-center'>
                    <form className='mt-8'>
                        <label>
                            Username:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="name" />
                        </label>
                        <div className='w-1/2 m-auto'>
                            <button className='border mt-3 w-full h-full p-2 rounded-full'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
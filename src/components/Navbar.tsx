import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }


    return (
        <nav className='flex items-center justify-between flex-wrap bg-yellow-600 p-4 opacity-75 drop-shadow-2xl'>
            <div className='text-white'>
                <Link to='/' className='font-bold text-2xl text-white'>Car Inventory</Link>
            </div>
            <div>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white hover:text-slate-300 border hover:border-slate-300'>
                    
                    <i className="fa-solid fa-angles-left"></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-2 bg-yellow-100 justify-center'>
                        <div>
                            <Link to='/' onClick={ clicked} className='flex place-itmes-center lg:inline-block lg:mt-0
                             text-slate-500 hover:text-black mr-4'>
                                Home
                            </Link>
                        </div>

                    </Button>
                    <Button className='p-2 m-4 bg-yellow-100 justify-center'>
                        <div>
                            <Link to='/dashboard' onClick={ clicked} className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0
                             text-slate-500 hover:text-black mr-4'>
                                Dashboard
                            </Link>
                        </div>

                    </Button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar
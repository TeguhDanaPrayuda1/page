import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        // <BrowserRouter>
        // <Fragment>
        <div className="mx-auto bg-blue-500/95">
            <div className="block md:flex md:justify-between">
                <div className="flex justify-between px-4 py-4 border-b border-blue-400 md:border-0">
                    <div>
                        <Link to="/" className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="23"
                                fill="currentColor"
                                class="bi bi-book-half text-blue-100 hover:text-blue-200 transform duration-300"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                fill="currentColor"
                                className="text-white bi bi-justify"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    className={
                                        !isOpen
                                            ? 'block transform duration-300'
                                            : 'hidden transform duration-300'
                                    }
                                    fillRule="evenodd"
                                    d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                                />
                                <path
                                    className={
                                        isOpen
                                            ? 'block transform duration-300'
                                            : 'hidden transform duration-300'
                                    }
                                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <Link
                        to="/"
                        className="block px-4 pt-3 leading-normal text-white duration-300 transform hover:text-blue-200 md:pr-2 md:py-4"
                    >
                        Home
                    </Link>
                    <Link
                        to="/About"
                        className="block px-4 py-3 leading-normal text-white duration-300 transform hover:text-blue-200 md:pr-4 md:py-4"
                    >
                        About
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

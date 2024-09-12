import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBlog, FaBars, FaTimes } from 'react-icons/fa'; // Usa íconos disponibles

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // navItems here
    const navItems = [
        { link: 'Home', path: '/' },
        { link: 'About', path: '/about' },
        { link: 'Shop', path: '/shop' },
        { link: 'Sell Your Book', path: '/admin/dashboard' },
        { link: 'Blog', path: '/blog' }
    ];

    return (
        <header>
            <nav className={isSticky ? 'sticky top-0 bg-white shadow-md' : ''}>
                <div className="flex items-center justify-between px-4 py-2">
                    {/* Logo */}
                    <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block' /> Books
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(({ link, path }) => (
                                <li key={path}>
                                    <Link to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>
                                        {link}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>

                    {/* Button for large devices */}
                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button>
                            <FaBars className="w-5 hover:text-blue-700" />
                        </button>
                    </div>

                    {/* Menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {
                                isMenuOpen ? <FaTimes className="h-5 w-5 text-black" /> : <FaBars className="h-5 w-5 text-black" />
                            }
                        </button>
                    </div>
                </div>

                {/* NavItems for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 right-0 left-0`}>
                    {
                        navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer hover:text-blue-300'>
                                {link}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

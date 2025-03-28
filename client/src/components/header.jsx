import './header.css';
import logo from '../assets/logo.png';
import { strokeWidth } from '../config/config.js';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/authcontext.js';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest(".header-nav") && !event.target.closest(".ham-btn")) {
                setMenuOpen(false);
            }
        }

        function handleScroll() {
            setMenuOpen(false);
        }

        document.addEventListener("click", handleClickOutside);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (loading) {
        return <p>Lader brukeren</p>
    }

    // console.log(JSON.stringify(user, null, 2));

    return (
        <div className="header-container">
            <div className="header-content">
                <div className="header-left">
                    <a href="/">
                        <img className='header-logo' src={logo} alt="Strømlia logo" />
                    </a>
                </div>
                <div className={`header-links ${menuOpen ? "open" : ""}`}>
                    <a href={`/produkter?kategori=mobiltelefoner`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 2V3.4C15 3.96005 15 4.24008 14.891 4.45399C14.7951 4.64215 14.6422 4.79513 14.454 4.89101C14.2401 5 13.9601 5 13.4 5H10.6C10.0399 5 9.75992 5 9.54601 4.89101C9.35785 4.79513 9.20487 4.64215 9.10899 4.45399C9 4.24008 9 3.96005 9 3.4V2M8.2 22H15.8C16.9201 22 17.4802 22 17.908 21.782C18.2843 21.5903 18.5903 21.2843 18.782 20.908C19 20.4802 19 19.9201 19 18.8V5.2C19 4.07989 19 3.51984 18.782 3.09202C18.5903 2.71569 18.2843 2.40973 17.908 2.21799C17.4802 2 16.9201 2 15.8 2H8.2C7.0799 2 6.51984 2 6.09202 2.21799C5.71569 2.40973 5.40973 2.71569 5.21799 3.09202C5 3.51984 5 4.0799 5 5.2V18.8C5 19.9201 5 20.4802 5.21799 20.908C5.40973 21.2843 5.71569 21.5903 6.09202 21.782C6.51984 22 7.07989 22 8.2 22Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Mobiltelefoner
                    </a>
                    <a href={`/produkter?kategori=laptoper`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Laptoper
                    </a>
                    <a href={`/produkter?kategori=tvogskjermer`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 17V21H9V17M5.2 17H18.8C19.9201 17 20.4802 17 20.908 16.782C21.2843 16.5903 21.5903 16.2843 21.782 15.908C22 15.4802 22 14.9201 22 13.8V6.2C22 5.0799 22 4.51984 21.782 4.09202C21.5903 3.71569 21.2843 3.40973 20.908 3.21799C20.4802 3 19.9201 3 18.8 3H5.2C4.07989 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.07989 2 6.2V13.8C2 14.9201 2 15.4802 2.21799 15.908C2.40973 16.2843 2.71569 16.5903 3.09202 16.782C3.51984 17 4.0799 17 5.2 17Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        TV og skjermer
                    </a>
                    <a href={`/produkter?kategori=tilbehør`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 9V3.6C18 3.03995 18 2.75992 17.891 2.54601C17.7951 2.35785 17.6422 2.20487 17.454 2.10899C17.2401 2 16.9601 2 16.4 2H7.6C7.03995 2 6.75992 2 6.54601 2.10899C6.35785 2.20487 6.20487 2.35785 6.10899 2.54601C6 2.75992 6 3.03995 6 3.6V9M10 6V5M14 6V5M8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Tilbehør
                    </a>
                    <a href={`/produkter?kategori=smartklokker`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 18.5L16.6631 19.6791C16.4254 20.511 16.3066 20.927 16.0639 21.2358C15.8498 21.5083 15.5685 21.7205 15.2476 21.8515C14.8841 22 14.4515 22 13.5862 22H10.4138C9.54854 22 9.11592 22 8.75239 21.8515C8.43152 21.7205 8.15022 21.5083 7.93606 21.2358C7.69343 20.927 7.57458 20.511 7.33689 19.6791L7 18.5M17 5.5L16.6631 4.32089C16.4254 3.48896 16.3066 3.07298 16.0639 2.76423C15.8498 2.49171 15.5685 2.27953 15.2476 2.14847C14.8841 2 14.4515 2 13.5862 2H10.4138C9.54854 2 9.11592 2 8.75239 2.14847C8.43152 2.27953 8.15022 2.49171 7.93606 2.76423C7.69343 3.07299 7.57458 3.48895 7.33689 4.32089L7 5.5M12 9V12L13.5 13.5M8.7 18.5H15.3C16.4201 18.5 16.9802 18.5 17.408 18.282C17.7843 18.0903 18.0903 17.7843 18.282 17.408C18.5 16.9802 18.5 16.4201 18.5 15.3V8.7C18.5 7.57989 18.5 7.01984 18.282 6.59202C18.0903 6.21569 17.7843 5.90973 17.408 5.71799C16.9802 5.5 16.4201 5.5 15.3 5.5H8.7C7.5799 5.5 7.01984 5.5 6.59202 5.71799C6.21569 5.90973 5.90973 6.21569 5.71799 6.59202C5.5 7.01984 5.5 7.57989 5.5 8.7V15.3C5.5 16.4201 5.5 16.9802 5.71799 17.408C5.90973 17.7843 6.21569 18.0903 6.59202 18.282C7.01984 18.5 7.57989 18.5 8.7 18.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Smartklokker
                    </a>
                    <a href={`/produkter?kategori=audio`}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7.625C2 9.90317 3.84683 11.75 6.125 11.75C6.43089 11.75 6.58383 11.75 6.66308 11.7773C6.82888 11.8345 6.91545 11.9211 6.97266 12.0869C7 12.1662 7 12.2903 7 12.5386V18.875C7 19.7725 7.72754 20.5 8.625 20.5C9.52246 20.5 10.25 19.7725 10.25 18.875V7.625C10.25 5.34683 8.40317 3.5 6.125 3.5C3.84683 3.5 2 5.34683 2 7.625Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 7.625C22 9.90317 20.1532 11.75 17.875 11.75C17.5691 11.75 17.4162 11.75 17.3369 11.7773C17.1711 11.8345 17.0845 11.9211 17.0273 12.0869C17 12.1662 17 12.2903 17 12.5386V18.875C17 19.7725 16.2725 20.5 15.375 20.5C14.4775 20.5 13.75 19.7725 13.75 18.875V7.625C13.75 5.34683 15.5968 3.5 17.875 3.5C20.1532 3.5 22 5.34683 22 7.625Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Audio
                    </a>
                </div>
                <div className="header-right">
                    <a href="/konto">
                        {user ?
                            <img className='header-profile-img' src={user.photoURL} alt="Profile image" />
                            :
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    </a>
                    <a href="/handlekurv">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52 2.64L3.96 4.72C3.65102 5.13198 3.49652 5.33797 3.50011 5.51039C3.50323 5.66044 3.57358 5.80115 3.69175 5.89368C3.82754 6 4.08503 6 4.6 6H19.4C19.915 6 20.1725 6 20.3083 5.89368C20.4264 5.80115 20.4968 5.66044 20.4999 5.51039C20.5035 5.33797 20.349 5.13198 20.04 4.72L18.48 2.64M5.52 2.64C5.696 2.40533 5.784 2.288 5.89552 2.20338C5.9943 2.12842 6.10616 2.0725 6.22539 2.03845C6.36 2 6.50667 2 6.8 2H17.2C17.4933 2 17.64 2 17.7746 2.03845C17.8938 2.0725 18.0057 2.12842 18.1045 2.20338C18.216 2.288 18.304 2.40533 18.48 2.64M5.52 2.64L3.64 5.14666C3.40254 5.46328 3.28381 5.62159 3.1995 5.79592C3.12469 5.95062 3.07012 6.11431 3.03715 6.28296C3 6.47301 3 6.6709 3 7.06666L3 18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.07989 22 6.2 22L17.8 22C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V7.06667C21 6.6709 21 6.47301 20.9628 6.28296C20.9299 6.11431 20.8753 5.95062 20.8005 5.79592C20.7162 5.62159 20.5975 5.46328 20.36 5.14667L18.48 2.64M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <button className="ham-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
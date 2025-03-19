import './top-announcement.css';
import React from 'react';
import { useState, useEffect } from 'react';

export default function TopAnnouncement() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            console.log('hallo?');
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

    return (
        <div className="top-container">
            <div className="top-content">
                <div className="top-section">
                    <a className='top-location' href='/kontakt'>
                        Nå med 10+ butikker over hele Norge
                    </a>
                </div>
                <div className={`top-section top-links ${menuOpen ? "open" : ""}`}>
                    <a href="/">Hjem</a>
                    <a href="/produkter">Produkter</a>
                    <a href="/omoss">Om oss</a>
                    <a href="/kontakt">Kontakt</a>
                    <a href="/sos">Spørsmål og svar</a>
                    <a href="/vilkår">Vilkår</a>
                </div>
                <div className="top-section">
                    <button className="top-ham-btn" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p className='top-copyright'>
                        Strømlia © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}
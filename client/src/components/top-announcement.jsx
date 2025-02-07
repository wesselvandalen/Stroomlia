import './top-announcement.css';
import React from 'react';

export default function TopAnnouncement() {
    const strokeWidth = 2; // Tykkhet til ikonene
    const lang = localStorage.getItem('lang') === 'nb' ? 'bokmål' : 'nynorsk'; // Vis språket som ikke er aktivert

    return (
        <div className="top-container">
            <div className="top-content">
                <div className="top-section">
                    <p className='top-location'>
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Dalen, Telemark, Norge
                    </p>
                </div>
                <div className="top-section">
                    <a href="/">Hjem</a>
                    <a href="/produkter">Produkter</a>
                    <a href="/omoss">Om oss</a>
                    <a href="/kontakt">Kontakt</a>
                    <a href="/sos">Spørsmål og svar</a>
                </div>
                <div className="top-section">
                    <p className='top-copyright'>
                        Strømlia © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
}
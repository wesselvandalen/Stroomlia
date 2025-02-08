import './top-announcement.css';
import React from 'react';

export default function TopAnnouncement() {

    return (
        <div className="top-container">
            <div className="top-content">
                <div className="top-section">
                    <a className='top-location' href='/kontakt'>
                        Nå med 10+ butikker over hele Norge
                    </a>
                </div>
                <div className="top-section top-links">
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
import './top-announcement.css';
import React from 'react';

export default function TopAnnouncement() {

    const check = <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;

    return (
        <div className="top-container">
            <div className="top-content">
                <a href="/">Hjem</a>
                <a href="">Produkter</a>
                <a href="">Om oss</a>
                <a href="">Kontakt</a>
                <a href="">Spørsmål og svar</a>
            </div>
        </div>
    );
}
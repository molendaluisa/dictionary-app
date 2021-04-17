import React from 'react';
import './Toggle.css';

export default function Toggle({ darkMode, setDarkMode }) {
    return (
        <div className="Toggle">
            <button type="button" onClick={() => setDarkMode(false)}>
                ☀
      </button>
            <span className="toggle-control">
                <input
                    className="modeCheck"
                    id="modeCheck"
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <label htmlFor="modeCheck" />
            </span>
            <button type="button" onClick={() => setDarkMode(true)}>
                ☾
      </button>
        </div>
    );
}

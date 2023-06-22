import React, { useEffect } from 'react';
import styled from 'styled-components';

function Header() {
  useEffect(() => {
    if (localStorage.getItem('selectedTheme')) {
      toggleTheme.darkModeOnClickHandler();
    }
  }, []);

  return (
    <HeaderDiv>
      <h1>TO DO APP</h1>
      <img
        id="darkmode-button"
        src="/img/darkMode.png"
        alt="dark mode"
        onClick={() => toggleTheme.darkModeOnClickHandler()}
      />
      <img
        id="lightmode-button"
        src="/img/lightMode.png"
        alt="light mode"
        onClick={() => toggleTheme.lightModeOnClickHandler()}
      />
    </HeaderDiv>
  );
}

export default Header;

const toggleTheme = {
  darkModeOnClickHandler: function () {
    const darkModeButton = document.getElementById('darkmode-button');
    const lightModeButton = document.getElementById('lightmode-button');
    document.querySelector('body').setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
    darkModeButton.style.opacity = 0;
    darkModeButton.style.zIndex = -1;
    //
    lightModeButton.style.opacity = 0.8;
    lightModeButton.style.zIndex = 1;
  },
  lightModeOnClickHandler: function () {
    document.querySelector('body').removeAttribute('data-theme');
    localStorage.removeItem('selectedTheme');
    const darkModeButton = document.getElementById('darkmode-button');
    const lightModeButton = document.getElementById('lightmode-button');
    lightModeButton.style.opacity = 0;
    lightModeButton.style.zIndex = -1;
    //
    darkModeButton.style.opacity = 0.8;
    darkModeButton.style.zIndex = 1;
  },
};

//
//
//
//
//
// STYLE

const HeaderDiv = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: var(--header_background);
  color: white;
  border-radius: 12px 12px 0 0;
  height: 80px;
  width: 100%;
  font-size: 1.5rem;
  transition: 0.3s ease-in-out;

  h1 {
    font-size: 2.15rem;
    font-weight: bold;
  }

  img {
    position: absolute;
    right: 2rem;
    width: 2.2rem;
    transition: ease-in-out 0.3s;
    cursor: pointer;
    opacity: 0.8;
  }
  img:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  #darkmode-button {
  }
  #lightmode-button {
    opacity: 0;
    z-index: -1;
  }
`;

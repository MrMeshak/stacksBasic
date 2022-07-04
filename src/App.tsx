import React from 'react';
import logo from './logo.svg';
import {createGlobalStyle} from 'styled-components'
import NavBar from './components/layout/NavBar/NavBar';
import Library from './views/Library/LibraryPage/LibraryPage';
import EditStackForm from './components/forms/StackForms/EditStackForm';

function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <NavBar/>
        <Library/>
      </div>
    </>
  );
}

export default App;


export const GlobalStyle = createGlobalStyle`


    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
    }

    html, body {
        height: 100%;
    }

    body{
        font-family: "Quicksand", Arial, Helvetica, sans-serif;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #FFFEFC;
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }
`
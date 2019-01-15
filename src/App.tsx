import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="twitter:site" content="@insiru" />
          <meta property="og:url" content="https://www.insi.ru/contacts/russia/moscow/" />
          <meta property="twitter:url" content="https://www.insi.ru/contacts/russia/moscow/" />
          <meta property="og:site_name" content="Холдинг ИНСИ" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="og:image" content="https://www.insi.ru/html/i/logo.png" />
          <meta property="twitter:image:src" content="https://www.insi.ru/html/i/logo.png" />
          <meta property="og:title" content="Контакты ИНСИ Москва"/>
          <meta property="twitter:title" content="Контакты ИНСИ Москва" />
          <meta property='og:description' content='Контакты холдинга ИНСИ в Москве.' />
          <meta property='twitter:description' content='Контакты холдинга ИНСИ в Москве.' />
        </Helmet>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

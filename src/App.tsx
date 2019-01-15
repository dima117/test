import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta property="og:title" content="Мэрилин Монро" />
          <meta
            property="og:description"
            content="Американская киноактриса и певица"
          />
          <meta
            property="og:image"
            content="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Marilyn_Monroe_-_publicity.JPG/210px-Marilyn_Monroe_-_publicity.JPG"
          />
          <meta property="og:type" content="profile" />
          <meta
            property="og:url"
            content="https://ru.wikipedia.org/wiki/Мэрилин_Монро"
          />
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

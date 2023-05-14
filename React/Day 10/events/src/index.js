import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App{
  render(){
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();

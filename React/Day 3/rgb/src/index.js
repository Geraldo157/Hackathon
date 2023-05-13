import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const root = document.getElementById('root');

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>Color generator project</h1>
      <h2>Geraldo JR</h2>
    </div>
  </header>
)

const hexaColor = () => {
  let str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

let rgb1 = hexaColor();
let rgb2 = hexaColor();
let rgb3 = hexaColor();
let rgb4 = hexaColor();

const cor1 = {
  backgroundColor: rgb1,
}

const cor2 = {
  backgroundColor: rgb2,
}

const cor3 = {
  backgroundColor: rgb3,
}

const cor4 = {
  backgroundColor: rgb4,
}

const Div1 = () => (
  <div className="cores">
    <div style={cor1} className='cor'>{rgb1}</div>
    <div style={cor2} className='cor'>{rgb2}</div>
    <div style={cor3} className='cor'>{rgb3}</div>
    <div style={cor4} className='cor'>{rgb4}</div>
  </div>
);

const App = () => (
  <div>
    {header}
    <Div1 />
  </div>
);

ReactDOM.render(<App />, root);
// import React from "react";
// import ReactDom from 'react-dom';


//functional component

// function Clock({locale}){
//   return (
//     <h1 className="headiong">
//       <span className="text">Hello {new Date().toLocaleTimeString(locale)} </span>
//       <img src="" alt="" />
//     </h1>
//   )
// }
// ReactDom.render( <Clock locale="bn-BD" /> , document.getElementById('root'))


// class component 


// class Clock extends React.Component{
//   render() {
//     return (
//       <h1 className="headiong">
//         <span className="text">Hello - {this.props.children} {new Date().toLocaleTimeString(this.props.locale)} </span>
//         <img src="" alt="" />
//       </h1>
//     )
//   }
// }
// ReactDom.render(<Clock locale="bn-BD">test</Clock>, document.getElementById('root'))

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

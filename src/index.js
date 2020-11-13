import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Main extends React.Component{
  render(){
    return (
       <>
           <h1>React Movie Search</h1>
           <App />
       </>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById('root'));



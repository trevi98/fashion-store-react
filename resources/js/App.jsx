import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example'
import '../css/app.css'


function App() {
    return (
        <>
            <div className="container">
                React App
            </div>
            <Example />
        </>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}

import React from 'react';
import logo from './logo.svg';
import './App.scss';


import { Button, Card, Elevation } from "@blueprintjs/core";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
 
        <Card interactive={true} elevation={Elevation.TWO}>
            <h5><a href="#">Card heading</a></h5>
            <p>Card content</p>
            <Button>Submit</Button>
        </Card>
      </header>
    </div>
  );
}

export default App;

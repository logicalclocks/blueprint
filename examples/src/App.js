import React from 'react';
import logo from './logo.svg';
import './App.scss';


import { Button, Card, Elevation } from "@blueprintjs/core";


function App() {
  return (
    <div className="App" >




                    <Card interactive={true} elevation={Elevation.ZERO}>
                        <h5><a href="#">Card heading</a></h5>
                        <p>Card content</p>
                        <Button>Submit</Button>
                    </Card>
                    <Card interactive={true} elevation={Elevation.ZERO}>
                        <h5><a href="#">Card heading</a></h5>
                        <p>Card content</p>
                        <Button>Submit</Button>
                    </Card>
                    <Card interactive={true} elevation={Elevation.ZERO}>
                        <h5><a href="#">Card heading</a></h5>
                        <p>Card content</p>
                        <Button>Submit</Button>
                    </Card>
                    <Card interactive={true} elevation={Elevation.ZERO}>
                        <h5><a href="#">Card heading</a></h5>
                        <p>Card content</p>
                        <Button>Submit</Button>
                    </Card>

                    <Card interactive={false} elevation={Elevation.TWO}>
                    <Button icon="refresh" />

                    </Card>

    </div>

);
}

export default App;

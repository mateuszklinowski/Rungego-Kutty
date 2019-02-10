import React, {Component} from 'react';

import './App.css';
import {calculateRungeKutta} from './runge-kutta.helper';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nodes: [],
            x: 1,
            y: 2,
            h: 3,
            n: 4,
        }
    }

    handleSubmit = () => {
        if (this.state.h < 0) {
            this.setState({
                error: 'H musi być większe od 0',
            });
            return;
        }

        this.setState({
            nodes: calculateRungeKutta(this.state)
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Runge Kutta
                    </p>
                </header>
                <div className="points-wrapper">
                    <p>Podaj dane:</p>
                    <br/>

                    <label htmlFor="X">X:</label>
                    <input name="X" id="X" type="number" value={this.state.x}
                           onChange={({target: {value}}) => this.setState({x: Number(value)})}/>
                    <br/>
                    <br/>
                    <label htmlFor="Y">Y:</label>
                    <input name="Y" id="Y" type="number" value={this.state.y}
                           onChange={({target: {value}}) => this.setState({y: Number(value)})}/>
                    <br/>
                    <br/>
                    <label htmlFor="H">H:</label>
                    <input name="H" id="H" type="number" value={this.state.h} min="0"
                           onChange={({target: {value}}) => this.setState({h: Number(value)})}/>
                    <br/>
                    <br/>
                    <label htmlFor="N">N:</label>
                    <input name="N" id="N" type="number" value={this.state.n}
                           onChange={({target: {value}}) => this.setState({n: Number(value)})}/>
                    <br/>
                    <br/>

                    <button type="submit" onClick={this.handleSubmit}>
                        Oblicz
                    </button>
                    <br/>
                    <span className='error'>
                         {this.state.error ? this.state.error : ''}
                    </span>
                </div>
                <br/>
                <div>
                    <table className="blueTable">
                        <thead>
                        <tr>
                            <th>index</th>
                            <th>X</th>
                            <th>Y</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.nodes.map((node, i) => (
                            <tr key={i}>
                                <td>
                                    <small>{i + 1}</small>
                                </td>
                                <td>
                                    {node[0]}
                                </td>
                                <td>
                                    {node[1]}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;

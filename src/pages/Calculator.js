import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getInfo from '../hardcode/info';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/calculator.css';
import { Link } from "react-router-dom";


function Risk() {
    const risk = useSelector(state => state.risk);
    const [info, setInfo] = useState([]);

    const [bond, setBonds] = useState(0);
    const [largeCap, setLargeCap] = useState(0);
    const [midCap, setMidCap] = useState(0);
    const [foreign, setForeign] = useState(0);
    const [smallCap, setSmallCap] = useState(0);

    useEffect(() => {
        var data = getInfo();
        setInfo(data[risk - 1]);
        console.log(data[risk - 1]);
    }, []);

    function calculate() {
        var labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Samll Cap"];
        var values = document.getElementsByClassName('values');
        var percentages = info;
        var total = parseFloat(0);
        var difference = [];
        var expected = [];
        var current = [];
        var results = [];
        for (let i = 0; i < values.length; i++) {
            console.log(values[i].value);
            var t = parseFloat(values[i].value);
            total = total + t;
            current.push(t);
        }
        for (let i = 0; i < percentages.length; i++) {
            var ex = total * (percentages[i] / 100);
            expected.push(ex);
            difference.push(ex - current[i]);
            results.push(ex - current[i]);
        }
        var text = "";
        for (let i = 0; i < difference.length; i++) {
            if (difference[i] > 0) {
                for (let j = i; j < difference.length; j++) {
                    if (j != i && difference[j] < 0) {
                        var num = difference[j] * -1;
                        console.log("num", num);
                        if (difference[i] >= num) {
                            var result = difference[i] - num;
                            console.log('reslt', result);
                            text = text + `1Transfer ${(difference[j] * -1)} from ${labels[j]} to ${labels[i]} \n`;
                            difference[i] = result;
                            difference[j] = 0;
                        } else if(difference[i]!=0){
                            var result = num - difference[i];
                            console.log('2reslt', result);
                            text = text + `2Transfer ${(difference[i])} from ${labels[j]} to ${labels[i]} \n`;
                            difference[i] = 0;
                            difference[j] = result*-1;
                        }
                    }
                }
            }
        }
        console.log('total', total);
        console.log('current', current);
        console.log('percentages', percentages);
        console.log('expected', expected);
        console.log('restul difference', difference);
        console.log('start_difference', results);
        console.log(text);

    }
    return (
        <div className="App">
            {
                risk == 0 ?
                    <h1>Select a <Link to='/'>RISK LEVEL</Link> before navigate to this page</h1>
                    :
                    <Grid className="display" centerAlign>
                        <h1 className="title">Personalized Portfolio</h1>

                        <Cell small={10} medium={8} large={8}>
                            <h3>Risk Level {risk}</h3>
                        </Cell>

                        <Cell small={12} medium={10} large={8}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Bonds</th>
                                        <th>Large Cap</th>
                                        <th>Mid Cap</th>
                                        <th>Foreign</th>
                                        <th>Small Cap</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            info.length > 0 && info.map((i, index) => (
                                                <td key={index}>{i}%</td>
                                            ))
                                        }
                                    </tr>
                                </tbody>
                            </table>
                        </Cell>
                        <Cell small={10} medium={8} large={8}>
                            <h3>Please Enter Your Current Portfolio</h3>
                        </Cell>

                        <Cell small={12} medium={10} large={8}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Current Amount</th>
                                        <th>Difference</th>
                                        <th>New Amount</th>
                                        <th>Recomended Transfers</th>
                                    </tr>
                                </thead>
                            </table>
                        </Cell>
                        <Cell small={12} medium={10} large={8}>
                            <Grid className="display">
                                <Cell small={4} medium={3}>
                                    <div className="current">
                                        <label>Bonds $:</label>
                                        <input className="values" type="text"></input>
                                    </div>
                                    <div className="current">
                                        <label>Large Cap $:</label>
                                        <input className="values" type="text"></input>
                                    </div>
                                    <div className="current">
                                        <label>Mid Cap $:</label>
                                        <input className="values" type="text"></input>
                                    </div>
                                    <div className="current">
                                        <label>Foreign $:</label>
                                        <input className="values" type="text"></input>
                                    </div>
                                    <div className="current">
                                        <label>Small Cap $:</label>
                                        <input className="values" type="text"></input>
                                    </div>
                                </Cell>
                                <Cell small={2} medium={3}>
                                    <input className="results" type="text"></input>
                                    <input className="results" type="text"></input>
                                    <input className="results" type="text"></input>
                                    <input className="results" type="text"></input>
                                    <input className="results" type="text"></input>

                                </Cell>
                                <Cell small={3}>
                                    <input className="new-amount" type="text"></input>
                                    <input className="new-amount" type="text"></input>
                                    <input className="new-amount" type="text"></input>
                                    <input className="new-amount" type="text"></input>
                                    <input className="new-amount" type="text"></input>

                                </Cell>
                                <Cell small={3}>

                                    <textarea disabled id="w3review" name="w3review" rows="10" cols="50">

                                    </textarea>

                                </Cell>
                            </Grid>
                            <Button isExpanded color="success" onClick={calculate}>Donut Chart View</Button>
                        </Cell>
                    </Grid>
            }

        </div>
    );
}

export default Risk;

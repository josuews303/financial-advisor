import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getInfo from '../hardcode/info';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/calculator.css';
import { Link } from "react-router-dom";


function Risk() {
    const risk = useSelector(state => state.risk);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        var data = getInfo();
        setInfo(data[risk - 1]);
    }, [risk]);

    function calculate() {
        var labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];
        var values = document.getElementsByClassName('values');
        var percentages = info;
        var total = parseFloat(0);
        var difference = [];
        var expected = [];
        var current = [];
        var ini_difference = [];
        var t = 0;
        try {
            for (let i = 0; i < values.length; i++) {
                t = parseFloat(values[i].value);
                t = Math.round(t * 100) / 100;
                if (t < 0) {
                    throw new Error("Only positive numbers >= 0");
                }
                total = total + t;
                current.push(t);
            }
            for (let i = 0; i < percentages.length; i++) {
                var per = percentages[i] / 100;
                var ex = total * per;
                ex = Math.round(ex * 100) / 100
                expected.push(ex);
                t = parseFloat(ex - current[i]);
                t = Math.round(t * 100) / 100;
                difference.push(t);
                ini_difference.push(t);
            }
            var text = "";
            for (let i = 0; i < difference.length; i++) {
                if (difference[i] > 0) {
                    for (let j = 0; j < difference.length; j++) {
                        if (j !== i && difference[j] < 0) {
                            var num = difference[j] * -1;
                            num = Math.round(num * 100) / 100;
                            var result = 0
                            if (difference[i] >= num) {
                                result = difference[i] - num;
                                result = Math.round(result * 100) / 100;
                                text = text + `Transfer ${(difference[j] * -1)} from ${labels[j]} to ${labels[i]} \n`;
                                difference[i] = result;
                                difference[j] = 0;
                            } else if (difference[i] !== 0) {
                                result = num - difference[i];
                                result = Math.round(result * 100) / 100;
                                text = text + `Transfer ${(difference[i])} from ${labels[j]} to ${labels[i]} \n`;
                                difference[i] = 0;
                                difference[j] = result * -1;
                            }
                        }
                    }
                }
            }

            let newAmount = document.getElementsByClassName('new-amount');
            let results = document.getElementsByClassName('results');

            for (let i = 0; i < newAmount.length; i++) {
                newAmount[i].value = expected[i];
                newAmount[i].style.color = "blue";
                if (ini_difference[i] >= 0) {
                    results[i].style.color = "green";
                    results[i].value = '+' + ini_difference[i];
                } else {
                    results[i].style.color = "red";
                    results[i].value = ini_difference[i];
                }
            }

            let recomended = document.getElementById("recomended");
            recomended.value = text;
        } catch (e) {
            alert(e.name + ': ' + e.message)
        }
    }
    return (
        <div className="App">
            {
                risk === 0 ?
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
                                        <input className="values" type="number" min={0}></input>
                                    </div>
                                    <div className="current">
                                        <label>Large Cap $:</label>
                                        <input className="values" type="number" min={0}></input>
                                    </div>
                                    <div className="current">
                                        <label>Mid Cap $:</label>
                                        <input className="values" type="number" min={0}></input>
                                    </div>
                                    <div className="current">
                                        <label>Foreign $:</label>
                                        <input className="values" type="number" min={0}></input>
                                    </div>
                                    <div className="current">
                                        <label>Small Cap $:</label>
                                        <input className="values" type="number" min={0}></input>
                                    </div>
                                </Cell>
                                <Cell small={2} medium={3}>
                                    <input className="results" type="text" disabled></input>
                                    <input className="results" type="text" disabled></input>
                                    <input className="results" type="text" disabled></input>
                                    <input className="results" type="text" disabled></input>
                                    <input className="results" type="text" disabled></input>

                                </Cell>
                                <Cell small={3}>
                                    <input className="new-amount" type="text" disabled></input>
                                    <input className="new-amount" type="text" disabled></input>
                                    <input className="new-amount" type="text" disabled></input>
                                    <input className="new-amount" type="text" disabled></input>
                                    <input className="new-amount" type="text" disabled></input>

                                </Cell>
                                <Cell small={3}>
                                    <textarea disabled id="recomended" name="recomended" rows="10" cols="50" />
                                </Cell>
                            </Grid>
                            <Button isExpanded color="success" onClick={calculate}>Rebalance</Button>
                        </Cell>
                    </Grid>
            }

        </div>
    );
}

export default Risk;

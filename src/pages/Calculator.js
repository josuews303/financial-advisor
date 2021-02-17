import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectRisk } from "../actions";
import getInfo from '../hardcode/info';
import { Grid, Cell, Button, Alignments } from 'react-foundation';
import '../css/calculator.css';
import { ChartDonut } from '@patternfly/react-charts';
import { Link } from "react-router-dom";


function Risk() {
    const risk = useSelector(state => state.risk);
    const dispatch = useDispatch();
    const [info, setInfo] = useState([]);
    const [disableContinue, setContinue] = useState(true);
    const [chart, setChart] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        var data = getInfo();
        setInfo(data[risk - 1]);
        console.log(data[risk - 1]);
    }, []);

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

                    </Grid>

            }

        </div>
    );
}

export default Risk;

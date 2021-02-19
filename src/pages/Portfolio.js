import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getInfo from '../hardcode/info';
import { Grid, Cell } from 'react-foundation';
import '../css/calculator.css';
import { Link } from "react-router-dom";
import Calculator from "../components/Calculator";


function Risk() {
    const risk = useSelector(state => state.risk);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        var data = getInfo();
        setInfo(data[risk - 1]);
    }, [risk]);
    
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
                        <Calculator data={info}/>
                        </Grid>
            }

        </div>
    );
}

export default Risk;

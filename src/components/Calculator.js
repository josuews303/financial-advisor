import React, { useState} from 'react';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/calculator.css';
import balancePortfolio from '../helpers/rebalance';

function Risk(props) {
    const [expected, setExpected] = useState(Array.apply(null, Array(5)).map(function () { return 'not'}));
    const [difference, setDifference] = useState(Array.apply(null, Array(5)).map(function () { return 'not'}));
    const [text, setText] = useState('');
    const labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];

    function calculate() {
        //get all values from inputs with class 'values'.
        var values = document.getElementsByClassName('values');
        var total = parseFloat(0);
        var current = [];
        try {
            //Iterate over html collection to get the numbers from input and total amount.
            for (let i = 0; i < values.length; i++) {
                var t = parseFloat(values[i].value);
                t = Math.round(t * 100) / 100;
                if (t < 0) {
                    throw new Error("Only positive numbers >= 0");
                }
                total = total + t;
                current.push(t);
            }
            let results = balancePortfolio(props.data,labels,total,current);
            console.log(results);
            setDifference(results.difference);
            setExpected(results.expected);
            setText(results.text);
        } catch (e) {
            alert(e.name + ': ' + e.message)
        }
    }
    return (
        <React.Fragment>
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
                        {
                            labels.map((label, i) => (
                                <div key={i} className="current">
                                    <label>{label} $:</label>
                                    <input className="values" type="number" min={0}></input>
                                </div>
                            ))
                        }
                    </Cell>
                    <Cell small={2} medium={3}>
                        {
                            difference.map((ex, i) => (
                                <input key={i} className={ex !== undefined && ex >= 0 ? "difference" : "difference-alt"} type="text" value={ex!=='not'?ex>=0?'+'+ex:ex:''} disabled></input>
                            ))
                        }
                    </Cell>
                    <Cell small={3}>
                        {
                            expected.map((diff, i) => (
                                <input key={i} className="new-amount" type="text" disabled value={diff!=='not'?diff:''}></input>
                            ))
                        }

                    </Cell>
                    <Cell small={3}>
                        <textarea disabled id="recomended" name="recomended" rows="10" cols="50" value={text} />
                    </Cell>
                </Grid>
                <Button isExpanded color="success" onClick={calculate}>Rebalance</Button>
            </Cell>
        </React.Fragment>
    );
}

export default Risk;

import React, { useState} from 'react';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/calculator.css';


function Risk(props) {
    const [expected, setExpected] = useState(Array.apply(null, Array(5)).map(function () { return 'not'}));
    const [difference, setDifference] = useState(Array.apply(null, Array(5)).map(function () { return 'not'}));
    const [text, setText] = useState('');
    const labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];
    const data = props.data;

    function calculate() {
        //get all values from inputs with class 'values'.
        var values = document.getElementsByClassName('values');
        //get hardcode data and initialize variables.
        var percentages = data;
        var total = parseFloat(0);
        var difference = [];
        var expected = [];
        var current = [];
        var ini_difference = [];
        var t = 0;
        try {
            //Iterate over html collection to get the numbers from input and total amount.
            for (let i = 0; i < values.length; i++) {
                t = parseFloat(values[i].value);
                t = Math.round(t * 100) / 100;
                if (t < 0) {
                    throw new Error("Only positive numbers >= 0");
                }
                total = total + t;
                current.push(t);
            }
            //Iterate over percentage data from hardcode to get the corresponding percentage */100 of any amount.
            for (let i = 0; i < percentages.length; i++) {
                var per = percentages[i] / 100;
                var ex = total * per;
                ex = Math.round(ex * 100) / 100
                expected.push(ex);
                //get difference between expected and current amount.
                t = parseFloat(ex - current[i]);
                t = Math.round(t * 100) / 100;
                //store in two arrays because one of them will be change according to iterations.
                difference.push(t);
                ini_difference.push(t);
            }
            var text = "";//Initialize recommendations message.
            for (let i = 0; i < difference.length; i++) {
                if (difference[i] > 0) {
                    //We need more money in this case.
                    for (let j = 0; j < difference.length; j++) {
                        if (j !== i && difference[j] < 0) {
                            //We found some accont with extra money.
                            var num = difference[j] * -1;
                            num = Math.round(num * 100) / 100;
                            var result = 0
                            if (difference[i] >= num) {
                                //We take all the extra money from the account and add the transaction message to text value.
                                result = difference[i] - num;
                                result = Math.round(result * 100) / 100;
                                text = text + `Transfer ${(difference[j] * -1)} from ${labels[j]} to ${labels[i]} \n`;
                                difference[i] = result;
                                difference[j] = 0;
                            } else if (difference[i] !== 0) {
                                //We take only the needed amount of money and return the rest to the account. Also we add the transaction message.
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
            setDifference(ini_difference);
            setExpected(expected);
            setText(text);
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
                                <input key={i} className={ex !== undefined && ex >= 0 ? "difference" : "difference-alt"} type="text" value={ex!=='not'?ex:''} disabled></input>
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

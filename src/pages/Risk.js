import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectRisk } from "../actions";
import getInfo from '../hardcode/info';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/risk.css';
import { ChartDonut } from '@patternfly/react-charts';
import { Link } from "react-router-dom";


function Risk() {
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);
  const [disableContinue, setContinue] = useState(true);
  const [chart, setChart] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setInfo(getInfo());
  }, []);
  function handleRisk(id) {
    var temp = info[id];
    var data = [{ x: 'Bonds', y: temp[0] }, { x: 'Large Cap', y: temp[1] }, { x: 'Mid Cap', y: temp[2] }, { x: 'Foreign', y: temp[3] }, { x: 'Small Cap', y: temp[4] }];
    setData(data);
    paintSelected(id);
    dispatch(selectRisk(parseInt(id)+1));
    setContinue(false);
  }
  function paintSelected(id){
    let buttons = document.getElementsByClassName('btn-risk');
    let rows = document.getElementsByTagName('tr');
    for(let i=0;i<buttons.length;i++){
      buttons[i].classList.remove("active");
      if(buttons[i].id===id){
        buttons[i].classList.add('active');
      }
    }
    for(let i=0;i<rows.length;i++){
      rows[i].classList.remove("active");
      if(rows[i].id===id){
        rows[i].classList.add('active');
      }
    }
  }
  function switchChart() {
    setChart(!chart);
  }
  return (
    <div className="App">
      <Grid className="display" centerAlign>
        <h4 className="title">Please Select A Risk Level For Your Investment Portfolio</h4>

        <Cell small={10} medium={8} large={8} className="info-container">
          <h5>Low</h5>
          <h5>High</h5>
        </Cell>

        <Cell small={10} medium={10} large={8} className="buttons-container">
          {
            info.length > 0 && info.map((i, index) => (
              <Button key={index}
                id={index}
                color="secondary"
                className="btn-risk"
                isHollow
                onClick={(e) => handleRisk(e.target.id)}>{index + 1}</Button>
            ))
          }
          <Button color="primary" className="btn-risk" isDisabled={disableContinue}>
              <Link to='/calculator'>Continue</Link>
              </Button>
        </Cell>
        
            <Cell small={10} medium={5} large={5} hidden={!chart}>
              <Button isExpanded color="success" onClick={switchChart}>Table View</Button>
              {
                data.length > 0 ?
                  <ChartDonut
                    ariaDesc="Average number of pets"
                    ariaTitle="Donut chart example"
                    constrainToVisibleArea={true}
                    data={data}
                    labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                    subTitle="PORTFOLIO"
                    title="INVESTMENT"
                  />
                  :
                  <h3>Please select a risk level</h3>
              }

            </Cell>
            <Cell small={12} medium={10} large={8} hidden={chart}>
              <Button isExpanded color="success" onClick={switchChart}>Donut Chart View</Button>
              <table>
                <thead>
                  <tr>
                    <th>Risk</th>
                    <th>Bonds %</th>
                    <th>Large Cap %</th>
                    <th>Mid Cap %</th>
                    <th>Foreign %</th>
                    <th>Small Cap %</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    info.length > 0 && info.map((i, index) => (

                      <tr key={index} id={index}>
                        <td>{index + 1}</td>
                        {
                          i.map((x, ind) => (
                            <td key={ind}>{x}</td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </Cell>
        



      </Grid>

    </div>
  );
}

export default Risk;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectRisk } from "../actions";
import getInfo from '../hardcode/info';
import { Grid, Cell, Button } from 'react-foundation';
import '../css/risk.css';
import { ChartDonut } from '@patternfly/react-charts';
import { useHistory } from "react-router-dom";


function Risk() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [info, setInfo] = useState([]);
  const [disableContinue, setDisableContinue] = useState(true);
  const [chart, setChart] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    setInfo(getInfo());
  }, []);
  function handleRisk(id) {
    var temp = info[id];
    var data = [{ x: 'Bonds', y: temp[0] }, { x: 'Large Cap', y: temp[1] }, { x: 'Mid Cap', y: temp[2] }, { x: 'Foreign', y: temp[3] }, { x: 'Small Cap', y: temp[4] }];
    setData(data);
    setSelectedId(id);
    dispatch(selectRisk(parseInt(id) + 1));
    setDisableContinue(false);
  }
  function switchChart() {
    setChart(!chart);
  }
  function handleClick() {
    history.push('/calculator');
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
                className={`btn-risk ${selectedId === index && "active"}`}
                isHollow
                onClick={()=>handleRisk(index)}>{index + 1}</Button>
            ))
          }
          <Button color="primary"
            id="btn-continue"
            className="btn-risk"
            isDisabled={disableContinue}
            onClick={!disableContinue ? handleClick:null}>
            Continue
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

                  <tr key={index}
                    id={index}
                    className={`${selectedId === index && "active"}`}>
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

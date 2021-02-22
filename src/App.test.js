import reduxStore from './redux/store';
import { selectRisk } from './redux/actions';
import rebalance  from './helpers/rebalance';

//test Redux
test('set risk preference', () => {
  let store = reduxStore();
	store.dispatch(selectRisk(1));
	expect(store.getState().risk).toBe(1);
});

//Test rebalance
test('test rebalance function', () => {
  const labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];
  const percentages = [0,5,25,30,40];
  const current = [25,0,5,40,30];
  const total = [100];
  const expectedText = "Transfer 5 from Bonds to Large Cap \nTransfer 20 from Bonds to Mid Cap \nTransfer 10 from Foreign to Small Cap \n"
  let result = rebalance(percentages,labels,total,current);
	expect(result.difference).toStrictEqual([-25, 5, 20, -10, 10]);
  expect(result.expected).toStrictEqual([0, 5, 25, 30, 40]);
  expect(result.text).toBe(expectedText);
});

//Test rebalance with decimals
test('test rebalance function', () => {
  const labels = ["Bonds", "Large Cap", "Mid Cap", "Foreign", "Small Cap"];
  const percentages = [0,5,25,30,40];
  const current = [25.54,0.5,5.3,3.5,4.3];
  const total = [39.14];
  const expectedText = "Transfer 1.46 from Bonds to Large Cap \nTransfer 4.49 from Bonds to Mid Cap \nTransfer 8.24 from Bonds to Foreign \nTransfer 11.35 from Bonds to Small Cap \n";
  let result = rebalance(percentages,labels,total,current);
	expect(result.difference).toStrictEqual([-25.54, 1.46, 4.49, 8.24, 11.36]);
  expect(result.expected).toStrictEqual([0, 1.96, 9.79, 11.74, 15.66]);
  expect(result.text).toBe(expectedText);
});
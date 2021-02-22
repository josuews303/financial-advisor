export default function calculate(percentages,labels,total,current) {
    var difference = [];
    var expected = [];
    var ini_difference = [];
    
    try {
        //Iterate over percentage data from hardcode to get the corresponding percentage */100 of any amount.
        for (let i = 0; i < percentages.length; i++) {
            var per = percentages[i] / 100;
            var ex = total * per;
            ex = Math.round(ex * 100) / 100
            expected.push(ex);
            //get difference between expected and current amount.
            var t = parseFloat(ex - current[i]);
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
        let obj = {
            difference: ini_difference,
            expected: expected,
            text: text
        };
        return obj;
    } catch (e) {
        alert(e.name + ': ' + e.message)
    }
}
const inquirer = require("inquirer");

const chosenNumbers: number[] = [];
const randomNumbers: number[] = [];

const startApp = async (): Promise<void> => {

    const validateInput = (text: string): boolean => {
        if(parseInt(text) >= 1 && parseInt(text) <= 49){
            return (true)
        }else { return false}
    };

    do {
        const result = await inquirer.prompt([{
            name: 'number',
            type: 'input',
            message: 'Podaj liczbę..'
            }
        ]);
        if(validateInput(result.number)) {
            chosenNumbers.push(parseInt(result.number))
        }
    } while(chosenNumbers.length < 6);

    const randomNewNumber = (): number => { return(Math.floor((Math.random()*49)+1))};
    const validateRandomNumber = (data: number): boolean => {
        if(data >= 1 && data <= 49 && randomNumbers.indexOf(data) === -1) {
            return true
        } else { return false} 
    };
    do {
        const number: number = randomNewNumber();
        if(validateRandomNumber(number)) {
            randomNumbers.push(number);
        }
    } while (randomNumbers.length < 6);
    
    const numberOfHits: number[]= [];
    for(let hit of chosenNumbers) {
        if(randomNumbers.indexOf(hit) !== -1) { numberOfHits.push(hit)}
    }

    const printResult = () : void => {
        console.log(`You hit following numbers ${numberOfHits}`)
    }

    printResult();

}

startApp();
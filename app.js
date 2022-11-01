import 'colors';
import  {inquirerMenu,pausa}  from "./helpers/inquirer.js";

const main = async() => {
   
    let opt = '';

    do {

        console.clear();

        opt = await inquirerMenu();

        await pausa();

    
    } while (opt !== '0');

}

main();

import inquirer from 'inquirer';
import 'colors';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tareas pendientes'
            },
            {
                value: '4',
                name: '4. Listar tareas completadas'
            },
            {
                value: '5',
                name: '5. Completar tarea'
            },
            {
                value: '6',
                name: '6. Eliminar tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
];

export const inquirerMenu = async() => {

    console.log('================================'.green);
    console.log(' Seleccione una opción'.green);
    console.log('================================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

export const pausa =  async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    console.log('\n');

    await inquirer.prompt(question);

}







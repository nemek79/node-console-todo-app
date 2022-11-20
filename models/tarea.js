import { v4 as uuidv4 } from 'uuid';

class Tarea {

    id = '';
    desc = '';
    completadoEn = null;

    constructor(descripcion){

        this.id = uuidv4();
        this.desc = descripcion;
        this.completadoEn = null;

    }

}

module.export = Tarea;
/* interface RecursoPersistente {
    load(): void;
    save(): void;
}

class ConfiguracionSistema implements RecursoPersistente {
    load() {
    console.log("Configuracion sistema cargada");
    }

    save() {
        console.log("Configuracion sistema almacenada");
    }

}

class ConfiguracionUsuario implements RecursoPersistente {
    load() {
    console.log("Configuracion usuario cargada");
    }
    save() {
    console.log("Configuracion usuario almacenada");
    }
}


class ConfiguracionHoraria implements RecursoPersistente {
    load() {
    console.log("Configuracion horaria cargada");
    }
    save() {
    throw new Error("ERROR, la hora no se puede almacenar, es solo de lectura");
    }
} */


    //consideramos que se estan violando 3 principios:

    // responsabilidad unica: porque Recurso Persistente deberia solo tener la responsabilidad
    // de guardar
    // Segregacion de interfaces: porque esta obligando a RecursoPersistente a implementar en clases metodos que no necesita
    // por ejemplo en ConfiguracionHoraria no tiene sentido el metodo save
    
    //DUDAAAAASSSS (estaba bien era Liskov!!!)
    // Preguntar si solo sucede en Herencia o si puede tambien aplicar en interfaces Liskov: en caso que 
    // RecursoPersistente tenga ambos metodos en configuracion horaria tendriamos
    // que forzar a usar save y se detendria el programa porque nos tiraria un trhow new error

    //explico que cuando se instancia un objeto de tipo configuracionHoraria con la antigua solucion se detendria
    // el programa y el polimorfismo no se aplicaria
    // de forma segura 



interface RecursoPersistente  {
    save(): void;
}

interface RecursoCargable {
    load(): void;
}



class ConfiguracionSistema implements RecursoPersistente, RecursoCargable {
    load() {
    console.log("Configuracion sistema cargada");
    }

    save() {
        console.log("Configuracion sistema almacenada");
    }

}

class ConfiguracionUsuario implements RecursoPersistente, RecursoCargable {
    load() {
    console.log("Configuracion usuario cargada");
    }
    save() {
    console.log("Configuracion usuario almacenada");
    }
}


class ConfiguracionHoraria implements RecursoCargable {
    load() {
    console.log("Configuracion horaria cargada");
    }
   
}
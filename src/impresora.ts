/* class Documento {
    constructor(public readonly texto: string) {}
}

class Impresora {

    private documentos: Documento[] = [];
    private nivelTinta: number = 100;
    public agregarDocumento(doc: Documento) {
    this.documentos.push(doc);
    }

    public imprimir() {
        for(const doc of this.documentos) {
        console.log(`Imprimiendo: ${doc.texto}`);
        }
    }


    public alertaFaltaTinta() {
        if (this.nivelTinta < 10) {
        // Simula la conexión y envío de email
        console.log("Conectando a servidor SMTP...");
        console.log("Enviando alerta de tinta baja a alguien@mail.com");
        }
    }
} */

    //consideramos que se esta violando el principio de responsabilidad unica
    // porque la clase impresora tiene 3 responsabilidades:
    // - imprimir
    // - gestionar documentos
    // - notificar por email


class Documento {
    constructor(public readonly texto: string) {}
}

class Notificador {

    private mensaje:string;
    constructor(mensaje:string) {
        this.mensaje=mensaje;
    }

    public enviarNotificacion() {
        console.log("Conectando a servidor SMTP...");
        console.log("Enviando alerta de tinta baja a alguien@mail.com");

    }

}

//Hay que refactorizar con Gestor de Impresion y Monitor de Tinta PREGUNTAR ALE
//Porque Gestor de impresion ademas de  imprime cargar documentos no seria mejor
// hacer un Gestor de documntos para cargarlos y que en otra clase se impriman ESTO ES EN 
// LA SOLUCION DE ALE? 

class Impresora {
    
    private documentos: Documento[] = [];
    private nivelTinta: number = 100;
    private notificador:Notificador=new Notificador("Falta de tinta");

  /*   constructor(notificador:Notificador) {
        this.notificador=notificador;
    } */
   
    public agregarDocumento(doc: Documento) {
     this.documentos.push(doc);
    }

    public imprimir() {
        for(const doc of this.documentos) {
        console.log(`Imprimiendo: ${doc.texto}`);
        }
    }


    public alertaFaltaTinta() {
        if (this.nivelTinta < 10) {
        // Simula la conexión y envío de email
            this.notificador.enviarNotificacion();

        }
    }
}
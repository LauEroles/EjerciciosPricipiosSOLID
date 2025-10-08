/* 
class BaseDeDatosMySQL {

    conectar(): void {
        console.log("Conectando a MySQL...");
    }

    guardar(datos: string): void {
        console.log(`MySQL: Guardando log: ${datos}`);
    }
}

class ServicioDeNotificaciones {
    private bd: BaseDeDatosMySQL;
    constructor(bd: BaseDeDatosMySQL) {
        this.bd = bd;
    }
    enviarNotificacion(mensaje: string, usuarioId: number): void {
        console.log(`Enviando notificación a usuario ${usuarioId}: ${mensaje}`);
        this.bd.guardar(`Notificación a ${usuarioId}`);
    }
}

 */

//

class BaseDeDatosMySQL {

    conectar(): void {
        console.log("Conectando a MySQL...");
    }

    guardar(datos: string): void {
        console.log(`MySQL: Guardando log: ${datos}`);
    }
}

class ServicioDeNotificaciones {
    
    private bd: BaseDeDatosMySQL;
    
    constructor(bd: BaseDeDatosMySQL) {
        this.bd = bd;
    }

    enviarNotificacion(mensaje: string, usuarioId: number): void {
        console.log(`Enviando notificación a usuario ${usuarioId}: ${mensaje}`);
        this.bd.guardar(`Notificación a ${usuarioId}`);
    }
}


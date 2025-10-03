/* class MD5Encrypter {
    encrypt(pass: string) {
    return `hashed_with_md5_${pass}`;
    }
}


class SHA256Encrypter {
    encrypt(pass: string) {
    return `hashed_with_sha256_${pass}`;
    }
}


class Encrypter {
    public hashPassword(pass: string, alg: 'MD5' | 'SHA256'): string {
        if (alg === 'MD5') {
        const e = new MD5Encrypter();
        return e.encrypt(pass);
        }
        if (alg === 'SHA256') {
        const e = new SHA256Encrypter();
        return e.encrypt(pass);
        }
        throw new Error("Algoritmo no soportado");
    }
}


class AuthService {

    private encrypter: Encrypter;

        constructor() {
            this.encrypter = new Encrypter(); // Dependencia directa
        }

    public login(user: string, pass: string): boolean {
        // Lógica para obtener el hash del usuario de la BD...
       
        const userHashedPass = "hashed_with_md5_1234";
        const hashedPass = this.encrypter.hashPassword(pass, 'MD5');
        
        return userHashedPass === hashedPass;
    }

} */


    // Viola el principio de abierto cerrado porque si queremos cambiar la firma y hacer 
    // una sobrecarga sin una interfaz que lo permita, el codigo queda abierto a extensiones
    // y cerrado a modificaciones

    //En la clase autenticador, hay un fuerte acomplamiento en el constructor al instaciar
    // un objeto dentro de él. Inversion de dependecias


interface Encriptador{
    encrypt(pass: string): string;
}


class MD5Encrypter {
    encrypt(pass: string) {
   
        return `hashed_with_md5_${pass}`;
    }
}


class SHA256Encrypter {
    encrypt(pass: string) {
   
        return `hashed_with_sha256_${pass}`;
    }
}


class Encrypter {


    public hashPassword(pass: string, alg: 'MD5' | 'SHA256'): string {
        
        if (alg === 'MD5') {
        const e = new MD5Encrypter();
            return e.encrypt(pass);
        }

        if (alg === 'SHA256') {
        const e = new SHA256Encrypter();
            return e.encrypt(pass);
        }

        throw new Error("Algoritmo no soportado");
    }
}


class AuthService {

    //tendriamos que haber instnaciado las interfaces y no las clases concretas
    private encrypter: Encrypter=new Encrypter();

        constructor(encrypter:Encrypter) {
            this.encrypter = encrypter;
        }

    public login(user: string, pass: string): boolean {
        // Lógica para obtener el hash del usuario de la BD...
       
        const userHashedPass = "hashed_with_md5_1234";
        const hashedPass = this.encrypter.hashPassword(pass, 'MD5');
        
        return userHashedPass === hashedPass;
    }

}
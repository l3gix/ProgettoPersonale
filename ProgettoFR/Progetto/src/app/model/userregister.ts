export class UserRegister {

    private username!: string;
    private nome!: string;
    private cognome!: string;
    private password!: string;

    constructor( username: string,  nome: string, cognome: string, password: string) {
        this.username = username;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }


    getNome(): string {
        return this.nome;
    }

    getCognome(): string {
        return this.cognome;
    }

    getPassword(): string {        
        return this.password;
    }



}


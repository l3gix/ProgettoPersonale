export class UserRegister {

    private username!: string;
    private email!: string;
    private nome!: string;
    private cognome!: string;
    private password!: string;

    constructor( username: string, email: string, nome: string, cognome: string, password: string) {
        this.username = username;
        this.email = email;
        this.nome = nome;
        this.cognome = cognome;
        this.password = password;
    }

    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email;
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


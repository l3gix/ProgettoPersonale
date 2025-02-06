export class User
{
    private id !: number;
    private username !: string;
    private password !: string;
    private nome !: string;
    private cognome !: string;
    private credito !: number;

    constructor(id: number, username: string, password: string, nome: string, cognome: string, credito: number){
        this.id = id;
        this.username = username;
        this.password = password;
        this.nome = nome;
        this.cognome = cognome;
        this.credito = credito;
    }

    getId(): number {
        return this.id;
    }
    getUsername(): string {
        return this.username;
    }
    getPassword(): string {
        return this.password;
    }
    getNome(): string {
        return this.nome;
    }
    getCognome(): string {
        return this.cognome;
    }
    getCredito(): number {
        return this.credito;
    }

    setCredito(credito: number) {
        this.credito = credito;
    }



}
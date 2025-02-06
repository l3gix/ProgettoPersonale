export class Operation
{
    private id !: number;
    private importo !: number;
    private data !: String;

    constructor(id : number, importo : number, data : String){
        this.id = id;
        this.importo = importo;
        this.data = data;
    }

    getId(): number {
        return this.id;
    }

    getImporto(): number {  
        return this.importo;
    }

    getData(): String {
        return this.data;
    }

}
interface Iprezzo {
    prezzo: number;
    getInfo(): string;
}

abstract class Libro implements Iprezzo {

    // prop --> dati
    protected readonly dataCreazione: Date;
    nPagine?: number;
    kb?: number;

    // construttori --> funzionalità di setup
    constructor(titolo: string, _prezzo: number);
    constructor(titolo: string, _prezzo: number, editore: string);

    constructor(public readonly titolo: string, private _prezzo: number, public readonly editore: string = "Maggioli Editore") {
        this.dataCreazione = new Date();
    }

    // metodi --> funzionalità
    abstract getInfo(): string;/* {
        return `Titolo: ${this.titolo} - Prezzo: ${this.prezzo} - Creato il: ${this.dataCreazione}`;
    }*/

    get prezzo(): number { return this._prezzo; }

    set prezzo(p: number) { this._prezzo = p <= 0 ? 1000 : p; }
}
class LibroCartaceo extends Libro {
    constructor(titolo: string, prezzo: number, public readonly pagine: number, editore: string = "Maggioli") {
        super(titolo, prezzo, editore);
    }

    override getInfo(): string {
        return `Libro Cartaceo: ${this.titolo} - ${this.pagine} pagine`;
    }
}

enum formatoLibroDigitale {
    Pdf, Epub
}

class LibroDigitale extends Libro {
    constructor(
        titolo: string,
        prezzo: number,
        public readonly dimensioneKb: number,
        public readonly formato: formatoLibroDigitale,
        editore: string = "Maggioli"
    ) {
        super(titolo, prezzo, editore);
    }
    override getInfo(): string {
        return `Libro Digitale: ${this.titolo} - ${this.dimensioneKb} KB`
    }

}

class Dvd implements Iprezzo {
    constructor(public titolo: string, public prezzo: number) {
    }
    getInfo(): string {
        return `Dvd: ${this.titolo}`;
    }

}

let archivioCartaceo: LibroCartaceo[];
let archivioDigitale: LibroDigitale[];

let archivio: Iprezzo[] = [];

archivio.push(new LibroCartaceo('La concessione del telefono', 10, 75));
archivio.push(new LibroDigitale('Js advanced', 23, 500, formatoLibroDigitale.Pdf));
archivio.push(new Dvd('Avatar', 1));

function AumentoPercentuale(libri: Iprezzo[], aumento: number) {
    for (let libro of libri) {
        libro.prezzo *= aumento;
    }
}

AumentoPercentuale(archivio, 1.1);
archivio.forEach(e => {
    console.log(e.getInfo());
});




//main
/*
let l1: Libro = new Libro("I Promessi Sposi", 10, 'Mondadori');
let l2: Libro = new Libro("Le patate", 20)

let l3: LibroCartaceo = new LibroCartaceo("Ritratto in Seppia", 14, 123);
*/

/*
let l3: Libro = l1;
l3.prezzo = 20;
console.log(l1.prezzo);

class MathUtils {
    static readonly pi: number = 3.1415;
}

let raggio = 10;

//let m = new MathUtils();
let area = raggio * raggio * MathUtils.pi;*/
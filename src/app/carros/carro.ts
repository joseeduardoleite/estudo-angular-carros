export class Carro {
    id: string;
    marca: string;
    modelo: string;
    preco: string;
    oferta: boolean;
    precoOferta: string;
    imagem: string;

    constructor(id: string, marca: string, modelo: string, preco: string, oferta: boolean, precoOferta: string, imagem: string) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
        this.oferta = oferta;
        this.precoOferta = precoOferta;
        this.imagem = imagem;
    }
}

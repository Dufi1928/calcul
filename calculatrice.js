// calculatrice.js
export default class Calculatrice {
    constructor() {
        this.historique = [];
    }

    add(a, b) {
        const result = a + b;
        this.historique.push({ operation: 'addition', a, b, result });
        return result;
    }

    subtract(a, b) {
        const result = a - b;
        this.historique.push({ operation: 'soustraction', a, b, result });
        return result;
    }

    multiply(a, b) {
        const result = a * b;
        this.historique.push({ operation: 'multiplication', a, b, result });
        return result;
    }

    getHistorique() {
        return this.historique;
    }

    clearHistorique() {
        this.historique = [];
    }
}

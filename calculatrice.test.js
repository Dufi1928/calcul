// calculatrice.test.js
const Calculatrice = require('./calculatrice');

describe('Calculatrice', () => {
    test('Addition : 2 + 3 doit donner 5', () => {
        const calc = new Calculatrice();
        expect(calc.add(2, 3)).toBe(5);
    });

    test('Soustraction : 5 - 3 doit donner 2', () => {
        const calc = new Calculatrice();
        expect(calc.subtract(5, 3)).toBe(2);
    });

    test('Multiplication : 2 * 3 doit donner 6', () => {
        const calc = new Calculatrice();
        expect(calc.multiply(2, 3)).toBe(6);
    });

    test("Historique : doit enregistrer les opérations effectuées", () => {
        const calc = new Calculatrice();
        calc.add(2, 3);
        calc.subtract(5, 3);
        calc.multiply(4, 2);
        const historique = calc.getHistorique();
        expect(historique.length).toBe(3);
        expect(historique).toEqual([
            { operation: 'addition', a: 2, b: 3, result: 5 },
            { operation: 'soustraction', a: 5, b: 3, result: 2 },
            { operation: 'multiplication', a: 4, b: 2, result: 8 }
        ]);
    });

    test("Effacer l'historique : doit vider l'historique", () => {
        const calc = new Calculatrice();
        calc.add(1, 1);
        calc.clearHistorique();
        expect(calc.getHistorique().length).toBe(0);
    });
});

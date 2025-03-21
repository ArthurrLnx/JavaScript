import java.lang.reflect.Array;

public class InteiroSet {
    constructor() {
        this.conjunto = new Array(101).fill(false);
    }

    union(outroConjunto) {
        const resultado = new InteiroSet();
        for (let i = 0; i <= 100; i++) {
            resultado.conjunto[i] = this.conjunto[i] || outroConjunto.conjunto[i];
        }
        return resultado;
    }

    intersecao(outroConjunto) {
        const resultado = new InteiroSet();
        for (let i = 0; i <= 100; i++) {
            resultado.conjunto[i] = this.conjunto[i] && outroConjunto.conjunto[i];
        }
        return resultado;
    }

    insereElemento(k) {
        if (k >= 0 && k <= 100) {
            this.conjunto[k] = true;
        } else {
            console.log("Erro: O valor deve estar entre 0 e 100.");
        }
    }

    deleteElemento(m) {
        if (m >= 0 && m <= 100) {
            this.conjunto[m] = false;
        } else {
            console.log("Erro: O valor deve estar entre 0 e 100.");
        }
    }

    toSetString() {
        const elementos = [];
        for (let i = 0; i <= 100; i++) {
            if (this.conjunto[i]) {
                elementos.push(i);
            }
        }
        return elementos.length > 0 ? elementos.join(" ") : "-";
    }

    ehIgualTo(outroConjunto) {
        for (let i = 0; i <= 100; i++) {
            if (this.conjunto[i] !== outroConjunto.conjunto[i]) {
                return false;
            }
        }
        return true;
    }
} {
    
}

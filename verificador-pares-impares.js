//---------------------------------------------------------
//Verificador de números consecutivos Pares e Ímpares:

class VerificarNumero{
    constructor(n){
        this.num = n;
    }
    verificarImpares(qtd){
        console.log(`Os ${qtd} números ímpares consecutivos de ${this.num} são:`)
        for(let i = 0; i <= qtd*2; i++)
        {
            if(i % 2 != 0 && this.num % 2 == 0){
                console.log(i + this.num)
            } else if(i % 2 != 0 && this.num % 2 != 0){
                console.log(i + this.num + 1)
            }
        }
        console.log("PRONTO!");
    }
    verificarPares(qtd){
        console.log(`Os ${qtd} números pares consecutivos de ${this.num} são:`)
        for(let i = 0; i <= qtd*2; i++)
        {
            if(i % 2 == 0 && this.num % 2 == 0){
                console.log(i + this.num)
            } else if(i % 2 == 0 && this.num % 2 != 0){
                console.log(i + this.num + 1)
            }
        }
        console.log("PRONTO!");
    }
}
const segundoNumero = new VerificarNumero(10);
segundoNumero.verificarPares(10)
// Os 10 números pares consecutivos de 3 são:
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 22
// 24
// PRONTO!

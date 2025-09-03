const { somarDoisnumeros,calcularMediaDeDoisNumeros} = require('../src/calculadora');
const {expect} = require ('chai');

const resultadoDaSoma = somarDoisnumeros(5,7)
console.log(resultadoDaSoma);

const resultadoDaMediaDeDoisNumeros = calcularMediaDeDoisNumeros(5,7)
console.log(resultadoDaMediaDeDoisNumeros);

describe('Testes da Função de Soma', function(){
    it('A função deve ser capaz de somar dois números positivos', function () {
        //Coleta o resultado da função

        const resultadoDaSoma = somarDoisnumeros(5,3);

        //Comparar o resultado com o valor que você espera
        expect(resultadoDaSoma).to.equal(8);
        

    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        //Coleta o resultado da função

        const resultadoDaSoma = somarDoisnumeros(500,-300);

        //Comparar o resultado com o valor que você espera
        
        expect(resultadoDaSoma).to.equal(200);

    });

});
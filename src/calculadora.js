
function somarDoisnumeros(valor1, valor2) {
    const resultado = valor1 + valor2;

    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
    //soma todos os valores
    const resultadoSomaDeDoisValores = somarDoisnumeros(valor1, valor2);
    //divide pela quantidade de valores
    const resultadoMediaDeDoisNumeros = resultadoSomaDeDoisValores / 2;
    //retorna o resultado
    return resultadoMediaDeDoisNumeros;
}

module.exports = {somarDoisnumeros,calcularMediaDeDoisNumeros}
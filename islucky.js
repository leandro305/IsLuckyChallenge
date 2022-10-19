Este Script resolve o seguinte desafio:
Os números dos bilhetes geralmente consistem em um número par de dígitos. Um número de bilhete é considerado sortudo se a soma da primeira metade dos dígitos for igual à soma da segunda metade. Dado um número de bilhete n, determine se é sorte ou não...

Exemplo:
Por n = 1230, a saída deve ser
solution(n) = true;
Por n = 239017, a saída deve ser
solution(n) = false.



function solution(n) {
    //Pegar o tam. e divide por 2
    var parteTamanho = n.length / 2;
    
    //Percorre de acordo com o tam. e corta a string no meio
    var parte1 = n.slice(0, parteTamanho);
    var parte2 = n.slice(-parteTamanho)
    
    //Separar em array de carac. o parte1 e parte2
    var p1a = parte1.split('');
    var p2a = parte2.split('');
    
    //Convertendo array de string em array de número
    var p1anum = p1a.map(Number);
    var p2anum = p2a.map(Number);
    
    //Vai somar os valores desses arrays
    var sumparte1 = 0; var sumparte2 = 0;
    for (var x=0; x < p1anum.length; x++) {
        sumparte1 += p1anum[x];
    }
    for (var y=0; y < p2anum.length; y++) {
        sumparte2 += p2anum[y];
    }
    
    if (sumparte1 == sumparte2) {
        return true;
    }else { return false; }
    
    // console.log(sumparte1 + 'e' + sumparte2);
}

const numbers = [1230,239017,134008,10,11,1010,261534,100000,999999, 12332133];

for (var x=0; x < numbers.length; x++) {
    console.log(solution(numbers[x].toString()));
}

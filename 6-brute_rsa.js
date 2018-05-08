function calc(n, d, e, el){
    var resStr = '';
    var sqrtN = Math.sqrt(n);
    resStr += '<div>N = P * Q; Пытаемcя разложить на множители, перебирая числа с 2 :</div>';
    resStr += '<div>';
    var p, q;
    for(var i = 2; i <= sqrtN; i++){
        resStr += n + ' mod ' + i + ' = ' + n % i;
        if(n % i === 0){
            p = i;
            break;
        } else {
            resStr += ', ';
        }
    }
    resStr += '</div>';
    q = n / p;
    resStr += '<div>P = ' + p + ', Q = N / P = ' + n + ' / ' + p + ' = ' + q + '</div>';
    var f = (p - 1) * (q - 1);
    resStr += '<div>F = (P - 1) * (Q - 1) = ' + (p - 1) + ' * ' + (q - 1) + ' = ' + f + '</div>';
    resStr += '<div>' + 'C = D ^ (-1) mod F ' + ' = ' + d + ' ^ (-1) mod ' + f + '</div>';
    var cInv = findInverse(d, f);
    resStr += cInv.str;
    resStr += '<div> C = ' + cInv.num + '</div>';
    resStr += '<div>' + 'm = e ^ C mod N ' + ' = ' + e + ' ^ ' + cInv.num + ' mod ' + n + '</div>';
    var mPow = fastPow(e, cInv.num, n);
    resStr += mPow.str;
    resStr += '<div> m = ' + mPow.num + '</div>';
    resStr += '<div>Проверка: </div><div>e = m ^ D mod N = ' + mPow.num + ' ^ ' + d + ' mod ' + n + '</div>';
    var ePow = fastPow(mPow.num, d, n);
    resStr += ePow.str;
    resStr += '<div>e = ' + ePow.num + '</div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('NVal').value,
        document.getElementById('DVal').value,
        document.getElementById('EVal').value,
        document.getElementById('result')
    );
}};
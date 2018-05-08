function calc(n, d, m, el){
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
    var c = cInv.num;
    resStr += cInv.str;
    resStr += '<div> C = ' + c + '</div>';
    resStr += '<div> s = m ^ C mod N = ' + m + ' ^ ' + c + ' mod ' + n + '</div>';
    var powRes = fastPow(m, c, n);
    resStr += powRes.str;
    resStr += 's = ' + powRes.num;
    var powCheck = fastPow(powRes.num, d, n);
    resStr += '<div>Проверка</div> <div> m = s ^ D mod N = ' + powRes.num + ' ^ ' + d + ' mod ' + n + '</div>';
    resStr += powCheck.str;
    resStr += '<div> m = ' + powCheck.num +' </div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('NVal').value,
        document.getElementById('DVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
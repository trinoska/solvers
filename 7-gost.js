function calc(p, q, a, k, x, m, el){
    var resStr = '';
    resStr += '<div> r = (a ^ k mod p) mod q = (' + a + ' ^ ' + k + ' mod ' + p + ') mod ' + q + '</div>';
    resStr += '<div>Найдём первую часть ' + a + ' ^ ' + k + ' mod ' + p + ':</div>';
    var t1Pow = fastPow(a, k, p);
    resStr += t1Pow.str;
    resStr += '<div> ' + a + ' ^ ' + k + ' mod ' + p + ' = ' + t1Pow.num + '</div>';
    var r = t1Pow.num % q;
    resStr += '<div> r = ' + t1Pow.num + ' mod ' + q + ' = ' + r + ', r != 0</div>';
    var s = (k * m + x * r) % q;
    resStr += '(k * m + x * r) mod q = ' + '(' + k + ' * ' + m + ' + ' + x + ' * ' + r + ') mod ' + q +
        ' = (' + (k * m) + ' + ' + (x * r) + ') mod ' + q +
        ' = ' + ((k * m) + (x * r)) + ' mod ' + q + ' = '+ s;
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('QVal').value,
        document.getElementById('AVal').value,
        document.getElementById('KVal').value,
        document.getElementById('XVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
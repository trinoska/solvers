function calc(p, q, d, m, el){
    var resStr = '';
    var n = p * q;
    resStr += '<div> N = p * q = ' + p + ' * ' + q + ' = ' + n + '</div>';
    var f = (p - 1) * (q - 1);
    resStr += '<div> F = (p - 1) * (q - 1) = ' + (p - 1) + ' * ' + (q - 1) + ' = ' + f + '</div>';
    resStr += '<div> C = d ^ (-1) mod F = ' + d + ' ^ (-1) mod ' + f + '</div>';
    var invC = findInverse(d, f);
    var c = invC.num;
    resStr += invC.str;
    resStr += '<div> C = ' + invC.num + '</div>';
    resStr += '<div> s = m ^ C mod N = ' + m + ' ^ ' + c + ' mod ' + n + '</div>';
    var powRes = fastPow(m, c, n);
    resStr += powRes.str;
    resStr += 's = ' + powRes.num;
    var powCheck = fastPow(powRes.num, d, n);
    resStr += '<div>Проверка</div> <div> m = s ^ D mod N = ' + powRes.num + ' ^ ' + d + ' mod ' + n + '</div>';
    resStr += powCheck.str;
    resStr += 'm = ' + powCheck.num;
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('QVal').value,
        document.getElementById('DVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
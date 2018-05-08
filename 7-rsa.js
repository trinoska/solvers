function calc(p, q, cOrD, m, el){
    var resStr = '';
    var n = p * q;
    resStr += '<div> N = p * q = ' + p + ' * ' + q + ' = ' + n + '</div>';
    var f = (p - 1) * (q - 1);
    resStr += '<div> F = (p - 1) * (q - 1) = ' + (p - 1) + ' * ' + (q - 1) + ' = ' + f + '</div>';
    var c, d;
    if(cOrD.name === 'D') {
        d = cOrD.value;
        resStr += '<div> C = d ^ (-1) mod F = ' + d + ' ^ (-1) mod ' + f + '</div>';
        var invC = findInverse(d, f);
        c = invC.num;
        resStr += invC.str;
        resStr += '<div> C = ' + c + '</div>';
    } else {
        c = cOrD.value;
        resStr += '<div> D = c ^ (-1) mod F = ' + c + ' ^ (-1) mod ' + f + '</div>';
        var invD = findInverse(c, f);
        d = invD.num;
        resStr += invD.str;
        resStr += '<div> D = ' + d + '</div>';
    }
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
        document.getElementById('PVal').value,
        document.getElementById('QVal').value,
        getTextRadio('COrD', 'COrDVal'),
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
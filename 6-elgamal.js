function calc(p, g, ca, k, m, el){
    var resStr = '';
    resStr += '<div>Da = g ^ Ca mod P = ' + g + ' ^ ' + ca + ' mod ' + p + '</div>';
    var daPow = fastPow(g, ca, p);
    resStr += daPow.str;
    resStr += '<div>Da = ' + daPow.num + '</div>';
    resStr += '<div>r = g ^ k mod P = ' + g + ' ^ ' + k + ' mod ' + p + '</div>';
    var rPow = fastPow(g, k, p);
    resStr += rPow.str;
    var r = rPow.num;
    resStr += '<div>r = ' + r + '</div>';
    resStr += '<div>e = m * Da ^ k mod P = ' + m + ' * ' + daPow.num + ' ^ ' + k + ' mod ' + p + '</div>';
    resStr += '<div>Найдём отдельно второй множитель ' + daPow.num + ' ^ ' + k + ' mod ' + p + ':</div>';
    var tPow = fastPow(daPow.num, k, p);
    resStr += tPow.str;
    resStr += '<div>' + daPow.num + ' ^ ' + k + ' mod ' + p + ' = ' + tPow.num + '</div>';
    var e = (m * tPow.num) % p;
    resStr += '<div>e = ' + m + ' * ' + tPow.num + ' mod ' + p + ' = ' + e + '</div>';
    resStr += '<div>m\' = e * r ^ (p - 1 - Ca) mod P = ' + e + ' * ' + r + ' ^ ' + (p - 1 - ca) + ' mod ' + p + '</div>';
    resStr += '<div>Найдём отдельно второй множитель ' + r + ' ^ ' + (p - 1 - ca) + ' mod ' + p + ':</div>';
    var t2Pow = fastPow(r, (p - 1 - ca), p);
    resStr += t2Pow.str;
    resStr += '<div>' + r + ' ^ ' + (p - 1 - ca) + ' mod ' + p + ' = ' + t2Pow.num + '</div>';
    var m2 = (e * t2Pow.num) % p;
    resStr += '<div>m\' = ' + e + ' * ' + t2Pow.num + ' mod ' + p + ' = ' + m2 + '</div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('GVal').value,
        document.getElementById('CaVal').value,
        document.getElementById('KVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
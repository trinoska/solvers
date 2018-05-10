function calc(p, g, cb, k, m, el){
    var resStr = '';
    resStr += '<div>Db = g ^ Cb mod P = ' + g + ' ^ ' + cb + ' mod ' + p + '</div>';
    var dbPow = fastPow(g, cb, p);
    resStr += dbPow.str;
    resStr += '<div>Db = ' + dbPow.num + '</div>';
    resStr += '<div>r = g ^ k mod P = ' + g + ' ^ ' + k + ' mod ' + p + '</div>';
    var rPow = fastPow(g, k, p);
    resStr += rPow.str;
    var r = rPow.num;
    resStr += '<div>r = ' + r + '</div>';
    resStr += '<div>e = m * Db ^ k mod P = ' + m + ' * ' + dbPow.num + ' ^ ' + k + ' mod ' + p + '</div>';
    resStr += '<div>Найдём отдельно второй множитель ' + dbPow.num + ' ^ ' + k + ' mod ' + p + ':</div>';
    var tPow = fastPow(dbPow.num, k, p);
    resStr += tPow.str;
    resStr += '<div>' + dbPow.num + ' ^ ' + k + ' mod ' + p + ' = ' + tPow.num + '</div>';
    var e = (m * tPow.num) % p;
    resStr += '<div>e = ' + m + ' * ' + tPow.num + ' mod ' + p + ' = ' + e + '</div>';
    resStr += '<div>m\' = e * r ^ (p - 1 - Cb) mod P = ' + e + ' * ' + r + ' ^ ' + (p - 1 - cb) + ' mod ' + p + '</div>';
    resStr += '<div>Найдём отдельно второй множитель ' + r + ' ^ ' + (p - 1 - cb) + ' mod ' + p + ':</div>';
    var t2Pow = fastPow(r, (p - 1 - cb), p);
    resStr += t2Pow.str;
    resStr += '<div>' + r + ' ^ ' + (p - 1 - cb) + ' mod ' + p + ' = ' + t2Pow.num + '</div>';
    var m2 = (e * t2Pow.num) % p;
    resStr += '<div>m\' = ' + e + ' * ' + t2Pow.num + ' mod ' + p + ' = ' + m2 + '</div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('GVal').value,
        document.getElementById('CbVal').value,
        document.getElementById('KVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
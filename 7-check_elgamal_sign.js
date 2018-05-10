function calc(p, g, y, r, s, m, el){
    var resStr = '';
    resStr += '<div> Проверим (y ^ r * r ^ s) mod p = g ^ m mod p </div>';
    resStr += '<div> Левая часть: (y ^ r * r ^ s) mod p = (' + y + ' ^ ' + r + ' * ' + r + ' ^ ' + s + ') mod ' + p + '</div>';
    resStr += '<div>'+ y + ' ^ ' + r + ' mod ' + p + ':</div>';
    var yrPow = fastPow(y, r, p);
    resStr += yrPow.str;
    var yrpow = yrPow.num;
    resStr += '<div>'+ y + ' ^ ' + r + ' mod ' + p + ' = ' + yrpow + '</div>';
    resStr += '<div>'+ r + ' ^ ' + s + ' mod ' + p + ':</div>';
    var rsPow = fastPow(r, s, p);
    resStr += rsPow.str;
    var rspow = rsPow.num;
    resStr += '<div>'+ r + ' ^ ' + s + ' mod ' + p + ' = ' + rspow + '</div>';
    var lpart = (yrpow * rspow) % p;
    resStr += '<div>(y ^ r * r ^ s) mod p = (' + yrpow + ' * ' + rspow + ') mod ' + p + ' = ' +
        (yrpow * rspow) + ' mod ' + p + ' = ' + lpart + '</div>';
    resStr += '<div> Правая часть: g ^ m mod p = ' + g + ' ^ ' + m + ' mod ' + p + ':</div>';
    var gmPow = fastPow(g, m, p);
    resStr += gmPow.str;
    var gmpow = gmPow.num;
    resStr += '<div>' + g + ' ^ ' + m + ' mod ' + p + ' = ' + gmpow + '</div>';
    if(gmpow === lpart){
        resStr += '<div>' + lpart + ' == ' + gmpow + ', подпись верна</div>';
    } else {
        resStr += '<div>' + lpart + ' != ' + gmpow + ', подпись не верна</div>';
    }
    el.innerHTML = resStr;

}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('GVal').value,
        document.getElementById('YVal').value,
        document.getElementById('RVal').value,
        document.getElementById('SVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
function calc(p, g, x, k, m, el){
    var resStr = '';
    resStr += '<div>y = g ^ x mod p = ' + g + ' ^ ' + x + ' mod ' + p + '</div>';
    var yPow = fastPow(g, x, p);
    resStr += yPow.str;
    var y = yPow.num;
    resStr += '<div>y = ' + y + '</div>';
    resStr += '<div>r = g ^ k mod p = ' + g + ' ^ ' + k + ' mod ' + p + '</div>';
    var rPow = fastPow(g, k, p);
    resStr += rPow.str;
    var r = rPow.num;
    resStr += '<div>r = ' + r + '</div>';
    var t0 = (m - x * r);
    var tNeg = t0 < 0;
    var t = t0;
    var cnt = 0;
    if(tNeg){
        cnt = Math.ceil(-t / (p - 1));
        t += (p - 1) * cnt;
    }
    var u = t % (p - 1);
    resStr += '<div>u = (m - x * r) mod (p - 1) = ' +
        '(' + m + ' - ' + (x * r) + ') mod ' + (p - 1) + ' = ' +
        '(' + t0 + ') mod ' + (p - 1) + ' = ' +
        ((tNeg) ? (
            '(' + cnt + ' * ' + (p - 1) + ' + (' + t0 + ')) mod ' + (p - 1) + ' = ' +
            (cnt * (p - 1) + t0) + ' mod ' + (p - 1) + ' = '
        ) : '' )
        + u + '</div>';
    if(tNeg){
        resStr += '<div>Число ' +cnt + ' получено так: Ceil(-1 * (' + t0 + ')' + ' / ' + (p - 1)+ ') = ' + cnt +' </div>';
    }
    resStr += '<div>s = k ^ (-1) * u mod (p - 1) = ' +
        k + ' ^ (-1) * ' + u + ' mod ' + (p - 1) +
        '</div>';
    resStr += '<div>Найдём ' + k + ' ^ (-1) mod ' + (p - 1) + '</div>';
    var kInv = findInverse(k, (p - 1));
    resStr += kInv.str;
    var kinv = kInv.num;
    resStr += '<div>' + k + ' ^ (-1) mod ' + (p - 1) + ' = ' + kinv + ' </div>';
    var s = (kinv * u) % (p - 1);
    resStr += '<div>s = ' + kinv + ' * ' + u + ' mod ' + (p - 1) + ' = ' + s + ' </div>';
    el.innerHTML = resStr;

}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('GVal').value,
        document.getElementById('XVal').value,
        document.getElementById('KVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
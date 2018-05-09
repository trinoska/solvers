function calc(p, q, a, y, s, r, m, el){
    r = parseInt(r);
    q = parseInt(q);
    s = parseInt(s);
    if(r >= q){
        el.innerHTML = '<div> r >=q, подпись неверна </div>';
        return;
    }
    if(s >= q){
        el.innerHTML = '<div> s >=q, подпись неверна </div>';
        return;
    }
    var resStr = '';
    resStr += '<div> Найдём m ^ (-1) mod q = ' + m + ' ^ (-1) mod ' + q + '</div>';
    var invM = findInverse(m, q);
    resStr += invM.str;
    var invm = invM.num;
    resStr += '<div>' + m + ' ^ (-1) mod ' + q + ' = ' + invm + '</div>';
    var u1 = (invm * s) % q;
    resStr += '<div> u1 = s * m ^ (-1) mod q = ' + s + ' * ' + invm + ' mod '+ q +
        ' = ' + (s * invm) + ' mod ' + q + ' = ' + u1 + '</div>';
    var u2 = (-(invm * r) % q) + q;
    resStr += '<div> u2 = -r * m ^ (-1) mod q = q - (r * m ^ (-1) mod q) = ' +
        q + ' - (' + r + ' * ' + invm + ' mod '+ q + ') = ' +
        q + ' - (' + (r * invm) + ' mod '+ q + ') = ' +
        q + ' - ' + ((r * invm) % q) + ' = ' +
        u2 + '</div>';
    resStr += '<div>v = ((a ^ u1 * y ^ u2) mod p) mod q = ((' +
        a + ' ^ ' + u1 + ' * ' + y + ' ^ ' + u2 + ' ) mod ' + p + ') mod ' + q + '</div>';
    resStr += '<div>Найдём ' + a + ' ^ ' + u1 + ' mod ' + p + '</div>';
    var au1Pow = fastPow(a, u1, p);
    resStr += au1Pow.str;
    var au1pow = au1Pow.num;
    resStr += '<div>' + a + ' ^ ' + u1 + ' mod ' + p + ' = ' + au1pow + '</div>';
    resStr += '<div>Найдём ' + y + ' ^ ' + u2 + ' mod ' + p + '</div>';
    var yu2Pow = fastPow(y, u2, p);
    resStr += yu2Pow.str;
    var yu2pow = yu2Pow.num;
    resStr += '<div>' + y + ' ^ ' + u2 + ' mod ' + p + ' = ' + yu2pow + '</div>';
    var v = ((yu2pow * au1pow) % p) % q;
    resStr += '<div>v = ((' + au1pow + ' * ' + yu2pow + ') mod ' + p + ') mod ' + q + ' = ' +
        '((' + (au1pow * yu2pow) + ') mod ' + p + ') mod ' + q + ' = ' +
        ((au1pow * yu2pow) % p) + ' mod ' + q + ' = ' +
        v + '</div>';
    if(v !== r){
        resStr += '<div>v != r, значит, подпись не верна</div>';
    } else {
        resStr += '<div>v = r, значит, подпись верна</div>';
    }
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('QVal').value,
        document.getElementById('AVal').value,
        document.getElementById('YVal').value,
        document.getElementById('SVal').value,
        document.getElementById('RVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
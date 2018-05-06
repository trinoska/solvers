function calc(p, ca, cb, m, el){
    let resStr = '';
    resStr += '<div> Da = Ca ^ (-1) mod (P - 1) = ' + ca + ' ^ (-1) mod ' + (p - 1) + '</div>';
    let daInv = findInverse(ca, p - 1);
    resStr += daInv.str;
    resStr += '<div> Da = ' + daInv.num + '</div>';
    resStr += '<div> Db = Cb ^ (-1) mod (P - 1) = ' + cb + ' ^ (-1) mod ' + (p - 1) + '</div>';
    let dbInv = findInverse(cb, p - 1);
    resStr += dbInv.str;
    resStr += '<div> Db = ' + dbInv.num + '</div>';
    resStr += '<div> x1 = m ^ Ca mod P = ' + m + ' ^ ' + ca + ' mod ' + p + '</div>';
    let x1Pow = fastPow(m, ca, p);
    resStr += x1Pow.str;
    resStr += '<div> x1 = ' + x1Pow.num + '</div>';
    resStr += '<div> x2 = x1 ^ Cb mod P = ' + x1Pow.num + ' ^ ' + cb + ' mod ' + p + '</div>';
    let x2Pow = fastPow(x1Pow.num, cb, p);
    resStr += x2Pow.str;
    resStr += '<div> x2 = ' + x2Pow.num + '</div>';
    resStr += '<div> x3 = x2 ^ Cb mod P = ' + x2Pow.num + ' ^ ' + daInv.num + ' mod ' + p + '</div>';
    let x3Pow = fastPow(x2Pow.num, daInv.num, p);
    resStr += x3Pow.str;
    resStr += '<div> x3 = ' + x3Pow.num + '</div>';
    resStr += '<div> x4 = x3 ^ Db mod P = ' + x3Pow.num + ' ^ ' + dbInv.num + ' mod ' + p + '</div>';
    let x4Pow = fastPow(x3Pow.num, dbInv.num, p);
    resStr += x4Pow.str;
    resStr += '<div> x4 = ' + x4Pow.num + '</div>';
    el.innerHTML = resStr;
}

window.onload = () => { document.getElementById('doOp').onclick = () => {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('CaVal').value,
        document.getElementById('CbVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
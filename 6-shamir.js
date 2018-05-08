function calc(p, cOrDa, cOrDb, m, el){
    var resStr = '';
    var ca, cb, da, db;
    if(cOrDa.name === 'C') {
        ca = cOrDa.value;
        resStr += '<div> Da = Ca ^ (-1) mod (P - 1) = ' + ca + ' ^ (-1) mod ' + (p - 1) + '</div>';
        var daInv = findInverse(ca, p - 1);
        resStr += daInv.str;
        da = daInv.num;
        resStr += '<div> Da = ' + da + '</div>';
    } else {
        da = cOrDa.value;
        resStr += '<div> Ca = Da ^ (-1) mod (P - 1) = ' + da + ' ^ (-1) mod ' + (p - 1) + '</div>';
        var caInv = findInverse(da, p - 1);
        resStr += caInv.str;
        ca = caInv.num;
        resStr += '<div> Ca = ' + ca + '</div>';
    }

    if(cOrDb.name === 'C') {
        cb = cOrDb.value;
        resStr += '<div> Db = Cb ^ (-1) mod (P - 1) = ' + cb + ' ^ (-1) mod ' + (p - 1) + '</div>';
        var dbInv = findInverse(cb, p - 1);
        resStr += dbInv.str;
        db = dbInv.num;
        resStr += '<div> Db = ' + db + '</div>';
    } else {
        db = cOrDb.value;
        resStr += '<div> Cb = Db ^ (-1) mod (P - 1) = ' + db + ' ^ (-1) mod ' + (p - 1) + '</div>';
        var cbInv = findInverse(db, p - 1);
        resStr += cbInv.str;
        cb = cbInv.num;
        resStr += '<div> Cb = ' + cb + '</div>';
    }
    
    resStr += '<div> x1 = m ^ Ca mod P = ' + m + ' ^ ' + ca + ' mod ' + p + '</div>';
    var x1Pow = fastPow(m, ca, p);
    resStr += x1Pow.str;
    resStr += '<div> x1 = ' + x1Pow.num + '</div>';
    resStr += '<div> x2 = x1 ^ Cb mod P = ' + x1Pow.num + ' ^ ' + cb + ' mod ' + p + '</div>';
    var x2Pow = fastPow(x1Pow.num, cb, p);
    resStr += x2Pow.str;
    resStr += '<div> x2 = ' + x2Pow.num + '</div>';
    resStr += '<div> x3 = x2 ^ Cb mod P = ' + x2Pow.num + ' ^ ' + da + ' mod ' + p + '</div>';
    var x3Pow = fastPow(x2Pow.num, da, p);
    resStr += x3Pow.str;
    resStr += '<div> x3 = ' + x3Pow.num + '</div>';
    resStr += '<div> x4 = x3 ^ Db mod P = ' + x3Pow.num + ' ^ ' + db + ' mod ' + p + '</div>';
    var x4Pow = fastPow(x3Pow.num, db, p);
    resStr += x4Pow.str;
    resStr += '<div> x4 = ' + x4Pow.num + '</div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        getTextRadio('COrDa', 'COrDaVal'),
        getTextRadio('COrDb', 'COrDbVal'),
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
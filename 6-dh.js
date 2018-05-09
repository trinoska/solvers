function calc(p, g, xa, xb, el){
    var resStr = '';
    var ya, yb;

    resStr += '<div> Ya = g ^ Xa mod P = ' + g + ' ^ ' + xa + ' mod ' + p + '</div>';
    var yaPow = fastPow(g, xa, p);
    resStr += yaPow.str;
    ya = yaPow.num;
    resStr += '<div> Ya = ' + ya + '</div>';

    resStr += '<div> Yb = g ^ Xb mod P = ' + g + ' ^ ' + xb + ' mod ' + p + '</div>';
    var ybPow = fastPow(g, xb, p);
    resStr += ybPow.str;
    yb = ybPow.num;
    resStr += '<div> Yb = ' + yb + '</div>';

    resStr += '<div> Zab = Yb ^ Xa mod P = ' + yb + ' ^ ' + xa + ' mod ' + p + '</div>';
    var zaPow = fastPow(yb, xa, p);
    resStr += zaPow.str;
    var za = zaPow.num;
    resStr += '<div> Zab = ' + za + '</div>';

    resStr += '<div> Zba = Ya ^ Xb mod P = ' + ya + ' ^ ' + xb + ' mod ' + p + '</div>';
    var zbPow = fastPow(ya, xb, p);
    resStr += zbPow.str;
    var zb = zbPow.num;
    resStr += '<div> Zba = ' + zb + '</div>';

    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('GVal').value,
        document.getElementById('XaVal').value,
        document.getElementById('XbVal').value,
        document.getElementById('result')
    );
}};
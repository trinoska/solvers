function calc(p, q, d, m, el){
    let resStr = '';
    let n = p * q;
    resStr += '<div> N = p * q = ' + p + ' * ' + q + ' = ' + n + '</div>';
    let f = (p - 1) * (q - 1);
    resStr += '<div> F = (p - 1) * (q - 1) = ' + (p - 1) + ' * ' + (q - 1) + ' = ' + f + '</div>';
    resStr += '<div> C = d ^ (-1) mod F = ' + d + ' ^ (-1) mod ' + f + '</div>';
    let invC = findInverse(d, f);
    let c = invC.num;
    resStr += invC.str;
    resStr += '<div> C = ' + invC.num + '</div>';
    resStr += '<div> s = m ^ C mod N = ' + m + ' ^ ' + c + ' mod ' + n + '</div>';
    let powRes = fastPow(m, c, n);
    resStr += powRes.str;
    resStr += 's = ' + powRes.num;
    let powCheck = fastPow(powRes.num, d, n);
    resStr += '<div>Проверка</div> <div> m = s ^ D mod N = ' + powRes.num + ' ^ ' + d + ' mod ' + n + '</div>';
    resStr += powCheck.str;
    resStr += 'm = ' + powCheck.num;
    el.innerHTML = resStr;
}

window.onload = () => { document.getElementById('doOp').onclick = () => {
    calc(
        document.getElementById('PVal').value,
        document.getElementById('QVal').value,
        document.getElementById('DVal').value,
        document.getElementById('MVal').value,
        document.getElementById('result')
    );
}};
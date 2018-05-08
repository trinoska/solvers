function calc(n, p, m, el){
    var res = fastPow(n, p, m);
    var resStr = res.str;
    resStr += '<div>Ответ: ' + res.num + '</div>';
    el.innerHTML  = resStr
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('NumVal').value,
        document.getElementById('PowVal').value,
        document.getElementById('ModVal').value,
        document.getElementById('result')
    );
}};
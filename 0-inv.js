function calc(n, m, el){
    var res = findInverse(n, m);
    var resStr = res.str;
    resStr += '<div>Ответ: ' + res.num + '</div>';
    el.innerHTML  = resStr
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('NumVal').value,
        document.getElementById('ModVal').value,
        document.getElementById('result')
    );
}};
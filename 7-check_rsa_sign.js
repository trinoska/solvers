function calc(n, d, s, el){
    var resStr = '';
    var powCheck = fastPow(s, d, n);
    resStr += '<div> m = s ^ D mod N = ' + s + ' ^ ' + d + ' mod ' + n + '</div>';
    resStr += powCheck.str;
    resStr += '<div> m = ' + powCheck.num +' </div>';
    el.innerHTML = resStr;
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    calc(
        document.getElementById('NVal').value,
        document.getElementById('DVal').value,
        document.getElementById('SVal').value,
        document.getElementById('result')
    );
}};
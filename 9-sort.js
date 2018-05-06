function getSortedArr(arrStr){
    var arr = arrStr.split(' ');
    var arrInds = arr.map(function(v, i) {
        return [i + 1, parseInt(v)];
    });
    arrInds.sort(function(n1, n2){return n1[1] - n2[1]});
    return arrInds;
}

function formTable(arrInds, el){
    var str1 = '', str2 = '';
    arrInds.forEach(function (v) {
        str1 += '<td>' + v[1] + '</td>';
        str2 += '<td>' + v[0] + '</td>';
    });
    el.innerHTML = '<table><tr>' + str1 + '</tr><tr>' + str2 + '</tr></table>'
}

window.onload = function() { document.getElementById('doOp').onclick = function() {
    formTable(getSortedArr(document.getElementById('arr').value), document.getElementById('result'));
}};
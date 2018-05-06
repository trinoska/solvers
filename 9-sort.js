function getSortedArr(arrStr){
    let arr = arrStr.split(' ');
    let arrInds = arr.map( (v, i) => {
        return [i + 1, parseInt(v)];
    });
    arrInds.sort((n1, n2) => {return n1[1] - n2[1]});
    return arrInds;
}

function formTable(arrInds, el){
    let str1 = '', str2 = '';
    arrInds.forEach((v) => {
        str1 += '<td>' + v[1] + '</td>';
        str2 += '<td>' + v[0] + '</td>';
    });
    el.innerHTML = '<table><tr>' + str1 + '</tr><tr>' + str2 + '</tr></table>'
}

window.onload = () => { document.getElementById('doOp').onclick = () => {
    formTable(getSortedArr(document.getElementById('arr').value), document.getElementById('result'));
}};
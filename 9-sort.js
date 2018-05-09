function getSortedArr(arrStr){
    var arr = arrStr.split(' ');
    var arrInds = arr.map(function(v, i) {
        return [i + 1, parseInt(v)];
    });
    arrInds = insertionSort(arrInds);
    return arrInds;
}

function insertionSort(arr){
    var n = arr.length;
    for (var i = 0; i < n; i++)
    { var v = arr[ i ], j = i-1;
        while (j >= 0 && arr[j][1] > v[1])
        { arr[j+1] = arr[j]; j--; }
        arr[j+1] = v;
    }
    return arr;
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
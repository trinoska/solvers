function getSortedArr(arrStr){
    var arr = arrStr.split(' ');
    var arrInds = arr.map(function(v, i) {
        return [i + 1, parseInt(v)];
    });
    arrInds = selectionSort(arrInds);
    return arrInds;
}

function selectionSort(arr){
    var n = arr.length;
    for (var i = 0; i < n-1; i++)
    { var min = i;
        for (var j = i+1; j < n; j++)
        { if (arr[j][1] < arr[min][1]) min = j; }
        var t = arr[min]; arr[min] = arr[i]; arr[i] = t;
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
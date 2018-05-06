function procNum(num){
    return +((Math.round(num * 1000) / 1000).toFixed(4));
}

function huffmanCode(probs, probsInds, syms){
    var codes = [], lengths = [], probTbl = [];
    var origProbs = probs.slice(0);
    var tableStrs = [];
    for(var i = 0; i < probs.length; i++){
        codes.push([]);
        probTbl.push([]);
        tableStrs.push('<td>' + syms[probsInds[i][0]] +  '</td>');
    }
    huffmanCodeRec(probs.length, probs, codes, lengths, probTbl);
    var resStr = '';

    for(var i = 0; i < probs.length; i++){
        for(var j = 0; j < probTbl[probs.length - i - 1].length; j++){
            tableStrs[j] += '<td>' + probTbl[probs.length - i - 1][j] + '</td>';
        }
    }

    resStr += '<table>';
    for(var i = 0; i < probs.length; i++){
        resStr += '<tr>' + tableStrs[i] + '</tr>';
    }
    resStr += '</table>';


    probs = origProbs;
    resStr += '<table>';
    for(var i = 0; i < probs.length; i++){
        resStr += '<tr>';
        resStr += '<td>' + syms[probsInds[i][0]] + '</td><td>' + probs[i] + '</td>';
        for(var j = 0; j < lengths[i]; j++){
            resStr += '<td>' + codes[i][j] + '</td>';
        }
        resStr += '</tr>';
    }
    resStr += '</table>';
    resStr += '<div> H = Sum -pi * log2(pi) = ';
    var h = 0;
    for(var i = 0; i < probs.length; i++){
        h -= probs[i] * Math.log(probs[i]) / Math.log(2);
        resStr += '(' + (-probs[i]) + ' * ' + procNum(Math.abs(Math.log(probs[i]) / Math.log(2))) + ')';
        if(i !== probs.length - 1){
            resStr += ' + ';
        }
    }
    resStr += ' = ' + procNum(h) + ' </div>';
    resStr += '<div> SD = Sum pi * len(word) = ';
    var sd = 0;
    for(var i = 0; i < probs.length; i++){
        sd += probs[i] * lengths[i];
        resStr += probs[i] + ' * ' + lengths[i];
        if(i !== probs.length - 1){
            resStr += ' + ';
        }
    }
    resStr += ' = ' + procNum(sd) + ' </div>';
    resStr += '<div> R = SD - H = ' + procNum(sd) + ' - ' + procNum(h) + ' = ' + procNum(sd - h) + '</div>';
    return resStr;
}

function huffmanCodeRec(n, probs, codes, lengths, probTbl){
    var i,j,l;
    var q;
    var str;
    for(i = 0; i < n; i++){
        probTbl[n - 2][i] = procNum(probs[i]);
    }
    if(n === 2){
        codes[0][0]=0;
        lengths[0]=1;
        codes[1][0]=1;
        lengths[1]=1;
    } else {
        var rp1 = probs[n-1];
        var rp2 = probs[n-2];
        q=probs[n-1] + probs[n-2];
        for(i=n-2; i !== 0; i--){
            if(probs[i-1]<q){
                probs[i]=probs[i-1];
            } else {
                j=i;
                break;
            }
        }
        if(i === 0){
            j=0;
        }
        probs[j]=q;
        huffmanCodeRec(n-1, probs, codes, lengths, probTbl);
        probTbl[n - 3][j] = rp1 + ' + ' + rp2 + ' = ' + probTbl[n - 3][j];
            str=codes[j];
        l=lengths[j];
        for(i=j; i<n-2; i++){
            codes[i]=codes[i+1];
            lengths[i]=lengths[i+1];
        }
        codes[n-2]=str;
        codes[n-2][l]=0;
        for(i = 0; i < l; i++){
            codes[n-1][i] = str[i];
        }
        codes[n-1][l]=1;
        lengths[n-2]=l+1;
        lengths[n-1]=l+1;
    }
}

function calc(pStr, symsStr, el){
    var ps = pStr.split(' ').map(function (v){return parseFloat(v);});
    var syms = symsStr.split(' ');
    var psInds = ps.map(function (v, i) {
        return [i, v];
    });
    psInds.sort(function(n1, n2){return n2[1] - n1[1]});
    ps.sort(function(n1, n2){return n2 - n1});
    el.innerHTML = huffmanCode(ps, psInds, syms);
}

window.onload = function(){ document.getElementById('doOp').onclick = function() {
    calc(document.getElementById('PVal').value, document.getElementById('SymsVal').value, document.getElementById('result'));
}};
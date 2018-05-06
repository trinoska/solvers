function findInverse(number, modulo) {
    var resStrs = [];
    var tgcd1 = modulo, tgcd2 = number;
    var tx1 = 0, tx2 = 1;
    resStrs.push('<td> GCD </td><td> Inv </td><td> q </td>');
    resStrs.push('<td>' + tgcd1 + '</td><td>' + tx1 +'</td><td></td>');
    resStrs.push('<td>' + tgcd2 + '</td><td>' + tx2 +'</td>');
    while(tgcd2 !== 1){
        resStrs[resStrs.length - 1] += '<td>' + Math.floor(tgcd1 / tgcd2) + '</td>';
        var tx3 = tx1 - Math.floor(tgcd1 / tgcd2) * tx2;
        tx1=tx2;
        tx2=tx3;
        var tgcd3=tgcd1%tgcd2;
        tgcd1=tgcd2;
        tgcd2=tgcd3;
        resStrs.push('<td>' + tgcd2 + '</td><td>' + tx2 + '</td>');
    }
    resStrs[resStrs.length - 1] += '<td></td>';
    resStrs = resStrs.map( function (v) {return '<tr>' + v + '</tr>';});
    var resStr = '<table>' + resStrs.join('') + '</table>';
    if(tx2<0){
        resStr += '<div> Inv < 0 => Inv = Inv + modulo = ' + tx2 + ' + ' + modulo  + ' = ' + (tx2 + modulo) + '</div>';
        tx2 += modulo;
    }
    return {num: tx2, str: resStr};
}

function fastPow(number, index, modulo){
    if(number === 0){
        return 0;
    }
    var accum = number;
    var result = 1;
    var bitStr = '<td>Биты</td><td></td>';
    var resStr = '<td>x</td><td>' + result + '</td>';
    var accumStr = '<td>s</td></td><td>' + accum + '</td>';
    for(var cur_index = index; cur_index !== 0; cur_index >>= 1){
        if((cur_index&1) === 1){
            bitStr += '<td>1</td>';
            resStr += '<td>' + result + ' * ' + accum + ' mod ' + modulo + ' = ' +
                (result * accum) + ' mod ' + modulo + ' = ' + ((result*accum)%modulo) + '</td>';
            result=(result*accum)%modulo;
        } else {
            resStr += '<td>' + result + '</td>';
            bitStr += '<td>0</td>';
        }
        accumStr += '<td>' + accum + ' * ' + accum + ' mod ' + modulo +
            ' = ' + (accum * accum) + ' mod ' + modulo +
            ' = ' + ((accum * accum) % modulo) + '</td>';
        accum = (accum * accum) % modulo;
    }
    var finStr = '<table><tr>' + bitStr + '</tr><tr>' + resStr + '</tr><tr>' + accumStr + '</tr></table>';
    return {num: result, str: finStr};
}
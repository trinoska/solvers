function writeExpr(
    middleVals, i, j, resStrObj
){
    if(i === j){
        resStrObj.str += "M" + (i + 1);
    } else {
        resStrObj.str += '(';
        writeExpr(middleVals, i, middleVals[i][j], resStrObj);
        resStrObj.str += '*';
        writeExpr(middleVals, middleVals[i][j]+1, j, resStrObj);
        resStrObj.str += ')';
    }
}

function calc(dimensStr, resEl){
    let arr = dimensStr.split(' ').map( (v) => {return parseInt(v);});
    let resMatr = [], middleMatr = [];
    let resStr = '';
    for(let i = 0; i < arr.length - 1; i++){
        resMatr.push([]);
        middleMatr.push([]);
        for(let j = 0; j < arr.length - 1; j++){
            resMatr[i].push(0);
            middleMatr[i].push(0);
        }
    }
    let firstStr = '';
    for(let i = 0; i < resMatr.length; i++){
        firstStr += ' = f(' + (i + 1) + ', ' + (i + 1) + ')'
    }
    firstStr = firstStr.substr(3, firstStr.length) + ' = 0';
    resStr += '<div>' + firstStr + '</div>';

    for(let len = 1; len < arr.length - 1; len++){
        for(let start = 0; start < (arr.length - 1 - len); start++){
            let minValue=0;
            let minMiddle=0;
            let firstIteration=true;
            let curFStrHead = 'f(' + (start + 1) + ', ' + (start + len + 1) + ') = ', curFStr = '', curFArr = [];
            for(let middle=start; middle<(start+len); middle++){
                let funcValue =
                    resMatr[start][middle]+
                    resMatr[middle+1][start+len]+
                    arr[start]*arr[middle+1]*arr[start+len+1]
                ;
                if(firstIteration || funcValue<minValue){
                    firstIteration=false;
                    minValue=funcValue;
                    minMiddle=middle;
                }
                if(len === 1){
                    curFStr = (arr[start] + ' * ' + arr[middle+1] + ' * ' + arr[start+len+1]);
                } else {
                    curFArr.push(
                        'f(' + (start + 1) + ', ' + (middle + 1) + ') + ' +
                        'f(' + (middle + 2) + ', ' + (start + len + 1) + ') + ' +
                        (arr[start] + ' * ' + arr[middle+1] + ' * ' + arr[start+len+1]) + ' = ' +
                        resMatr[start][middle] + ' + ' + resMatr[middle+1][start+len] + ' + '  +
                        (arr[start]*arr[middle+1]*arr[start+len+1]) + ' = ' + funcValue
                    );
                }
            }
            resMatr[start][start+len]=minValue;
            if(len === 1) {
                resStr += '<div>' + curFStrHead + curFStr + ' = ' + minValue + '</div>';
            } else {
                resStr += '<div>' + curFStrHead + 'min(<div style="padding-left: 10px;">'+
                    curFArr.join(';<br/>') + "</div>"+ ' = ' + minValue + '</div>';
            }
            middleMatr[start][start+len]=minMiddle;
        }
    }
    let resStrObj = {str: ''};
    writeExpr(middleMatr, 0, arr.length - 2, resStrObj);
    resEl.innerHTML = resStr + '<div>' + resStrObj.str.substr(1, resStrObj.str.length - 2) + '</div>';
}

window.onload = () => { document.getElementById('doOp').onclick = () => {
    calc(document.getElementById('dimens').value, document.getElementById('result'));
}};
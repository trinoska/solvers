function drawTable(arr, ind) {
    var i = 0;
    var j = 0;
    return "<div><table><tr><td>Хэш номер</td>" + arr.map(function (v) {
        var res = "<td>" + ((i === ind) ? "<u>" : "") + i + ((i === ind) ? "</u>" : "") + "</td>";
        i++;
        return res;
    }).join("") + "</tr><tr><td>Данные</td>" + arr.map(function (v) {
        var res = "<td>" + ((j === ind) ? "<u>" : "") + ((v === -1) ? "" : v) + ((j === ind) ? "</u>" : "") + "</td>";
        j++;
        return res;
    }).join("") + "</tr></table></div>"
}

function calc(data, m, el) {
    var hs = data.split(' ').map(function (v) {
        return parseInt(v);
    });
    m = parseInt(m);
    var resStr = '';
    resStr += "<div>По условию x(h) = h mod m</div>";
    resStr += "<div>Используем формулу устранения коллизий " +
        "Xi = (x(h) + g(i)) mod m, для линейных проб g(i) = i где i = 1, 2, ... m - 1</div>";
    var table = [];
    for (var i = 0; i < m; i++) {
        table[i] = -1;
    }
    resStr += "<div>Изначально таблица пустая</div>";
    resStr += drawTable(table, -1);
    var numColl = 0;
    for (var i = 0; i < hs.length; i++) {
        var cx = hs[i] % m;
        resStr += "<div>h = " + hs[i] + ": x(" + hs[i] + ") = " + hs[i] + " mod " + m + " = " + cx + "</div>";
        if (table[cx] === -1) {
            table[cx] = hs[i];
            resStr += "<div>Хэш-номера " + cx + " нет в таблице, помещаем данные по этому номеру</div>";
            resStr += drawTable(table, cx);
        } else {
            resStr += "<div>Хэш-номер " + cx + " есть в таблице => <b>коллизия</b>, пытаемся устранить</div>";
            numColl++;
            var found = false;
            for (var j = 1; j <= (m - 1) && !found; j++) {
                var xi = (cx + j) % m;
                resStr += "<div>Xi = X" + j + " = (" + cx + " + g(i)) mod " + m + " = (" + cx + " + " + j + ") mod " + m + " = " + xi + "</div>";
                if (table[xi] === -1) {
                    resStr += "<div>Хэш-номера " + xi + " нет в таблице, помещаем данные по этому номеру</div>";
                    table[xi] = hs[i];
                    resStr += drawTable(table, xi);
                    found = true;
                } else {
                    resStr += "<div>Хэш-номер " + xi + " есть в таблице => <b>коллизия</b>, пытаемся устранить дальше</div>";
                    numColl++;
                }
            }
            if (!found) {
                resStr += "<div>Не получилось устранить коллизии, данные не попадут в таблицу</div>"
            }
        }
    }
    resStr += "<div>Итоговая таблица: </div>" +
        drawTable(table, -1) +
        ((numColl === 0) ? "<div>Коллизий нет</div>" : "<div>Число коллизий = " + numColl + "</div>");
    el.innerHTML = resStr;
}

window.onload = function () {
    document.getElementById('doOp').onclick = function () {
        calc(
            document.getElementById('DataVal').value,
            document.getElementById('MVal').value,
            document.getElementById('result')
        );
    }
};
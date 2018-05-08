function getTextRadio(radioName, inpId){
    var radios = document.getElementsByName(radioName);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return {name: radios[i].value, value: document.getElementById(inpId).value};
        }
    }
}
function colocar(lt) {
    const letrita = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = letrita + lt;
}
function clean() {
    document.getElementById('result').innerHTML = "";
}
function atras() {
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring (0, result.length -1);
}
function calcular() {
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }

}


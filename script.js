
var rezultat
function plus(){
    let prvi = document.getElementById("prvi").value
    let drugi = document.getElementById("drugi").value
    rezultat = parseInt(prvi) + parseInt(drugi)
    document.getElementById("rezultat").innerText = `${rezultat}`
}
function minus(){
    let prvi = document.getElementById("prvi").value
    let drugi = document.getElementById("drugi").value
    rezultat = parseInt(prvi) - parseInt(drugi)
    document.getElementById("rezultat").innerText = `${rezultat}`
}
function puta(){
    let prvi = document.getElementById("prvi").value
    let drugi = document.getElementById("drugi").value
    rezultat = parseInt(prvi) * parseInt(drugi)
    document.getElementById("rezultat").innerText = `${rezultat}`
}
function podeljeno(){
    let prvi = document.getElementById("prvi").value
    let drugi = document.getElementById("drugi").value
    rezultat = parseInt(prvi) / parseInt(drugi)
    document.getElementById("rezultat").innerText = `${rezultat}`
}
function izracunaj(){
    document.getElementById("rezultat").className = "vidljivo"
}
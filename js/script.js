var allproudcts = document.querySelectorAll(".card-title")
var content = document.querySelector("#content")
var btn = document.querySelector("#addToCart")
var totalprice = 0 ;
var total = document.querySelector("#total")
allproudcts.forEach( function (item){
    item.onclick = function (){
        totalprice +=  parseInt(item.getAttribute("Price"))
        content.innerHTML += item.textContent + " + ";

        if (content.innerHTML != "" ){
            btn.style.display = "block";
        }
    }
})
btn.onclick = function (){
    total.innerHTML = "price =" +totalprice
}

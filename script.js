let myListItem = document.getElementsByTagName("li");

for (let index = 0; index < myListItem.length; index++){
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    myListItem[index].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
div.style.display = "none"
    }
}

let list = document.querySelector("ul");
list.addEventListener("click", function(e){
        e.target.classList.toggle("checked");
}, false);

function addItem(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("ListInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ""){
        alert("WRITE SMT")
    }
    else{document.getElementById("ulList").appendChild(li);
    }
    document.getElementById("ListInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(let i = 0; i < close.length; i++){
        close[i].onclick = function (){
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
}
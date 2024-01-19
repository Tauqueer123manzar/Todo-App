let btn=document.querySelector("button");
let inputs=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inputs.value;

    let deltbtn=document.createElement("button");
    deltbtn.innerText="delete";
    deltbtn.classList.add("delete");
    item.appendChild(deltbtn);
    ul.appendChild(item);
    inputs.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
});

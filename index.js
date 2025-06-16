const form=document.querySelector("form")
const data=document.querySelector(".data")
const sel=document.querySelector("#select1")
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    const li=document.createElement("li")
    
    const chexp=document.getElementById("chooseexp").value
    const chdesc=document.getElementById("choosedes").value
    const selectvalue=sel.value;
    const obj={
        chexp,
        chdesc,
        selectvalue
    }

    li.innerHTML=`${chexp}--${chdesc}--${selectvalue}`
    
   localStorage.setItem(obj.chdesc,JSON.stringify(obj))
li.appendChild(del(li,obj))
li.appendChild(edt(li,obj))

console.log(li)
    data.appendChild(li)

})

function del(li,obj){
    const bt=document.createElement("input")
    bt.type="button"
    bt.value="delete"
    bt.onclick=()=>{
        data.removeChild(li)
        localStorage.removeItem(obj.chdesc)
    }
    return bt;
}
function edt(li,obj){
 const bt=document.createElement("input")
    bt.type="button"
    bt.value="edit"
    bt.onclick=()=>{
        data.removeChild(li)
        localStorage.removeItem(obj.chdesc)
        document.getElementById("chooseexp").value=obj.chexp;
        document.getElementById("choosedes").value=obj.chdesc;
        sel.value=obj.selectvalue
    }
    return bt
}
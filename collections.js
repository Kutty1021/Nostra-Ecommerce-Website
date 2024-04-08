let input=document.getElementById("searchbox")
const imagebox=document.querySelector("article .imgcollection")
const h1=imagebox.querySelectorAll("h1")
input.addEventListener("keyup",()=>{
    let inputBox=input.value
    for (const item of h1) {
       if(item.textContent.toUpperCase().includes(inputBox.toUpperCase())){
        item.parentElement.style.display="block"
       }else{
        item.parentElement.style.display="none"
       }
    }
})
// checkbox is checked event
const checkbox=document.querySelectorAll(".checking input")

for (const check of checkbox) {
    check.addEventListener("click",()=>{
        for (const item of h1) {
            let label=check.nextElementSibling.textContent
        if(check.checked){
            if(item.textContent.includes(label)){
                item.parentElement.style.display="block"
            }else{
                item.parentElement.style.display="none"
            }
        }else{
            item.parentElement.style.display="block"
        }
    }
    })
}

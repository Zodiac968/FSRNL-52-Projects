textareas = document.querySelectorAll("textarea");

for(let i of textareas){
    i.addEventListener("keyup", (event)=>{
        i.style.height = "28px";
        if(i.id == "Title"){
            i.style.height = "40px";
        }
        let scrlHeight = event.target.scrollHeight;
        i.style.height = `${scrlHeight}px`;
    })
    i.addEventListener("keydown", (event)=>{
        if(event.keyCode == "13"){
            let hgt = window.getComputedStyle(i).lineHeight;
            hgt = parseInt(event.target.scrollHeight)+parseInt(hgt);
            i.style.height = `${hgt}px`;
        }
    })
}
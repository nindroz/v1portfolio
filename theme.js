window.addEventListener("load", () =>{
    if(localStorage.getItem("theme")=="dark"){
        document.querySelector("body").setAttribute("class","dark")
        localStorage.setItem("theme","dark")
        const card = document.querySelectorAll(".card");
        card.forEach(item =>{
            item.setAttribute("class"," card text-overflow text-white bg-dark border-light");
        });
    }
    else{
        document.querySelector("body").setAttribute("class","light")
        localStorage.setItem("theme","light")
        const card = document.querySelectorAll(".card");
        card.forEach(item =>{
            item.setAttribute("class"," card text-overflow");
        });
    }
})
function changedark(){
    if(localStorage.getItem("theme")=="light"){
    document.querySelector("body").setAttribute("class","dark")
    localStorage.setItem("theme","dark")
    const card = document.querySelectorAll(".card");
    card.forEach(item =>{
        item.setAttribute("class"," card text-overflow text-white bg-dark border-light");
    });
}
else{
    document.querySelector("body").setAttribute("class","light")
    localStorage.setItem("theme","light")
    const card = document.querySelectorAll(".card");
    card.forEach(item =>{
        item.setAttribute("class"," card text-overflow");
    });
}
}

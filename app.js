function changedark(){
    if(document.querySelector("body").className=="light"){
    document.querySelector("body").setAttribute("class","dark")
    
    const card = document.querySelectorAll(".card");
    card.forEach(item =>{
        item.setAttribute("class"," card text-overflow text-white bg-dark border-light");
    });
}
else{
    document.querySelector("body").setAttribute("class","light")
    
    const card = document.querySelectorAll(".card");
    card.forEach(item =>{
        item.setAttribute("class"," card text-overflow");
    });
}
}

const cards = document.querySelectorAll(".card"); 

cards.forEach(card => {
    const button = card.querySelector(".plus-icon");

    button.addEventListener("click", () => {
        card.classList.toggle("active"); 

        if(card.classList.contains("active")){
            button.src = "./resources/minus.png"; 

        } 
        else {
            button.src = "./resources/add.png";

        }
    })
})
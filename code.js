<<<<<<< HEAD
const cards = documentquerySelectorAll(".cards"); 

cards.forEach((card) => {
        const button = card.querySelector(".plus-icon") 
        button.addEventListener("click", () => {
            card.classList.toggle("active");
            if(card.classList.toggle("active")){
                button.src = "./resources/minus.png"; 

            } else {
                button.src = "./resources/add.png"; 
        }

        });
}); 
=======
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
>>>>>>> d116f4d7943fd6edf4b1514d720109e2af7fb3e4

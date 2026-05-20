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
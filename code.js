const items = documentquerySelectorAll(".title"); 

items.forEach((faq) => {
    faq.addEventListener("click", () => {
        const card = faq.parentElement; 
        const answer = card.querySelector("p"); 
        const icon = faq.querySelector("img"); 


        answer.classList.toggle("hide");

        if (a)
    });
}); 
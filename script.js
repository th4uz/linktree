// ======================================
// LINKTREE - SCRIPT
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".link-card");


    // Pequena animação de entrada
    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(10px)";

        setTimeout(() => {

            card.style.transition =
                "opacity .5s ease, transform .5s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 150 + (index * 100));

    });


    // Efeito de clique
    cards.forEach(card => {

        card.addEventListener("click", () => {

            card.style.transform = "scale(.97)";

            setTimeout(() => {
                card.style.transform = "";
            }, 150);

        });

    });

});
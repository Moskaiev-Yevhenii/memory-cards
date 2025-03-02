/* Pseudocode
1. Get all buttons with card class
2. Init an array to save card-values, score
3. For every card:
    Assign random value from 1 to 5 in a form of a class (card-1...) to other side of the card
    Assign correct visual to other side of the card
    Save the value to card-values

    Add event listener that will handle click on the card.

4. When user clicks on a card, event invokes handleClick()
5. handleClick invokes rotateCard(180)
6. Assigns other-side to the other side of the card
7. if firstCard is undefined: Store the value assigned to the card in firstCard
    else store the value in secondCard
8. Compare firstCard with secondCard. If the same add 1 to score
    else rotateCard(-180), firstCard = undefined
9. If score >= 8, gameOver() => for every card rotateCard(-180), randomizeCards
*/

const cards = document.querySelectorAll(".card");
let score = 0;
let firstCard;
let secondCard;

cards.forEach(card => {
    let n = Math.floor(Math.random() * 5 + 1);
    card.firstChild.classList.add("candy-" + n.toString());
    card.setAttribute("value", n);
    card.addEventListener("click", handleClick)
});

function handleClick() {
    rotateCard(this);

    if (firstCard !== undefined && secondCard !== undefined) {
        rotateCard(firstCard);
        rotateCard(secondCard);
        firstCard = undefined;
        secondCard = undefined;
    }

    if (firstCard === undefined) {
        firstCard = this;
    }
    else {
        secondCard = this;

        if (firstCard.getAttribute("value") === secondCard.getAttribute("value")) {
            score++;
            firstCard.removeEventListener("click", handleClick);
            secondCard.removeEventListener("click", handleClick);

            firstCard = undefined;
            secondCard = undefined;

            if (score >= 8) {
                gameOver();
            }
        }
    }
}

function rotateCard(card) {
    let otherSide = card.firstChild;
    if (otherSide.classList.contains("other-side")) {
        otherSide.classList.remove("other-side");
    }
    else {
        otherSide.classList.add("other-side");
    }
}

function gameOver() {

}
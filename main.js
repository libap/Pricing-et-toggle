var card1 = document.getElementById("card1Price");
var card2 = document.getElementById("card2Price");
var card3 = document.getElementById("card3Price");
var btnToggle = document.getElementById("btnToggle");

const valueCard1Month = "&dollar;19.99";
const valueCard2Month = "&dollar;24.99";
const valueCard3Month = "&dollar;39.99";

const valueCard1Year = "&dollar;199.99";
const valueCard2Year = "&dollar;249.99";
const valueCard3Year = "&dollar;399.99";


function verifier() {
    if (btnToggle.checked) {
        card1.innerHTML = valueCard1Year;
        card2.innerHTML = valueCard2Year;
        card3.innerHTML = valueCard3Year;
    }else{
        card1.innerHTML = valueCard1Month;
        card2.innerHTML = valueCard2Month;
        card3.innerHTML = valueCard3Month;
    }
    
}

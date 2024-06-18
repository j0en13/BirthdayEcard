const card = document.getElementById('birthdayCard');

card.addEventListener('click', function() {
    card.classList.toggle('flip');
});

function shareCard() {
    var wishes = document.getElementById("birthdayWish").innerText;
    var baseUrl = "https://j0en13.github.io/BirthdayE-card/BIRTHDAY%20CARD.html";
    var shareUrl = baseUrl + "?wishes=" + encodeURIComponent(wishes);
    var whatsappUrl = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Check out this birthday card: " + shareUrl);
    window.open(whatsappUrl, '_blank');
}

window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    var wishes = urlParams.get('wishes');
    if (wishes) {
        document.getElementById("birthdayWish").innerText = decodeURIComponent(wishes);
    }
}

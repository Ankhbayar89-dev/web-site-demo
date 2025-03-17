let clickCount = 0;
let declineClickCount = 0;

function displayMessage(action) {
    const messageElement = document.getElementById("message");
    const heartElement = document.getElementById("heart");
    const poemElement = document.getElementById("poem");
    const explosionElement = document.getElementById("explosion");
    const finalMessageElement = document.getElementById("finalMessage");
    const declineButton = document.getElementById("declineBtn");
    const acceptButton = document.getElementById("acceptBtn");
    const newOptionDiv = document.getElementById("newOption");

    // Уучлах товч дарсан үед юу болох вэ?
    if (action === 'accept') {
        clickCount++;
        declineButton.style.display = "none";  // Уучлахгүй товчийг нуух
        acceptButton.style.display = "none";  // Уучлах товчийг нуух
        newOptionDiv.style.display = "block";  // Сонголт гаргах

        if (clickCount === 1) {
            messageElement.innerHTML = "Уучилсанд баярлала! 💖";
            poemElement.innerHTML = "Хамгийн чангаар тэвэрье...🌹";
            poemElement.classList.remove('hidden');
            heartElement.innerHTML = "❤️";
            heartElement.style.display = "block";
            heartElement.style.animation = "heartAnimation 2s forwards";
            displayFlowers();
        } 
    } 

    // Уучлахгүй товч дарсан үед юу болох вэ?
    else if (action === 'decline') {
        declineClickCount++;
        if (declineClickCount === 1) {
            messageElement.innerHTML = "Итгэлтэй байж чадах уу? 😓";
            heartElement.innerHTML = "💔";
        }else if (clickCount === 2) {
            messageElement.innerHTML = "Уучлаарай, гуйж байна... 💔";
            heartElement.innerHTML = "💔";
        }else if (clickCount === 3) {
            messageElement.innerHTML = "Итгэлтэй байгаарай! 😔";
            heartElement.innerHTML = "💔";
            heartElement.style.display = "none";
            declineButton.disabled = true; // Уучлахгүй товчийг унтраах
            declineButton.style.cursor = "not-allowed"; // Хулгана дарах боломжгүй болгох
            declineButton.style.opacity = "0.5"; // Бага харагдах
        }

    }
}

function displayFlowers() {
    const bigHeartDiv = document.getElementById('bigHeart');
    bigHeartDiv.style.opacity = 1;

    for (let i = 0; i < 50; i++) {
        const flower = document.createElement('span');
        flower.textContent = '💖';
        flower.style.position = 'absolute';
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.top = Math.random() * window.innerHeight + 'px';
        flower.style.fontSize = Math.random() * 2 + 1 + 'em';
        document.body.appendChild(flower);
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
    setTimeout(() => {
        bigHeartDiv.style.opacity = 0;
    }, 5000);
}

function displayOption(option) {
    const newOptionDiv = document.getElementById("newOption");
    if (option === 'outdoor') {
        newOptionDiv.innerHTML = "<p>Хамт кино үзье🍕🎬 ! 💕</p>";
    } else if (option === 'indoor') {
        newOptionDiv.innerHTML = "<p>Хамт амттай хоол хийж идье 💖</p>";
    }
}

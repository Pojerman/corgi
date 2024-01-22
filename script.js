"use strict";

function getRandomCoordinate(maxValue, buttonSize) {
    return Math.random() * (maxValue - buttonSize);
}

function moveButton() {
    const btn = document.querySelector('.moving-button');

    const maxX = window.innerWidth * 0.9;
    const maxY = window.innerHeight * 0.9;

    const x = getRandomCoordinate(maxX, btn.offsetWidth);
    const y = getRandomCoordinate(maxY, btn.offsetHeight);

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`
}

function yesButton() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.yes').style.display = 'flex';
}

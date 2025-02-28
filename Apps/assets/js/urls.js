const urlList = [
    "calculator-math.com",
    "mathunknown.com",
    "mystic-arcade.com",
    "theunknowngames.com",
    "theunknowngms.com",
    "unknownmath.com",
    "the-unknowngms.com"
];

function goToRandomURL() {
    const randomURL = urlList[Math.floor(Math.random() * urlList.length)];
    window.location.href = randomURL;
}
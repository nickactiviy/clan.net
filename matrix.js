// Matrix Effect
document.addEventListener("copy", (evt) => { evt.clipboardData.setData("text/plain", "Lol www.instagram.com/ghostsecr");
evt.preventDefault(); }, false);
const matrixEffect = document.getElementById('matrixEffect');

function createMatrixEffect() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;

    setInterval(() => {
        let matrixText = '';
        for (let i = 0; i < 100; i++) {
            const randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
            matrixText += randomChar;
        }
        matrixEffect.textContent = matrixText;
    }, 100);
}

createMatrixEffect();

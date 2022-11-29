var clicks = 0;
var primera_carta;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

document.querySelectorAll('.carta').forEach(div => {
    div.addEventListener('click', async () => { // async --> sirve para poder hacer luego el 'await sleep()'
        if (div.classList.contains('volteada')) { // controla que no se pueda hacer click en una carta ya  voltead
            return;
        }
        if (clicks === 0) { // click a la primera carta
            div.classList.add('volteada');
            clicks++;
            primera_carta = div;
        } else { // click la segunda vez
            if (div.getAttribute('name') === primera_carta.getAttribute('name') && div.getAttribute('name') != null) {
                div.classList.add('volteada');

                primera_carta.onclick = null;
                // div.onclick = null;
                // primera_carta = null;
            } else {
                div.classList.add('volteada');
                await sleep(400);
                div.classList.remove('volteada');
                primera_carta.classList.remove('volteada');
            }
            clicks = 0;
        }
    });
});
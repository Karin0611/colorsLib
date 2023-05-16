const cols = document.querySelectorAll('.col');

/*
function generateRandomColor() {
    const hexColors = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
        color += hexColors[Math.floor(Math.random() * hexColors.length)];
    }

    return `#${color}`
}
*/

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (e.code.toLowerCase() === 'space') {
        setRandomColor();
    }
})

document.addEventListener('click', (e) => {
    const type = e.target.dataset.type;
    if (type === 'lock') {
        const node = e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.chidren[0];  //чтобы тыкалась именно иконка
        node.classList.toggle('fa-lock');
        node.classList.toggle('fa-unlock');
    }
})

function setRandomColor () {
    cols.forEach(col => {

        const isLocked = col.querySelector('i').classList.contains('fa-lock');

        const color = chroma.random();
        let text = col.querySelector('h2');
        let button = col.querySelector('button');

        if (isLocked) {
            return
        }

        text.textContent = color;
        col.style.background = color;
        setText(text, color);
        setText(button, color);
    })
}

function setText (text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColor()
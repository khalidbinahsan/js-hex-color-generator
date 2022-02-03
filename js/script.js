const clr_generate = document.querySelector('.color-generate');
const btn = document.querySelector('.click-me');
const color_name = document.querySelector('.color-name');
const hex_value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 'A', 'B', 'C', 'D', 'E', 'F'];
const container = document.querySelector('.container');
btn.addEventListener('click', function() {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        const gen_color = Math.floor(Math.random() * hex_value.length);
        hex += hex_value[gen_color];
    }
    clr_generate.textContent = hex;
    container.style.backgroundColor = hex;
    if (hex == '#FFFFFF') {
        color_name.style.color = 'black';
    } else {
        color_name.style.color = '#fff';
    }
});
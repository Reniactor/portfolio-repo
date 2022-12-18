const scroll = () => {
    let header = document.getElementById('navbar');
    return header.style.borderBottom = "1px outset var(--color-10)";
}

window.addEventListener("scroll", scroll);
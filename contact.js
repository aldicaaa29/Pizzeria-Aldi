function init() {
    const box = document.getElementById('dateContact');
    const h3 = document.querySelector('h3');
    box.addEventListener('mouseover', function handleMouseOver() {
        box.style.color='red';
    });
    box.addEventListener('mouseout', function handleMouseOver() {
        box.style.color='white';
    });
    h3.addEventListener('mouseover', function handleMouseOver() {
        h3.style.color='red';
    });
    h3.addEventListener('mouseout', function handleMouseOver() {
        h3.style.color=getComputedStyle(box).color;
    });

    box.style.left = `${h3.getBoundingClientRect().left}px`;

    const listData = document.querySelector('.list-data');
    fetch('http://localhost:3000/data').then(response => response.json()).then(data => {
        for (const item of data) {
            const li = document.createElement('li');
            li.textContent = item;
            listData.append(li);
        }

        listData.append(document.createElement('br'));
    });
}

window.onload=init;
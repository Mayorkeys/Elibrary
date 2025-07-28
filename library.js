const fromYear = document.getElementById("yearfrom")
const toYear = document.getElementById("yearto")

for (let year = 2025; year >= 1800; year--) {
    const fromOption = document.createElement("option");
    fromOption.value = year;
    fromOption.text = year;
    fromYear.appendChild(fromOption);

     const toOption = document.createElement("option");
    toOption.value = year;
    toOption.text = year;
    toYear.appendChild(toOption);
    
}

document.getElementById('menu').addEventListener('click', () => {
    document.getElementById('nav-content').style.display = document.getElementById('nav-content').style.display === 'block' ? 'none' : 'block';
});
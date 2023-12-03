const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("enter mo name mo bbcakes");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "Wag Ganon";
    }

    if (n.length > 0) {
        alert("Hello Love");
        alert('Ang complicated ng relationship natin recently ano?');
        alert('I do hope na makahanap ka ng reason to stay');
        alert('I will give you many reasons to stay');
        alert('Andito lang ako palagi');
        alert('Wait kita untill mega sure ka na ulit sakin ');
        alert('I Love You ' + n);
        main.style.display = 'block';
        break;
    }
}

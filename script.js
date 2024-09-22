function showMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.display = 'block';
    menu.style.opacity = '1';
}

function hideMenu() {
    const menu = document.getElementById('dropdown-menu');
    menu.style.opacity = '0';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 300);
}

function highlight(element) {
    element.querySelector('.highlight').style.display = 'block';
}

function removeHighlight(element) {
    element.querySelector('.highlight').style.display = 'none';
}

function showAlert(element) {
    if (element.getAttribute('data-valid') === 'false') {
        const alert = element.querySelector('.alert');
        alert.style.display = 'block';
    }
}

function hideAlert(element) {
    const alert = element.querySelector('.alert');
    alert.style.display = 'none';
}

function showNotificationMenu() {
    const menu = document.getElementById('notification-menu');
    menu.style.display = 'block';
    menu.style.opacity = '1';
}

function hideNotificationMenu() {
    const menu = document.getElementById('notification-menu');
    menu.style.opacity = '0';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 300);
}

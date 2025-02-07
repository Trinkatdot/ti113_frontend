const registerForm = document.getElementById('registerForm');
const userTable = document.getElementById('userTable');
const tableBody = userTable.querySelector('tbody');
const registerButton = document.getElementById('registerButton');

let users = JSON.parse(localStorage.getItem('users')) || [];

function renderTable() {
    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.username}</td><td>${user.email}</td>`;
        tableBody.appendChild(row);
    });
    if (users.length > 0) {
        userTable.classList.remove('hidden');
    } else {
        userTable.classList.add('hidden');
    }
}

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Username já existe.');
        return;
    }

    if (users.length >= 50) {
        alert('Maximum de usuraios atingindo.');
        return;
    }

    users.push({ username, email });
    localStorage.setItem('users', JSON.stringify(users));

    renderTable();
    registerForm.reset();

    registerButton.textContent = 'Unlocker';
    registerButton.disabled = true;
});

renderTable();
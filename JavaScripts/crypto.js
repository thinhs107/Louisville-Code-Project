document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData());

function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(data => data.json())
        .then(data => console.log(data))
}
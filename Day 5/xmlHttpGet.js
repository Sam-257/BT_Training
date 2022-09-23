let apiUrl = 'https://jsonplaceholder.typicode.com/users';

let xhr = new XMLHttpRequest();

xhr.open('GET', apiUrl, true);

xhr.onload = () => {
    let users = JSON.parse(xhr.responseText);
    display(users);
}

xhr.send();

const display = (users) => {
    for(let user of users){
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        td1.innerHTML = user.id;
        td2.innerHTML = user.name;
        td3.innerHTML = user.username;
        td4.innerHTML = user.email;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        document.getElementById('tableData').appendChild(tr);
    }
}
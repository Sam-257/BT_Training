const $ = (id) => {
    return document.getElementById(id);
}
const calcInterest = () => {
    let interest = (parseInt($('principle').value) * parseInt($('time').value) * parseInt($('rate').value)) / 100
    $('result').value = interest;
    console.log(interest);
}

const calcTotal = () => {
    let salaryTags = document.querySelectorAll('.salary');
    let result = 0;
    for(let salary of salaryTags){
        result += parseInt(salary.innerHTML);
    }
    document.getElementById('res').innerHTML = result;
}

const capitalize = () => {
    $("caps").value = $('caps').value.toUpperCase();
}

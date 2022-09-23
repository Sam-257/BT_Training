const $ = (id) => document.getElementById(id);
const policies = () => {
    let res = '';
    if($('privacy_policy').checked){
        res += $('privacy_policy').value + '<br>';
    }
    if($('user_policy').checked){
        res += $('user_policy').value + '<br>';
    }
    if($('endUser_policy').checked){
        res += $('endUser_policy').value;
    }
    $('output').innerHTML = res;
}
window.onload= function(){
    $('privacy_policy').onchange= policies;
    $('user_policy').onchange= policies;
    $('endUser_policy').onchange= policies;

}
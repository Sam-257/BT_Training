const $ = (id) => document.getElementById(id);

const imageHovered = (e) => {
    console.log(e)
    let src = e.target.src;
    $('preview').setAttribute('src',src);
}

const imageRemoved = () => {
    $('preview').removeAttribute('src');
}

window.onload = () => {
    $('img1').onmouseover = imageHovered;
    $('img2').onmouseover = imageHovered;
    $('img3').onmouseover = imageHovered;
    $('img4').onmouseover = imageHovered;
    $('img1').onmouseout = imageRemoved;
    $('img2').onmouseout = imageRemoved;
    $('img3').onmouseout = imageRemoved;
    $('img4').onmouseout = imageRemoved;
}
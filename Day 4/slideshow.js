const $ = id => document.getElementById(id);

let imagesList = [
    "https://jw-webmagazine.com/wp-content/uploads/2020/03/Kimetsu-no-YaibaDemon-Slayer.jpg",
    "https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png",
    "https://www.slashfilm.com/img/gallery/the-best-anime-of-the-spring-2022-season/l-intro-1656596831.jpg",
    "https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
    "https://wallpaperaccess.com/full/5707282.jpg",
    "https://assets3.thrillist.com/v1/image/3055763/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70"
];

const slideshow = () => {
    $('img1').setAttribute('src', imagesList[0]);
    let temp = imagesList.shift();
    imagesList.push(temp);
};

let timer = setInterval(slideshow,2000);

function myfunc(imgs) {
    


    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = 'flex';
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;

}

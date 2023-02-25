/* 
 PROJETO INTEGRADOR - 2° PERÍODO DE ENGENHARIA DE SOFTWARE
 
 ALUNOS:
 
 Gustavo Cardoso Ribeiro - 833588
 João Carneiro da Cunha - 834519
 Rômulo Alexandre Ziotti - 833903
 Weslley Fratini - 826652
*/

const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn.next');
const prevBtn = testimonials.querySelector('.btn.prev');
const itemWidth = testimonials.querySelector('.item').clientWidth;
var current = 0;

colorDot(current);

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function tamanho() {
    if ((1350 - window.innerWidth) > 0) {
        return (1350 - window.innerWidth);
    } else {
        return 0;
    }
}

function slideShow() {
    scrollToNextItem();
    setTimeout(slideShow, 5000);
}

function scrollToNextItem() {
    if (current == 4/*scroller.scrollLeft < (scroller.scrollWidth - itemWidth)*/)
    {
        // Last item reached. Go back to first item by setting scroll position to 0
        scroller.scrollTo({left: 0, top: 0, behavior: 'smooth'});
        current = 0;
        colorDot(current);
    } else
    {
        // The scroll position is not at the beginning of last item
        scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
        current++;
        colorDot(current);
    }
}

function scrollToPrevItem() {
    if (current/*scroller.scrollLeft*/ != 0)
    {
        // The scroll position is not at the beginning of first item
        scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
        current--;
        colorDot(current);
    } else
    {
        // This is the first item. Go to last item by setting scroll position to scroller width
        scroller.scrollTo({left: scroller.scrollWidth, top: 0, behavior: 'smooth'});
        current = 4;
        colorDot(current);
    }
}

function scrollToSpecificItem(n) {
    scroller.scrollTo({left: (itemWidth * n), top: 0, behavior: 'smooth'});
    current = n;
    colorDot(n);
}

function colorDot(n) {
    switch (n)
    {
        case 0:
            document.getElementById("dot1").style.backgroundColor = "#717171";
            document.getElementById("dot2").style.backgroundColor = "#bbb";
            document.getElementById("dot3").style.backgroundColor = "#bbb";
            document.getElementById("dot4").style.backgroundColor = "#bbb";
            document.getElementById("dot5").style.backgroundColor = "#bbb";
            break;

        case 1:
            document.getElementById("dot1").style.backgroundColor = "#bbb";
            document.getElementById("dot2").style.backgroundColor = "#717171";
            document.getElementById("dot3").style.backgroundColor = "#bbb";
            document.getElementById("dot4").style.backgroundColor = "#bbb";
            document.getElementById("dot5").style.backgroundColor = "#bbb";
            break;

        case 2:
            document.getElementById("dot1").style.backgroundColor = "#bbb";
            document.getElementById("dot2").style.backgroundColor = "#bbb";
            document.getElementById("dot3").style.backgroundColor = "#717171";
            document.getElementById("dot4").style.backgroundColor = "#bbb";
            document.getElementById("dot5").style.backgroundColor = "#bbb";
            break;

        case 3:
            document.getElementById("dot1").style.backgroundColor = "#bbb";
            document.getElementById("dot2").style.backgroundColor = "#bbb";
            document.getElementById("dot3").style.backgroundColor = "#bbb";
            document.getElementById("dot4").style.backgroundColor = "#717171";
            document.getElementById("dot5").style.backgroundColor = "#bbb";
            break;

        case 4:
            document.getElementById("dot1").style.backgroundColor = "#bbb";
            document.getElementById("dot2").style.backgroundColor = "#bbb";
            document.getElementById("dot3").style.backgroundColor = "#bbb";
            document.getElementById("dot4").style.backgroundColor = "#bbb";
            document.getElementById("dot5").style.backgroundColor = "#717171";
            break;
    }
}
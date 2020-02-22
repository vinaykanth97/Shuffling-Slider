document.addEventListener('DOMContentLoaded', function () {
    let OverallSlide = document.querySelector('.sliders')
    let slides = document.querySelectorAll('.slide')
    function Sliders(e) {
        Remove()
        this.classList.add('active')
        document.querySelector('.slide-2').classList.add('left')
        if (document.querySelector('.slide-3.active').classList.contains('active')) {
            document.querySelector('.slide-1').classList.add('right')
        }
    }

    function Remove() {
        for (let i = 0; i < slides.length; i++) {
            const element = slides[i];
            element.classList.remove('active')
            element.classList.remove('left')
            element.classList.remove('right')
        }
    }

    slides.forEach(function (slide) {
        slide.addEventListener('click', Sliders)
    })
})

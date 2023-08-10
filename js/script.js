	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');

    const btn = document.querySelector('.btn');
    const btn2 = document.querySelector('.btn2');
    const servicesBoxes = document.querySelectorAll('.services-box');
    const lights = document.querySelectorAll('.light-bar');
    const percents = document.querySelectorAll('.percent-bar');
    const images = document.querySelector('.portfolio-img');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
            btn.classList.add('active');
            btn2.classList.add('active');
            images.classList.add('active')
            servicesBoxes.forEach(box => {
                box.classList.add('active');
            });
            lights.forEach(light => {
                light.classList.add('active')
            });
            percents.forEach(percent => {
                percent.classList.add('active')
            });
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
            btn.classList.remove('active');
            btn2.classList.remove('active');
            images.classList.remove('active');
            servicesBoxes.forEach(box => {
                box.classList.remove('active');
            });
            lights.forEach(light => {
                light.classList.remove('active')
            });
            percents.forEach(percent => {
                percent.classList.remove('active')
            });
        }
    }
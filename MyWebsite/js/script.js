const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}

showMenu('navToggle','navMenu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    removeMenu('navMenu');
    // const navMenu = document.getElementById('navMenu')
    // navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const removeMenu = (navMenuId) => {
    const nav = document.getElementById(navMenuId);
    if(navMenuId) {
        nav.classList.remove('show');
    }
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*HOME*/
sr.reveal('.home_title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home_large_screen_img',{delay: 400})
sr.reveal('.home_social-icon',{interval: 200})

sr.reveal('.about_img', {})
sr.reveal('#aboutTitle', {})
sr.reveal('.about_subtitle', {delay: 150})
sr.reveal('.about_text', {delay: 250})


sr.reveal('.section-title', {})
sr.reveal('.timeline-items', {delay: 150})
sr.reveal('.timeline-item', {delay: 250})

sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_text', {delay: 100})
sr.reveal('.skills_data', {delay: 200})
sr.reveal('.skills_img', {delay: 200})



// sr.reveal('.home_title', {})
// sr.reveal('.button', {delay: 200})
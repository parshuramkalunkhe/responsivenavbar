const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav =document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
            toggle.classList.toggle('bxs-category')
        })
    }
}

showMenu('header-toggle', 'nav-menu')

const navLink =document.getElementById('.nav_link')

function linkAction(){
    navLink.forEach(p => p.classList.remove('active')) 
    this.classList.add('active')       
}

navLink.forEach(p => p.addEventListener('click', linkAction))



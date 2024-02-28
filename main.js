

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener('click', () => {
       faq.classList.toggle('open')

       //change icon
       const icon = faq.querySelector('.faq-icon i')
       if(icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus'
       } else {
         icon.className = 'fa-solid fa-plus'
       }

    })
})


const menu = document.querySelector('.nav__menu')
const btnMenu = document.querySelector('.btn__menu-mobile')
const btnMenuIcon = document.querySelector('.btn__menu-mobile i')


btnMenu.addEventListener('click', () => {
    if(btnMenuIcon.className === 'fa-solid fa-bars') {
        menu.classList.add('open')
        btnMenuIcon.className = 'fa-solid fa-xmark'
    } else {
        menu.classList.remove('open')
        btnMenuIcon.className = 'fa-solid fa-bars'
    }
})



/* ------------------- FORM INPUT ONFOCUS --------------------------*/



const inputsForm = document.querySelectorAll('.input-groups input')
const textAreaForm = document.querySelector('.input-groups textarea')




inputsForm.forEach((i) => {
    i.addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('active')
    })

    i.addEventListener('blur', (e) => {
        if(e.target.value.length === 0) {
             e.target.parentNode.classList.remove('active')
        } else {
            e.target.parentNode.classList.add('active')
        }

    })

    
})

textAreaForm.addEventListener('focus', (e) => {
    e.target.parentNode.classList.add('active')
})

textAreaForm.addEventListener('blur', (e) => {
    if(e.target.value.length === 0) {
        e.target.parentNode.classList.remove('active')
   } else {
       e.target.parentNode.classList.add('active')
   }
})

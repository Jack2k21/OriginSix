// cria a constante nav e seleciona dentro do documento html(document) o id header seguido do nav
const nav = document.querySelector('#header nav')
// cria a constante toggle e seleciona tudo no documento que está dentro de nav com a class(css) toggle
const toggle = document.querySelectorAll('nav .toggle')

// "para" cada "elemento" "de" "toggle" faça {}

for (const element of toggle) {
  //aqui está sendo gerado um evento para quando acontecer o click ele executar uma função, não é dado nome a essa função, pois ela só é executada nesse evento.
  element.addEventListener('click', function () {
    // é possível ir testando o código criando checkpoints exemplo, usar um alert('') para testar a função do click e ver ele mostrando na página
    // esse comando faz ele gerar um toggle(se não houver adiciona, se houver remove) igual liga desliga
    nav.classList.toggle('show')
  })
}

// quando clicar numa opção do menu, esconder ele
// cria a constante link que irá receber todos os "a(links)" que estão dentro do "nav ul li a"
const links = document.querySelectorAll('nav ul li a')

// para cada link clickado de links remova o show, pois como já estou no menu eu não preciso de um toggle e preciso que ele saia da vista
for (const link of links) {
  link.addEventListener('click', function (/*event*/) {
    //event.preventDefault()

    nav.classList.remove('show')
    // chamando função e jogando o link pra dentro
    //scrollSmooth(link)
  })
}

// mudar o header(adicionar sombra) da página quando o scroll for descendo

const header = document.querySelector('#header')
//pegar o deslocamento da altura
const navHeight = header.offsetHeight

// evento/função para detectar o avanço do scroll na tela
window.addEventListener('scroll', function () {
  // se o scroll da janela for maior que a altura do header, adicione o scroll
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    //se for menor faça remova o scroll
    header.classList.remove('scroll')
  }
})

/* Testimonial carousel slider Swiper */

const swiper = new Swiper('.swiper-container', {
  // mostra quantos slides irão aparecer na página
  slidesPerView: 1,
  // propriedades da paginação e o elemento o qual ela pega
  pagination: {
    el: '.swiper-pagination'
  },
  // se usado a bolinha do mouse ou as setas do teclado ele vai ir pro próximo slide
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scroll reveal */

const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

/* scroll suave */

// pegar todos os itens do menu e ao clicar em algum item disparar um evento e rolar a página suavemente para a sessão desejada

/*function scrollSmooth(link) {
  const sectionId = link.getAttribute('href')
  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' })
}*/

/* Menu ativo conforme a sessão ativa na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* botton back to top */

const backToTopButton = document.querySelector('.back-to-top')
// janela irá verificar o scroll
window.addEventListener('scroll', function () {
  backToTop()
  activateMenuAtCurrentSection()
})

function backToTop() {
  // se o y for maior ou igual a 560 adicione o show
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

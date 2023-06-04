window.addEventListener('scroll', function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 600)
})

const links = document.querySelectorAll('a[href^="#"]');
function scrollToSection(e) { 
  e.preventDefault(); 
  const target = document.querySelector(this.getAttribute('href')); 
  const targetOffset = target.offsetTop; 
  window.scrollTo({ top: targetOffset, behavior: 'smooth'});
}
links.forEach(link => {
  link.addEventListener('click', scrollToSection);
});

const botao = document.querySelector('#Img-Botao')
botao.addEventListener('click', () =>{
  window.scroll({top: window.innerHeight, behavior: "smooth"})
})



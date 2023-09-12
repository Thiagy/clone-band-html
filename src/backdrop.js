const nav_bar = document.querySelector('#nav_bar')
const backdrop = document.querySelector("#backdrop")
const menu_slide = document.getElementById("menu-slide")

nav_bar.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (menu_slide.style.left !== "0px") {
    menu_slide.style.left = "0px"
    backdrop.style.display = "block"
    document.body.style.overflowY = 'hidden'
  } else {
    menu_slide.style.left = ""
    backdrop.style.display = ""
    document.body.style.overflowY = ''
  }
}
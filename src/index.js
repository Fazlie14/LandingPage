import "./style.css";
import Home from "./module/home.js"
import Menu from "./module/menu.js"
import About from "./module/about.js"
import { clearContent } from "./utils/clear-content-service.js";


const homeBtn = document.querySelector('#home-tab')
const menuBtn = document.querySelector('#menu-tab')
const aboutBtn = document.querySelector('#about-tab')

const home = new Home()
const menu = new Menu()
const about = new About()
home.home()

homeBtn.addEventListener('click',()=> {
  clearContent()
  home.home()
})
menuBtn.addEventListener('click', ()=>{
  clearContent()
  menu.menu()
} )

aboutBtn.addEventListener('click', ()=>{
  clearContent()
  about.about()
} )


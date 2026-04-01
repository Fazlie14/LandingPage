class Menu{
  constructor(){
    this.content = document.querySelector('#content')
  }

  menu(){
    const div = document.createElement('div')

    const h1 = document.createElement('h1')
    h1.textContent = "Menu"

    div.append(h1)
    this.content.append(div)

  }

}

export default Menu
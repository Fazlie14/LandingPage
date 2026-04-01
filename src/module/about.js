class About{
  constructor(){
    this.content = document.querySelector('#content')
  }

  about(){
    const div = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = "About"

    div.append(title)
    this.content.append(div)
  }
}

export default About
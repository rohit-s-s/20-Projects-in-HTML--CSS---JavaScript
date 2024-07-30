const header = "Lorem, ipsum dolor.";
const text =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo,fugiat qui molestiae architecto quidem quis tenetur laboriosam sequiquisquam.";


  const hTag = document.createElement("h1")
  hTag.textContent = "Annotion"
  document.getElementById("container").appendChild(hTag)

  let i = 5
  while(i>0){
    const heading = document.createElement("h1")
    heading.innerHTML = header
    heading.className = "heading"
    const content = document.createElement("p")
    content.innerHTML = text
    content.className = "content"
    heading.addEventListener("click",()=>{
      heading.classList.toggle("active")
      content.classList.toggle("active")
    })
    document.getElementById("container").appendChild(heading)
    document.getElementById("container").appendChild(content)
    i--
  }

  
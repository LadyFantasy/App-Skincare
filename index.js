const icons = document.querySelectorAll(".icon")
const mascarillaWrapper = document.querySelector(".mascarillaWrapper")

const routineInputs = document.querySelector(".routineInputs")

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("icon")) {
    return
  }

  addInput(e)

})


function addInput(e) {
  const inputWapper = document.createElement("div")
  const input = document.createElement("input")
  input.type = "text"
  input.placeholder = e.target.nextElementSibling.innerHTML
  const iconClose = document.createElement("i")

  routineInputs.appendChild(inputWapper)
  routineInputs.classList.add("routineInputs")
  inputWapper.appendChild(input)
  inputWapper.appendChild(iconClose)
  iconClose.classList.add("fa", "fa-times")
  inputWapper.classList.add("inputWrapper")
  input.classList.add("input")
  

  // falta agregar la cruz de borrar
}



document.addEventListener("click", (event) => {
  if (!event.target.closest(".fa.fa-times")) {
    return
  }

  console.log(event.target.parentNode);
  event.target.parentNode.remove()
})
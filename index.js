


document.addEventListener("click", (event) => {
  if (event.target.closest(".fa.fa-times")) {
      
console.log (event.target.parentNode);
  event.target.parentNode.parentNode.remove()
  }
})

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
      removeAcriveClasses();
    panel.classList.add("active");
  });
});


function removeAcriveClasses() {
    panels.forEach((panel)=>{
        panel.classList.remove('active')

    })
}
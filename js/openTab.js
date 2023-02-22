let tabButtos = document.querySelectorAll('.tabButton');
// console.log(tabButtos);
Array.from(tabButtos).forEach((eachButton, index) => {
    eachButton.addEventListener('click', function() {
        let tabboxs = document.querySelectorAll('.tabbox');
        
        for (var i = 0; i < tabboxs.length; i++) {
            tabboxs[i].classList.remove("on")
            tabButtos[i].classList.remove("on");
        }
        tabboxs[index].classList.add("on");
        this.classList.add("on");
    })
});
tabButtos[0].click();
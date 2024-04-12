let body = document.querySelector(`body`)



trilho.addEventListener(`click`, () => {
    body.classList.toggle(`dark`)
    trilho.classList.toggle(`dark`)
    /*Index*/ 
    logo.classList.toggle(`dark`)
    ano.classList.toggle(`dark`)
    ano2.classList.toggle(`dark`)
    ano3.classList.toggle(`dark`)
    /*bimestres*/
    bimestre.classList.toggle(`dark`)
   
})

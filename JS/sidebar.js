document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.getElementById('mobile_btn').addEventListener('change', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
})



const meuCheckbox = document.getElementById('mobile_btn');
const meuElemento = document.getElementById('hamburger-lines');


// Adicione um ouvinte de evento para o evento de mudança (quando o checkbox é marcado/desmarcado)
meuCheckbox.addEventListener('change', () => {
    // Verifique se o checkbox está marcado
    if (meuCheckbox.checked) {
        // Se marcado, adicione a classe "ativo" e remova a classe "inativo"
        meuCheckbox.classList.add('checkbox_ativo');
        meuCheckbox.classList.remove('checkbox');
        meuElemento.classList.add('hamburger-lines_ativo');
        meuElemento.classList.remove('hamburger-lines');
 
    } else {
        // Caso contrário, adicione a classe "inativo" e remova a classe "ativo"
        meuCheckbox.classList.add('checkbox');
        meuCheckbox.classList.remove('checkbox_ativo');
        meuElemento.classList.add('hamburger-lines');
        meuElemento.classList.remove('hamburger-lines_ativo');
      
    }
});
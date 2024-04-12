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
        // Se marcado, adicione a classe "checkbox_ativo e hamburger-lines_ativo" e remova a classe "checkbox e hamburger-lines"
        meuCheckbox.classList.add('checkbox_ativo');
        meuCheckbox.classList.remove('checkbox');
        meuElemento.classList.add('hamburger-lines_ativo');
        meuElemento.classList.remove('hamburger-lines');
 
    } else {
        // Caso contrário, adicione a classe "checkbox e hamburger_lines" e remova a classe "checkbox_ativo e hamburger-lines_ativo"
        meuCheckbox.classList.add('checkbox');
        meuCheckbox.classList.remove('checkbox_ativo');
        meuElemento.classList.add('hamburger-lines');
        meuElemento.classList.remove('hamburger-lines_ativo');
      
    }
});
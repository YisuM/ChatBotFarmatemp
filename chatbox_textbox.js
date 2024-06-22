

var toggleChatButton = document.getElementById('toggleChat');

var chatDiv = document.getElementById('chat');

var botpresentation = document.getElementById("chat_presentation");



toggleChatButton.addEventListener('click', function () {


    if (chatDiv.style.display === 'none') {
        chatDiv.style.display = 'block';
        botpresentation.style.display = 'none';
    } else {
        chatDiv.style.display = 'none';

        botpresentation.style.display = 'block';

    }

});


const $ = el => document.querySelector(el)

const $form = $('form')
const $input = $('form input')
const $template = $('#mensaje-template')
const $messages = $('ul')
const $container = $('chatbox')
const $button = $('button')

$form.addEventListener('submit', (event)=>{
    event.preventDefault()
    // Formateamos la texto para quitar espacios en blancos del final y tabulaciones,...
    const messageText = $input.value.trim()

    if (messageText !== ''){
        // Añadimos el mensaje en el DOM
        $input.value = ''

    }

    //Usamos la función addMessage definida más abajo

    addMessage(messageText, 'user')

})

function addMessage(text, sender) {
    // Clonar el template. True para una copia profunda --> Copia los elementos de dentro del template: li, span, p ...
    const clonedTemplate = $template.content.cloneNode(true)

    // De este template clonado, necesitamos obtnener los elementos de dentro del template para trabajar con ellos
    const $newMessage = clonedTemplate.querySelector('.mensaje')
    const $who = $newMessage.querySelector('span')
    const $text = $newMessage.querySelector('p')

    $text.textContent = text
    $who.textContent = sender === 'bot' ? 'GPT' : 'Tú'
    // Añadimos la clase correspondiente del mensaje
    $newMessage.classList.add(sender)

    
    //Incluir nuevos elementos al DOM
    $messages.appendChild($newMessage)

    //actualizar el scroll para adaptarse al nuevo contenido
    //Iguala el scroll vertical (scrollTop) a la altura que tiene el scroll total de ese elemento (visible y no visible), elemento $container
    $container.scrollTop = $container.scrollHeight

}




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



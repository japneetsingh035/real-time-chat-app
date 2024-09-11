const socket = io();

const input = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const chatWindow = document.getElementById('chat-window');

function addMessage(msg) {
    const div = document.createElement('div');
    div.textContent = msg;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const message = input.value;
    if (message.trim()) {
        socket.emit('chat message', message);
        input.value = '';
    }
});

socket.on('chat message', (msg) => {
    addMessage(msg);
});

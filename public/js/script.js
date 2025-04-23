async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const mensagem = input.value;
  
    if (mensagem.trim() === "") return;
  
    chatBox.innerHTML += `<div><strong>Você:</strong> ${mensagem}</div>`;
    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  
    try {
      const res = await fetch('/mensagem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensagem })
      });
  
      const data = await res.json();
      chatBox.innerHTML += `<div><strong>IA:</strong> ${data.resposta}</div>`;
      chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
      chatBox.innerHTML += `<div><strong>Erro:</strong> Não foi possível se comunicar com o servidor.</div>`;
    }
  }
  
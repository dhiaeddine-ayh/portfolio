document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#sendBtn');
  
  button?.addEventListener('click', () => {
    const message = {
      name: "Jonathan Davis",
      email: "",
      message: "",
      date: "Thu 21 Apr"
    }
    
    form.send(message);
  });
}); 
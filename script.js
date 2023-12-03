
onload = () => {
    const c = setTimeout(() => {

      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      const palabras = ["Hola Sami :D", 
      "Esto es para ti <3", 
      "No quiero que te sientas ni desanimada ni triste",
      "Yo siempre voy estar a tu lado apoyandote",
      "Confio en ti, y eres capaz de realizar cualquier cosa",
      "Tu sonrisa ilumina mi día, y por eso eres especial para mí."];

      const elementoCentro = document.getElementById("centro");
      let indicePalabra = 0;
    
      // Función para cambiar la palabra cada 10 segundos y reiniciar el audio
      function cambiarPalabra() {
        elementoCentro.textContent = palabras[indicePalabra];
        
        elementoCentro.style.animation='none'
        void elementoCentro.offsetWidth
        elementoCentro.style.animation = null
        elementoCentro.style.animation = 'fade 9s ease-out forwards' 

        indicePalabra = (indicePalabra + 1) % palabras.length;

      }
      // Cambiar la palabra inicialmente y establecer el intervalo
      cambiarPalabra();
    
      setInterval(cambiarPalabra, 9000);
    }, 1000);
  };
  

 

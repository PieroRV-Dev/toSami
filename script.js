
onload = () => {
    const c = setTimeout(() => {

      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      const palabras = ["Hola Sami :D", 
      "Esto es detallito para ti <3", 
      "Quiero decirte que eres los mas especial para mí.", 
      "No me gusta verte triste por eso intento alegrarte el día",
      "Solo quiero que confíes y que puedo hacerte feliz!!!",
      "Eres mi gordita preciosa, mi princesa.",
      "Y aun asi si eres un pollito te seguiria amando.",
      "Confio en ti y se que puedes lograr todo lo que te propongas",
      "Suerte en tu exposición"];

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
  

 

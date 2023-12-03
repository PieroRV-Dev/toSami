


onload = () => {
    const c = setTimeout(() => {

      document.body.classList.remove("not-loaded");
      clearTimeout(c);
      const palabras = ["Hola Sami :D", 
                        "Porfavor sino suena la musiquita porfa dale play XD",
      "Esto es detallito para ti <3", 
      
      "Espero que te guste.",
      "Una flor para otra flor :)",
      "Sé que siempre quisiste flores",
      "Pero...",
      "Yo vi esta flor y pense en ti porque es bonita.",
      "Bueno en realidad a mi no me gusta.",
      "Pero creí que te gustaría porque tu si eres bonita.",
      "Quiero decirte que eres los mas especial para mí.", 
      "No me gusta verte triste por eso intento alegrarte el día",
      "Solo quiero que confíes y que puedo hacerte feliz!!!",
      "Eres mi gordita preciosa y mi princesa.",
      "Y aun asi fueses un pollito gordito te seguiria amando.",
      "Ntp, que no importe lo que pase siempre estare a tu lado.",
      "Solo quiero dormir a tu lado todas las noches.",
      "Estar abrazados tu y yo solos hasta que se acabe el tiempo.",
      "Confio en ti y se que puedes lograr todas tus metas.",
      "Suerte en tu exposición",
                       "Te amo..."];

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
  

 

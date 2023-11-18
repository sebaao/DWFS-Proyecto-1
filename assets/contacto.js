document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactarBtn").addEventListener("click", function() {
        var nombre = document.getElementById("nombre").value;
        var empresa = document.getElementById("empresa").value;
        var correo = document.getElementById("correo").value;

        // Verificar si los campos obligatorios están llenos
        if (nombre === "" || empresa === "" || correo === "") {
            // Mostrar una alerta si los campos obligatorios están vacíos
            alert("Todos los campos son obligatorios. Por favor, complete todos los campos antes de continuar.");
        } else {
            // Construir la URL de WhatsApp con los datos dinámicos
            var whatsappURL = "https://api.whatsapp.com/send?phone=56975467484&text=Hola%20Narustudio!%20%0A%0ASoy%20" + encodeURIComponent(nombre) +
                              "%2C%20me%20gustaría%20cotizar%20para%20mi%20negocio%20" + encodeURIComponent(empresa) + "%0A%0A" + encodeURIComponent(correo);
        
            // Abrir la URL de WhatsApp en una nueva ventana o pestaña
            window.open(whatsappURL, "_blank");
        }
    });
});




  // Selecciona todos los elementos de acordeón
  var accItems = document.querySelectorAll('.accordion-item');

  // Agrega un evento 'show.bs.collapse' a cada elemento de acordeón
  accItems.forEach(function (item) {
    item.addEventListener('show.bs.collapse', function () {
      // Cierra todos los elementos de acordeón excepto el que se está abriendo
      accItems.forEach(function (innerItem) {
        if (innerItem !== item) {
          innerItem.querySelector('.accordion-collapse').classList.remove('show');
        }
      });
    });
  });





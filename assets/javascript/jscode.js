// Declaro mis variables

var gifArray = ["Cat", "Dog", "Donkey", "Bird", "Falcon", "Fish", "Bear", "Snake"];

// Declaro mis funciones

    // Crear los botones en base al arreglo

    function btnCreation() {

        for (i=0; i<gifArray.length; i++) {
           // debugger;
            var b = $("<button type='button' class='btn btn-primary'>").text(gifArray[i]);
            $("#gifBtns").append(b);
            console.log(gifArray[i]);
            
            
        }



    }

// Aqui va el flujo del programa
btnCreation();

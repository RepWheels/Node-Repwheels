function eliminar(url){
    if (confirm("¿Está seguro?")) {
        location.href = url;
    }
}
function addCart(url,id_producto){
    csrf_token = $("[name='csrfmiddlewaretoken']")[0].value;
    id = $(`#id_${id_producto}`).val()
    cantidad = $(`#cantidad_${id_producto}`).val()
    items_carrito = $("#items_carrito")

    // Capturo referencia a dom de carrito del offCanvas
    contenido = $("#respuesta_carrito")
    loader = $("#loader")

    loader.removeClass("d-none");
    loader.addClass("d-block");

    offCanvas_carrito = $("#offcanvasRight");
    offCanvas_carrito.offcanvas('toggle');

    $.ajax({
        url: url,
        type: "POST",
        data: {"csrfmiddlewaretoken": csrf_token, "id": id, "cantidad": cantidad}
    })
    .done(function(respuesta){

        if (respuesta != "Error"){

            loader.removeClass("d-block");
            loader.addClass("d-none");
            // Pintar respuesta en offCanvas
            contenido.html(respuesta);

            //Buscar items en html resultante
            let position_ini = respuesta.search(" ");
            let position_final = respuesta.search("</h1>");
            let result = respuesta.substring(position_ini+2, position_final-1);
            items_carrito.html(result);
        }
        else{
            location.href="/productos";
        }
    })
    .fail(function(respuesta){
        location.href="/citas";
    });

    console.log("Comprado !!!")
}



function showCart(url){
    
    contenido = $("#respuesta_carrito")
    loader = $("#loader")

    loader.removeClass("d-none");
    loader.addClass("d-block");

    offCanvas_carrito = $("#offcanvasRight");
    offCanvas_carrito.offcanvas('toggle');

    $.ajax({
        url: url
    })
    .done(function(respuesta){

        if (respuesta != "Error"){
            /*setTimeout(()=>{
                loader.removeClass("d-block");
                loader.addClass("d-none");
                // Pintar respuesta en offCanvas
                contenido.html(respuesta);
            }, 3000);*/

            loader.removeClass("d-block");
            loader.addClass("d-none");
            // Pintar respuesta en offCanvas
            contenido.html(respuesta);

        }
        else{
            location.href="/productos";
        }
    })
    .fail(function(respuesta){
        location.href="/productos";
    });
}
function removeone(url){
    contenido = $("#respuesta_carrito")
    items_carrito = $("#items_carrito")
    loader = $("#loader")

    loader.removeClass("d-none");
    loader.addClass("d-block");

    $.ajax({
        url: url
    })
    .done(function(respuesta){

        if (respuesta != "Error"){

            loader.removeClass("d-block");
            loader.addClass("d-none");
            // Pintar respuesta en offCanvas
            contenido.html(respuesta);

            //Buscar items en html resultante
            let position_ini = respuesta.search(" ");
            let position_final = respuesta.search("</h1>");
            let result = respuesta.substring(position_ini+2, position_final-1);
            items_carrito.html(result);
        }
        else{
            location.href="/productos";
        }
    })
    .fail(function(respuesta){
        location.href="/productos";
    });
}

function updateAmountCar(url, id){
    contenido = $("#respuesta_carrito")
    loader = $("#loader")
    cantidad = $("#cantidad_carrito_"+id)

    loader.removeClass("d-none");
    loader.addClass("d-block");

    $.ajax({
        url: url,
        type: "GET",
        data: {"cantidad": cantidad.val()}
    })
    .done(function(respuesta){

        if (respuesta != "Error"){

            loader.removeClass("d-block");
            loader.addClass("d-none");
            // Pintar respuesta en offCanvas
            contenido.html(respuesta);
        }
        else{
            location.href="/productos";
        }
    })
    .fail(function(respuesta){
        location.href="/productos";
    });
}


function stars() {

    servicio = document.querySelector(".NombreC")
    cantidad_estrellas = document.querySelectorAll('input[name="grupo_e"]')
    console.log(cantidad_estrellas)
    cantidad = document.querySelector("#cantidad")
    for (var i = 0; i < cantidad_estrellas.length; i++) {
        console.log(cantidad_estrellas[i].value)
        if (cantidad_estrellas[i].checked) {
            cantidad.value = parseInt(cantidad_estrellas[i].value)
            break
        }
    }

}

function deleteOne(id){
    
    fetch(`/deleteService/${id}`, {
      method: 'DELETE',
    })
    .then(
      alert('Eliminado correctamente')
    )
    location.href = '/servicios'
    
}
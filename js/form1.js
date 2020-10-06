document.querySelector('#submit').addEventListener('click',function(){

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let mensaje = document.querySelector('#mensaje').value;



    let url = "https://api.whatsapp.com/send?phone=529626217118&text=*_CONTACTO_WEBSITE_ELINGEJUANMX*%0A_ *Nombre: " + name +  "%0A*email: *%0A" + email + "%0A*Mensaje: *%0A" + mensaje ;
    window.open(url);

});
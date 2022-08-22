window.addEventListener('load', () => {
    let $titulo = document.querySelector('.moviesAddTitulo');
    let $formulario = document.querySelector('#formulario');
    let $article = document.querySelector('.mostrarFormulario');
    let $title = document.querySelector('#title');
    let $title_error = document.querySelector('#title_error');
    let $rating = document.querySelector('#rating');
    let $rating_error = document.querySelector('#rating_error');
    let $awards = document.querySelector('#awards');
    let $awards_error = document.querySelector('#awards_error');
    let $release_date = document.querySelector('#release_date');
    let $release_date_error = document.querySelector('#release_date_error');
    let $length = document.querySelector('#length'); 
    let $length_error = document.querySelector('#length_error'); 
    let $genre_id = document.querySelector('#genre_id');
    let $genre_id_error = document.querySelector('#genre_id_error');
    let $agregarPelicula = document.querySelector('#agregarPelicula');
    let $form = document.querySelector('.form');

    /* Estilos generales */
    $titulo.innerHTML = 'AGREGAR PELÍCULA';
    $titulo.classList.add('titulo');
    $article.classList.add('fondoTransparente');
    $formulario.classList.add('fondoCRUD');

    $title.addEventListener('blur', () => {
        switch(true){
        case !$title.value.trim():
            $title_error.innerHTML = "Requerido"; 
            $title_error.classList.add('is-invalid'); 
            break;
        default:
            $title_error.innerHTML = '';
    }})

    $rating.addEventListener('blur', () => {
        switch(true){
        case !$rating.value.trim():
            $rating_error.innerHTML = "Requerido"; 
            $rating_error.classList.add('is-invalid');; 
            break;
        default:
            $rating_error.innerHTML = '';
    }})
    $awards.addEventListener('blur', () => {
        switch(true){
        case !$awards.value.trim():
            $awards_error.innerHTML = "Requerido"; 
            $awards_error.classList.add('is-invalid');; 
            break;
        default:
            $awards_error.innerHTML = '';
    }})
    $release_date.addEventListener('blur', () => {
        switch(true){
        case !$release_date.value.trim():
            $release_date_error.innerHTML = "Requerido"; 
            $release_date_error.classList.add('is-invalid');; 
            break;
        default:
            $release_date_error.innerHTML = '';
    }})
    $length.addEventListener('blur', () => {
        switch(true){
        case !$length.value.trim():
            $length_error.innerHTML = "Requerido";  
            $length_error.classList.add('is-invalid');;  
            break;
        default:
            $length_error.innerHTML = '';
    }})
    $genre_id.addEventListener('blur', () => {
        switch(true){
        case !$genre_id.value.trim():
            $genre_id_error.innerHTML = "Requerido"; 
            $genre_id_error.classList.add('is-invalid');; 
            break;
        default:
            $genre_id_error.innerHTML = '';
    }})

    $form.addEventListener('submit', (e) => {
        e.preventDefault()
        let errores = {}
        if($title.value.length < 1){
            errores.name = "campo requerido"
        }

        if(Object.keys(errores).length >= 1){
            $title_error.innerText = (errores.name) ? errores.name : '';
            } else {
            $form.submit();
            }
           

    })

    


})
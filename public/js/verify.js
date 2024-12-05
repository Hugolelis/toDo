document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    let flag = true

    if(!title || !description ) {
        flag = false
        console.log('entrei')

        const swal = Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Preencha todos os campos!",
        });

        return swal
    }   

    if(flag === true) {
        return document.querySelector('#form').submit();
    }
})
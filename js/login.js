document.getElementById('login-button').addEventListener('click', function() {

    const userEmail = document.getElementById('login-email') ;
    const emailIs = userEmail.value ;

    const userPass = document.getElementById('login-password') ;
    const passIs = userPass.value ;

    if ( emailIs === 'hello@bank.com' && passIs === 'mybank') {
        window.location.href = 'bank.html' ;
    }
    else {
        alart ('You FOOL forgot the right informations!!!!!!!!!!')
    }
    
})


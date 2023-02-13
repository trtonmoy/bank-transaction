document.getElementById('withdraw-button').addEventListener('click', function() {

    const newWithdraw = getInputValueById('withdraw-input') ;

    if( isNaN(newWithdraw)) {
        return alert('Please Provide a Numeric Value !!!!!!!!')
    }

    const lastWithdraw = getTextValue('total-withdraw') ;

    const updatedWithdraw = newWithdraw + lastWithdraw ;

    const lastBalance = getTextValue('total-balance') ;

    if ( newWithdraw > lastBalance) {
        alert('You have not sufficient Balance!!!!!!!!')
        return ;
    }

    const newBalance = lastBalance - newWithdraw ;

    setUpdatedValue ('total-withdraw', updatedWithdraw) ;

    setUpdatedValue('total-balance', newBalance) ;
})
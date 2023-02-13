document.getElementById('deposit-button').addEventListener('click', function () {
    const newDeposit = getInputValueById('deposit-input') ;

    if( isNaN(newDeposit)) {
        return alert('Please Provide a Numeric Value !!!!!!!!')
    }

    const lastDeposit = getTextValue('total-deposit') ;

    const updatedDeposit = newDeposit + lastDeposit ;

    setUpdatedValue('total-deposit', updatedDeposit) ;

    const lastBalance = getTextValue('total-balance') ;

    const newBalance = newDeposit + lastBalance ;

    setUpdatedValue ('total-balance', newBalance) ;
})
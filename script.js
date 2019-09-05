const form = document.querySelector('form')

function totalBorrowedCalculator(borrowed) {
    if (borrowed < 6400) {
        return borrowed
    } else if (borrowed >= 6400 && borrowed < 7200) {
        return borrowed + 500
    } else {
        return borrowed + 1000
    }
}

function paybackTimeCalculator(monthlyPaymentPercentage, salary, borrowed) {
    let percentageAsDecimal = monthlyPaymentPercentage / 100
    let monthlyPayment = percentageAsDecimal * salary
    let totalBorrowed = totalBorrowedCalculator(borrowed)
    return totalBorrowed / monthlyPayment
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    document.getElementById('message-target').innerHTML = ''
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    if(amountToBorrow <= 8000 && amountToBorrow > 0) {
        document.getElementById('admin-fee-target').innerHTML = '<p>£' + totalBorrowedCalculator(Number(amountToBorrow)) * 0.05.toFixed(2) + '</p>'
        document.getElementById('total-borrowed-target').innerHTML = totalBorrowedCalculator(Number(amountToBorrow))
        document.getElementById('payment-time-target').innerHTML = paybackTimeCalculator(Number(paymentPercentage), Number(currentSalary), Number(amountToBorrow))
    }
    else{
        document.getElementById('message-target').innerHTML = '<div class="alert alert-danger">Error! Please try again.</div>'
    }
})

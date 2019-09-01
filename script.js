const form = document.querySelector('form')

function adminFeeCalculator(borrowed) {
    return borrowed * 0.05
}

function totalBorrowedCalculator(borrowed) {
    if (borrowed < 6400) {
        return borrowed
    } else if (borrowed >= 6400 && borrowed < 7200) {
        return borrowed + 500
    } else {
        return borrowed + 1000
    }
}

function paybackTimeCalculator(monthlyPaymentPercentage) {
    let percentageAsDecimal = monthlyPaymentPercentage / 100
    let months = 0
    let ammountPaid = 0
    while (ammountPaid < 1) {
        ammountPaid = ammountPaid + percentageAsDecimal
        months++
    }
    return months
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    document.getElementById('admin-fee-target').innerText = adminFeeCalculator(Number(amountToBorrow))
    document.getElementById('total-borrowed-target').innerText = totalBorrowedCalculator(Number(amountToBorrow))
    document.getElementById('payment-time-target').innerText = paybackTimeCalculator(Number(paymentPercentage))
})

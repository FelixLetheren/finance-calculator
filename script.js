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
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    document.getElementById('admin-fee-target').innerText = totalBorrowedCalculator(Number(amountToBorrow)) * 0.05
    document.getElementById('total-borrowed-target').innerText = totalBorrowedCalculator(Number(amountToBorrow))
    document.getElementById('payment-time-target').innerText = paybackTimeCalculator(Number(paymentPercentage), Number(currentSalary), Number(amountToBorrow))
})

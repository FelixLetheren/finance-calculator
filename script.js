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

form.addEventListener("submit", (event) => {
    event.preventDefault()
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    document.getElementById('admin-fee-target').innerText = adminFeeCalculator(Number(amountToBorrow))
    document.getElementById('total-borrowed-target').innerText = totalBorrowedCalculator(Number(amountToBorrow))
})

const form = document.querySelector('form')
function adminFeeCalculator(borrowed) {
    let result = borrowed * 0.05
    return result
}


form.addEventListener("submit", (event) => {
    event.preventDefault()
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    document.getElementById('admin-fee-target').innerText = adminFeeCalculator(amountToBorrow)
})

const form = document.querySelector('form')
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let amountToBorrow = form.amountToBorrow.value
    let currentSalary = form.currentSalary.value
    let paymentPercentage = form.repaymentPercentage.value
    console.log(amountToBorrow)
    console.log(currentSalary)
    console.log(paymentPercentage)
})

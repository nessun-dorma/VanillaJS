let quoteElem
const inputElem = document.querySelector(".quote-input")

const renderEl = async () => {

    const timerEl = document.querySelector(".timer")

    const getQuote = async () => {
        const quotePromise = await fetch("https://api.quotable.io/random");
        const jsonPromise = await quotePromise.json()
        return await jsonPromise
    }

    let timeText;
    const startTimer = () => {
        timerEl.innerText = 0
        timeText = new Date()
        setInterval(() => {
            timerEl.innerText = getTime()
        }, 1000)

    }

    function getTime(){
        return Math.floor(((new Date() - timeText) / 1000))
    }

    let quoteText = await getQuote()
    quoteElem = document.querySelector(".quote-display")

    quoteElem.innerText = ""
    quoteText.content.split("").forEach((indexVal) => {
        const tempSpan = document.createElement("span");
        tempSpan.textContent = indexVal;
        quoteElem.appendChild(tempSpan)
    });
    inputElem.value = ""
    startTimer()
}

renderEl()

inputElem.addEventListener("input", async (eventVal) => {
    const quoteChars = quoteElem.querySelectorAll("span")
    const enteredChars = inputElem.value.split("")
    let quoteComp = true
    quoteChars.forEach((quoteElement, indexVal) => {
        if (quoteElement.innerText === enteredChars[indexVal]) {
            quoteElement.classList.add("correct")
            quoteElement.classList.remove("incorrect")
        } else if (enteredChars[indexVal] === undefined) {
            quoteElement.classList.remove("correct")
            quoteElement.classList.remove("incorrect")
            quoteComp = false
        } else {
            quoteElement.classList.remove("correct")
            quoteElement.classList.add("incorrect")
            quoteComp = false
        }
    })
    if (quoteComp) await renderEl()
})

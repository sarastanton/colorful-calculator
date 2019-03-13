const row1 = document.getElementsByClass("row-1")
const row2 = document.getElementsByClass("row-2")
const row3 = document.getElementsByClass("row-3")
const row4 = document.getElementsByClass("row-4")
const row5 = document.getElementsByClass("row-5")

const radio = document.getElementsByName("color-theme")

radio.forEach(
  element => element.addEventListener('click', replaceClassNames(event))
)


replaceClassNames(event) {
  switch() {
    case event.target.value === "":
    row1.className = ""
  }
}

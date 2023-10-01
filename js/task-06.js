const textRef = document.querySelector('#text');
const textOutputRef = document.querySelector('#text-output')

const counterLetters = (ref) => {
  if (!ref) return
  const newStr = ref.textContent.trim().split('').reduce((acc, item) => {
    if (item in acc) {
      acc[item] += 1
    }
    else {
      acc[item] = 1
    }
    return acc
  }, {})

  return newStr
}

const str = counterLetters(textRef)

const markupQiontityLetters = (ref, data) => {
  if (!ref || !data) return
  const letters = []
  for (const item in data) {
    const letter = document.createElement('li')
    letter.textContent = `${item} : ${data[item]}`
    letters.push(letter)
  }
  ref.append(...letters)
}

markupQiontityLetters(textOutputRef, str)
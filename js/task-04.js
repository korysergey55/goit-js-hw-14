const valueRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementtRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0

incrementtRef.addEventListener('click', () => {
  counterValue += 1
  valueRef.textContent = counterValue
})
decrementRef.addEventListener('click', () => {
  counterValue -= 1
  valueRef.textContent = counterValue
})



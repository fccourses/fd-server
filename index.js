const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('data')
  }, 2000)
})

async function handlePromise (promise) {
  return promise.then(data => {}).then()
}

/* async function loadUsers () {
  return fetch('https://randomuser.me/api/')
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
} */

async function loadUsersA () {
  try {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

async function initializeApp () {
  const p1 = loadUsersA()

  const users = await p1

  const bool = false
  const num = 1

  return users
}
const load = async () => {}

/* 
  Написать асинхронную функцию, которая вернет все 
  js примитивы в массиве

  Создать новый промис, через функцию Promise.
  Разрезолвить промис через 1с.

  Обработать этот промис с помощью await внутри async функции
*/

const solution = async () => {
  const p1 = new Promise(res => setTimeout(() => res('text'), 1000))

  const text = await p1
  console.log(text)

  const array = [1, 'str', true, null, undefined, 0n, Symbol()]
  return array
}

const changeH1Text = function () {
    document.querySelector('h1').innerText = 'Changed!'
  }

  const changeBackgroundColor = function () {
    document.querySelector('body').style.backgroundColor = 'red'
  }

  const changeFakeAddress = function () {
    document.querySelector('#address').innerText = 'New address! :) '
    
  }

  const addClassToLinks = function () {
    let aTags = document.querySelectorAll('a') //array-like => NodeList
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].classList.add('newLink')
    }
    
  }

  const toggleImagesClass = function () {
    let images = document.querySelectorAll('img')
    for (let i = 0; i < images.length; i++) {
      const singleImg = images[i]
      singleImg.classList.toggle('hidden')
    }
    
  }
  const getRandomColor = function () {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    return 'rgb(' + red + ', ' + green + ', ' + blue + ')'
  }

  const setRandomColor = function () {
    const randomColor = getRandomColor()
    let prices = document.querySelectorAll('.price')
    for (let i = 0; i < prices.length; i++) {
      let singlePrince = prices[i]
      singlePrince.style.color = red
    }
}

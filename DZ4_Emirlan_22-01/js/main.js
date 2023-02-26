const btn = document.querySelector('button')
const wrap = document.querySelector('.block')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open('GET', "data.json")
    request.setRequestHeader("Content-Type", "applicition.json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach(i => {
            const block = document.createElement('div')
            block.innerHTML = `
            <div class="box">
                <img class="box_img" src="${i.photo}" alt="photo">
                <p>${i.title}</p>
                <span>${i.price}</span>
                <p>${i.phone}</p>
            </div>
            `
            wrap.append(block)
        })
    })
})

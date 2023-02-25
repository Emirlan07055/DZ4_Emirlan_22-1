const btn = document.querySelector('button')
const wrap = document.querySelector('.block')

btn.addEventListener('click', () => {
    const rgs = new XMLHttpRequest()
    rgs.open('GET', "data.json")
    rgs.setRequestHeader("Content-Type", "applicition.json")
    rgs.send()
    rgs.addEventListener('load', () => {
        const data = JSON.parse(rgs.response)
        data.forEach(i => {
            const block = document.createElement('div')
            block.innerHTML = `
            <div class="box">
                <img class="box_img" src="${i.photo}" alt="photo">
                <p>${i.title}</p>
                <span>${i.photo}</span>
            </div>
            `
            wrap.append(block)
        })
    })
})
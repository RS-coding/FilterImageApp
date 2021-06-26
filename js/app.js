const fileUpload = document.querySelector('#file')
const inputs = document.querySelectorAll('.control input')


const loadFile = function(e){
    const img = document.querySelector('#output')
    img.src = URL.createObjectURL(e.target.files[0])
}

const updateStyle = function(){
    const suffix = this.dataset.sizing || ' '

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

fileUpload.addEventListener('change', loadFile)
inputs.forEach( input => input.addEventListener('change',updateStyle))
inputs.forEach( input => input.addEventListener('input',updateStyle))
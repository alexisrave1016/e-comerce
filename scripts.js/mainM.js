const items = document.getElementById('items')
const templateCard = document.getElementById('template_card').content
const fragment = document.createDocumentFragment()



document.addEventListener('DOMContentLoaded', ()=> {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
       pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}


const pintarCards = data => {
 
    const itemsGen = data.filter(filtrarPorGen);

itemsGen.forEach(producto => {
   templateCard.querySelector('h5').textContent= producto.name
   templateCard.getElementById('precio').textContent= producto.precio
   templateCard.getElementById('talla').textContent= producto.talla
   templateCard.getElementById('caracteristicas').textContent= producto.caractristicas
   templateCard.getElementById('img').setAttribute("src", producto.img)
   


   const clone = templateCard.cloneNode(true)
   fragment.appendChild(clone)
});
items.appendChild(fragment)
}



function filtrarPorGen(obj) {
    if (obj.genero  === 'femenino') {
      return true;
    } else {
      //entradasInvalidas++;
      return false;
    }
  }

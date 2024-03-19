// https://fakestoreapi.com/products?limit=20 ==> [API]

let el_card = document.querySelector(".card_all");
let el_select = document.querySelector("select");

async function api() {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${+el_select.value}`, {
        method: 'GET',
    })
    const finalRes = (await res.json());
    let el_all = ``;
    finalRes.forEach(data => {
        el_all += 
        `
        <div class="card">
            <div class="data">
                <div class="img">
                <img src="${data.image}" alt="">
                </div>
                <p class="description">${data.description.substring(0,35)}..</p>
                <p class="price">${data.price}$</p>
            </div>
        </div>
        `
        el_card.innerHTML = el_all;
    });
}
el_select.addEventListener("change", ()=> {
    api()
})
window.onload = api();
// ============================================================================================
let list = document.querySelector(".list");
let list_2 = document.querySelector(".list_2");

list.addEventListener("click", ()=> {
    el_card.classList.add("active");
})
list_2.addEventListener("click", ()=> {
    el_card.classList.remove("active");
})





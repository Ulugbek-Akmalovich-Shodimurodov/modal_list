let elGallery = document.querySelector('.tovar_list')
let elBtn = document.querySelector('.tovar_qushish')
let modalBtn = document.querySelector('button')

function tovar_item() {
    let mahsulot = prompt("bozor ro'yxatini kiriting:");
    if (typeof mahsulot == 'string') {
        let newChild = document.createElement('li')
        newChild.innerHTML = `<div class="users_title"><input class="tovar" type="checkbox">` + `<span class="users">` + mahsulot + `</span></div>`;

        elGallery.appendChild(newChild);

    }

}
let elMainTitle = document.querySelector('.modal_window')
elBtn.addEventListener('click', tovar_item)

modalBtn.addEventListener('click', () => {
    elMainTitle.classList.toggle('modal_win_click');
});
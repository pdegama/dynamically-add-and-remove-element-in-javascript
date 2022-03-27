const addItemText = (text) => {
    return `<div class="row">
        <div class="col-10">
            <h2 class="text-light">${text}</h2>
        </div>
        <div class="col-2">
            <input type="submit" class="removeItem btn btn-danger w-100" value="Remove">
        </div>
    </div>`
}

const dCom = document.getElementById("dcom")

document.getElementById("addItem").onclick = () => {
    dCom.innerHTML += addItemText(document.getElementById("itemText").value)
    setState()
}

const setState = () => {
    let removeBtn = document.getElementsByClassName("removeItem")
    for (const btn of removeBtn) {
        btn.onclick = (e) => {
            e.target.parentElement.parentElement.remove()
        }
    }
    
}

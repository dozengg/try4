const newunif_btn = document.querySelector("#createUnif");
const modal = document.querySelector("#clothesModal");    
const backdrop = document.querySelector(".backdrop");   

newunif_btn.addEventListener('click', ()=>{
    modal.style.display = 'block';
    backdrop.style.display = 'block';
});


let id, name, stock;
const currentstock = document.querySelector("#currentstock");
const unif_name = document.querySelector("#unif_name");

function editModal() {

    document.getElementById("stockin_modal").style.display = 'block'; 
    document.getElementById("backdrop").style.display = 'block';
}
function editstockin(){
    document.getElementById("modal_stockin").style.display = 'block'; 
    document.getElementById("backdrop").style.display = 'block';
}
function editLogs(){
    document.getElementById("modal_logs").style.display = 'block'; 
    document.getElementById("backdrop").style.display = 'block';
}

document.querySelector('.stockin_container').style.display = 'none';


function removemodal_unif(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';

}

function removemodal_stock(){
    document.getElementById("stockModal").style.display = 'none'; 
    document.getElementById("backdrop").style.display = 'none';
}


function closeModal(id) {
    const el = document.getElementById(id);
    const backdrop = document.querySelector('.backdrop');
    if (el) el.style.display = 'none';
    if (backdrop) backdrop.style.display = 'none';
}





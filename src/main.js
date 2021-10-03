// const g_id = (id) => document.getElementById(id);

const click_area = document.getElementById("clicking-area");
const shop = document.getElementById("shop");
const money_txt = document.getElementById("money");
const upgr_btn = document.getElementById("upgr-btn")

let money = 0;
let perclick = 1;
let upgr_cost = 10;

upgr_btn.onclick = ()=>{
    if (money >= upgr_cost) {
        money -= upgr_cost;
        perclick += 1;
        upgr_cost = Math.round(upgr_cost * 1.154);
        //money_+Text.innerText = `Money: ${money}`;
        update();
    }
}
function update() {
    money_txt.innerText = `Money: ${money}`;
    upgr_btn.innerHTML = `Per click + 1<br>Cost: ${upgr_cost}`;
}

click_area.onclick = ()=>{
    money += perclick;
    update();
}
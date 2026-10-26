// EDIT NOMOR WHATSAPP DI BAWAH: gunakan kode negara, tanpa +, spasi, atau tanda hubung.
// Contoh Indonesia: 6281234567890
const WHATSAPP_NUMBER = "6289607263535";

const products = [
  {id:"basic", name:"Hoodie Basic", price:149000, description:"Minimalis untuk sehari-hari", tag:"BEST SELLER", image:"assets/hoodie-black.svg"},
  {id:"essential", name:"Hoodie Essential", price:169000, description:"Nyaman dengan tampilan clean", tag:"ESSENTIAL", image:"assets/hoodie-cream.svg"},
  {id:"oversize", name:"Hoodie Oversize", price:189000, description:"Potongan loose dan kekinian", tag:"TRENDING", image:"assets/hoodie-olive.svg"}
];
const rupiah = n => new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("product-grid");
const select = document.getElementById("product");

products.forEach((p,i)=>{
  const card = document.createElement("article");
  card.className="product-card";
  card.innerHTML=`<div class="product-image"><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><span class="tag">${p.tag}</span><div class="product-top" style="margin-top:12px"><div><h3>${p.name}</h3><p>${p.description}</p></div><span class="price">${rupiah(p.price)}</span></div><a class="choose-btn" href="#pesanan" data-product="${p.id}">Pilih Produk ↗</a></div>`;
  grid.appendChild(card);
  const option=document.createElement("option");
  option.value=p.id; option.textContent=`${p.name} — ${rupiah(p.price)}`;
  select.appendChild(option);
});
function selectedProduct(){return products.find(p=>p.id===select.value)||products[0]}
function updateTotal(){const qty=Math.max(1,Number(document.getElementById("quantity").value)||1);document.getElementById("total-price").textContent=rupiah(selectedProduct().price*qty)}
grid.addEventListener("click",e=>{const link=e.target.closest("[data-product]");if(link){select.value=link.dataset.product;updateTotal()}});
select.addEventListener("change",updateTotal);
document.getElementById("quantity").addEventListener("input",updateTotal);
document.getElementById("year").textContent=new Date().getFullYear();
updateTotal();

document.getElementById("order-form").addEventListener("submit",e=>{
  e.preventDefault();
  if(WHATSAPP_NUMBER==="6281234567890"){
    const proceed=confirm("Pastikan nomor WhatsApp NIX sudah benar. Tetap buka WhatsApp untuk melihat format pesan, atau batalkan dan edit nomor di script.js?");
    if(!proceed)return;
  }
  const name=document.getElementById("customer-name").value.trim();
  const p=selectedProduct();
  const size=document.getElementById("size").value;
  const qty=Math.max(1,Number(document.getElementById("quantity").value)||1);
  const notes=document.getElementById("address").value.trim()||"-";
  const total=p.price*qty;
  const message=`Halo NIX, saya ingin memesan hoodie.%0A%0ANama: ${encodeURIComponent(name)}%0AProduk: ${encodeURIComponent(p.name)}%0AUkuran: ${encodeURIComponent(size)}%0AJumlah: ${qty}%0AHarga satuan: ${encodeURIComponent(rupiah(p.price))}%0AEstimasi total: ${encodeURIComponent(rupiah(total))}%0AAlamat/catatan: ${encodeURIComponent(notes)}%0A%0AMohon info ketersediaan dan ongkir. Terima kasih.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank","noopener");
});

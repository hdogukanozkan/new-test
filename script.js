const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");
const xx = document.querySelector(".pro-container");

bar.addEventListener("click", () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});

/*  ÜRÜN LİSTESİ  */

const products = [
  {
    Urun_Kodu: 001,
    Urun_Markasi: "The Witcher",
    Urun_Ismi: "Yennefer",
    Urun_KapakFotografi:
      "https://images.unsplash.com/photo-1661529260837-f4bb7164fd39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    Urun_Fiyati: 70,
  },
  {
    Urun_Kodu: 002,
    Urun_Markasi: "The Witcher",
    Urun_Ismi: "Triss Merigold",
    Urun_KapakFotografi:
      "https://i.pinimg.com/736x/5b/7f/f9/5b7ff9e720adddd842c2c17914c76fc1.jpg",
    Urun_Fiyati: 100,
  },
  {
    Urun_Kodu: 003,
    Urun_Markasi: "The Witcher",
    Urun_Ismi: "Geralt",
    Urun_KapakFotografi:
      "https://i.pinimg.com/originals/16/80/71/1680717637ed36b3e82472a9748d1055.jpg",
    Urun_Fiyati: 120,
  },
];

/*  SHOP.HTML   */

products.forEach((element) => {
  yarat(element);
});

function yarat(element) {
  const div = document.createElement("div");
  div.classList.add("pro");
  div.innerHTML = `
          <div class="cerceve">
            <img src="${element.Urun_KapakFotografi}" alt="" />
          </div>
          <div class="des">
            <span>${element.Urun_Markasi}</span>
            <h5>${element.Urun_Ismi}</h5>
            <div class="star">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>$${element.Urun_Fiyati}</h4>
          </div>
          <a href="#">
            <i class="fas fa-shopping-cart cardw"></i>
          </a>
  `;
  xx.appendChild(div);
}

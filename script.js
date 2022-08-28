const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");
const xx = document.querySelector(".pro-container");
const prodetails = document.querySelector("#prodetails");

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

function yarat(element) {
  const div = document.createElement("div");
  div.classList.add("pro");
  div.innerHTML = `
            <div class="cerceve">
          <a href="sproduct.html">

              <img src="${element.Urun_KapakFotografi}" alt="" />
          </a>

            </div>
          <div class="des">
            <small class="btsn">${element.Urun_Kodu}</small>
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

products.forEach((element) => {
  yarat(element);
});

const pro = document.querySelectorAll(".pro");

pro.forEach((element) => {
  element.addEventListener("click", () => {
    detaysayfasiolustur(element);
  });
});

/*  ÜRÜN SAYFASI  */

function detaysayfasiolustur() {
  prodetails.innerHTML = `
  <div class="single-pro-image">
          <img src="img/urunler/urun1.jpg" width="100%" id="MainImg" alt="" />
          <div class="small-img-group">
            <div class="small-img-col">
              <img
                src="img/urunler/urun1.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="img/urunler/urun2.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="img/urunler/urun3.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="img/urunler/urun4.jpg"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="single-pro-details">
          <h6>Home / T-Shirt</h6>
          <h4>Men's Fashion T Shirt</h4>
          <h3>$139.00</h3>
          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
            <option>Medium</option>
          </select>
          <input type="number" name="" value="1" id="" />
          <button>Add To Cart</button>
          <br />
          <small>Code: <span>001</span></small>
          <h4 class="detailss">Product Details</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            nesciunt consequuntur inventore officia facere? Possimus molestiae
            atque eveniet debitis est veritatis sapiente tenetur et voluptatibus,
            vero natus quam reprehenderit expedita nesciunt odit consequuntur
            totam harum libero commodi a consequatur adipisci cumque. Quod quae,
            ullam illo, sed neque porro aut ipsa eos nemo harum a nobis expedita.
            Sint corrupti placeat, assumenda excepturi deleniti minima illum,
            incidunt veritatis qui itaque est perspiciatis iusto quas ea modi
            fugiat consequatur tempore maxime ipsam minus iure perferendis
            officiis quibusdam. Iure sapiente quidem accusamus voluptatem esse ex
            vero? Exercitationem eligendi non porro eveniet ex, deleniti pariatur.
          </p>
        </div>
  `;
}

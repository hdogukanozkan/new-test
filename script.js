const bar = document.querySelector("#bar");
const navbar = document.querySelector("#navbar");
const close = document.querySelector("#close");
const xx = document.querySelector(".pro-container");
const prodetails = document.querySelector("#prodetails");
var deger;
let deger2;
let deger3;
let X;

bar.addEventListener("click", () => {
  navbar.classList.add("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
});

/*  ÜRÜN LİSTESİ  */
// Tür = giysi / ayakkabi /
const products = [
  {
    Urun_Kodu: 001,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "RELAX Kadın T-Shirt Siyah",
    Urun_Fiyati: 10,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-siyah-10850-tisort-200873-10-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-siyah-10850-tisort-200869-10-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-siyah-10850-tisort-200870-10-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-siyah-10850-tisort-200872-10-B.jpg",

  },
  {
    Urun_Kodu: 002,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "POLSY Kadın T-Shirt Kırmızı",
    Urun_Fiyati: 9.50,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/polsy-kadin-t-shirt-kirmizi-outlet-187333-51-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-kirmizi-outlet-187329-51-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-kirmizi-outlet-187330-51-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-kirmizi-outlet-187334-51-B.jpg",

  },
  {
    Urun_Kodu: 003,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"ayakkabi",
    Urun_Ismi: "FALK Sneaker Kadın Ayakkabı Bej",
    Urun_Fiyati: 55,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-falk-sneaker-kadin-ayakkabi-bej-sneaker-207705-11-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-falk-sneaker-kadin-ayakkabi-bej-sneaker-207704-11-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-falk-sneaker-kadin-ayakkabi-bej-sneaker-212754-11-B.png",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-falk-sneaker-kadin-ayakkabi-bej-sneaker-207707-11-B.jpg",

  },

  {
    Urun_Kodu: 004,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "BARRET Erkek T-Shirt Antrasit",
    Urun_Fiyati: 13,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-barret-erkek-t-shirt-antrasit-tisort-201385-10-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-barret-erkek-t-shirt-antrasit-tisort-201386-10-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-barret-erkek-t-shirt-antrasit-tisort-201389-10-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-barret-erkek-t-shirt-antrasit-tisort-201387-10-B.jpg",

  },

  {
    Urun_Kodu: 005,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "RELAX Kadın T-Shirt Fuşya",
    Urun_Fiyati: 11,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-fusya-tisort-188821-68-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-fusya-tisort-188822-68-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-fusya-tisort-188824-68-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-relax-kadin-t-shirt-fusya-tisort-188823-68-B.jpg",

  },
  {
    Urun_Kodu: 006,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "SANDER Erkek T-Shirt Hardal",
    Urun_Fiyati: 15,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-sander-erkek-t-shirt-hardal-6789-tisort-189033-67-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-sander-erkek-t-shirt-hardal-6789-tisort-189034-67-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-sander-erkek-t-shirt-hardal-6789-tisort-189035-67-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-sander-erkek-t-shirt-hardal-6789-tisort-189036-67-B.jpg",

  },

  {
    Urun_Kodu: 007,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"ayakkabi",
    Urun_Ismi: "FLAG Sneaker Erkek Ayakkabı Gri",
    Urun_Fiyati: 60,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-flag-sneaker-erkek-ayakkabi-gri-sneaker-215152-11-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-flag-sneaker-erkek-ayakkabi-gri-sneaker-207216-11-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-flag-sneaker-erkek-ayakkabi-gri-sneaker-207217-11-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-flag-sneaker-erkek-ayakkabi-gri-sneaker-207218-11-B.jpg",

  },

  {
    Urun_Kodu: 008,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: " POLSY Kadın T-Shirt Beyaz",
    Urun_Fiyati: 10,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/polsy-kadin-t-shirt-beyaz-outlet-187317-51-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-beyaz-outlet-187318-51-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-beyaz-outlet-187319-51-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/polsy-kadin-t-shirt-beyaz-outlet-187320-51-B.jpg",

  },
  {
    Urun_Kodu: 009,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: " RIGBY Kadın Tayt Lila",
    Urun_Fiyati: 22.5,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-rigby-kadin-tayt-lila-tayt-206925-11-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-rigby-kadin-tayt-lila-tayt-206926-11-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-rigby-kadin-tayt-lila-tayt-206927-11-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-rigby-kadin-tayt-lila-tayt-206928-11-B.jpg",

  },

  {
    Urun_Kodu: 010,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: " NEOFIT I Kadın Tayt Lacivert",
    Urun_Fiyati: 25,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-neofit-i-kadin-tayt-lacivert-tayt-187606-82-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-neofit-i-kadin-tayt-lacivert-tayt-187604-82-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-neofit-i-kadin-tayt-lacivert-tayt-187605-82-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-neofit-i-kadin-tayt-lacivert-tayt-187603-82-B.jpg",

  },

  {
    Urun_Kodu: 011,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "KLAN Jogger Kadın Eşofman Altı Bej",
    Urun_Fiyati: 16,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-klan-kadin-esofman-alti-bej-esofman-alti-215547-91-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-klan-kadin-esofman-alti-bej-esofman-alti-215548-91-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-klan-kadin-esofman-alti-bej-esofman-alti-215549-91-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-klan-kadin-esofman-alti-bej-esofman-alti-215550-91-B.jpg",

  },

  {
    Urun_Kodu: 012,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "DRAKE Kadın Eşofman Altı Siyah",
    Urun_Fiyati: 12,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-drake-kadin-esofman-alti-siyah-esofman-alti-214204-88-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-drake-kadin-esofman-alti-siyah-esofman-alti-214201-88-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-drake-kadin-esofman-alti-siyah-esofman-alti-214202-88-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-drake-kadin-esofman-alti-siyah-esofman-alti-214203-88-B.jpg",

  },

  {
    Urun_Kodu: 013,
    Urun_Markasi: "Slazenger",
    Urun_Turu:"giysi",
    Urun_Ismi: "GROZDA I Kadın Şort Kırık Beyaz",
    Urun_Fiyati: 15,
    Urun_KapakFotografi:
      "https://img.slazenger.com.tr/slazenger-grozda-i-kadin-sort-kirik-beyaz-sort-202012-10-B.jpg",
    Urun_Model2:"https://img.slazenger.com.tr/slazenger-grozda-i-kadin-sort-kirik-beyaz-sort-202010-10-B.jpg",
    Urun_Model3:"https://img.slazenger.com.tr/slazenger-grozda-i-kadin-sort-kirik-beyaz-sort-202009-10-B.jpg",
    Urun_Model4:"https://img.slazenger.com.tr/slazenger-grozda-i-kadin-sort-kirik-beyaz-sort-202011-10-B.jpg",

  },

  {
    Urun_Kodu: 014,
    Urun_Markasi: "NGSTYLE",
    Urun_Turu:"giysi",
    Urun_Ismi: "Çiçek Desenli Mini Şort Etek",
    Urun_Fiyati: 20,
    Urun_KapakFotografi:
      "https://img-morhipo.mncdn.com/mnresize/484/663/productimages/iii/8683133306311/[img][5][1].jpg?1026",
    Urun_Model2:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/iii/8683133306311/[img][5][2].jpg?1026",
    Urun_Model3:"https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/iii/8683133306311/[img][5][3].jpg?1026",
    Urun_Model4:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/iii/8683133306311/[img][5][4].jpg?1026",

  },
  {
    Urun_Kodu: 015,
    Urun_Markasi: "Koton",
    Urun_Turu:"giysi",
    Urun_Ismi: "Pilili Etek",
    Urun_Fiyati: 22,
    Urun_KapakFotografi:
      "https://img-morhipo.mncdn.com/mnresize/484/663/productimages/i/8682263516102/[img][5][1].jpg?1149",
    Urun_Model2:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/i/8682263516102/[img][5][2].jpg?1149",
    Urun_Model3:"https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/i/8682263516102/[img][5][3].jpg?1149",
    Urun_Model4:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/i/8682263516102/[img][5][4].jpg?1149",

  },
  {
    Urun_Kodu: 016,
    Urun_Markasi: "Vitrin",
    Urun_Turu:"giysi",
    Urun_Ismi: "Yüksek Bel Kumaş Pantolon",
    Urun_Fiyati: 30,
    Urun_KapakFotografi:
      "https://img-morhipo.mncdn.com/mnresize/484/663/productimages/ii/2964134490244/[img][5][2].jpg?1339",
    Urun_Model2:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/ii/2964134490244/[img][5][3].jpg?1339",
    Urun_Model3:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/ii/2964134490244/[img][5][4].jpg?1339",
    Urun_Model4:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/ii/2964134490244/[img][5][1].jpg?1339",

  },

  {
    Urun_Kodu: 017,
    Urun_Markasi: "Elbise Siyah",
    Urun_Turu:"giysi",
    Urun_Ismi: "Madonna Yaka Çizgili Yazlık Mini",
    Urun_Fiyati: 10,
    Urun_KapakFotografi:
      "https://img.tozlu.com/Uploads/UrunResimleri/siyah-kadin-madonna-yaka-cizgili-yazli-6a-45f.jpg",
    Urun_Model2:"https://img.tozlu.com/Uploads/UrunResimleri/siyah-kadin-madonna-yaka-cizgili-yazli-5a2fa9.jpg",
    Urun_Model3:"https://img.tozlu.com/Uploads/UrunResimleri/siyah-kadin-madonna-yaka-cizgili-yazli-e01189.jpg",
    Urun_Model4:"https://img.tozlu.com/Uploads/UrunResimleri/siyah-kadin-madonna-yaka-cizgili-yazli--46b5-.jpg",

  },

  {
    Urun_Kodu: 018,
    Urun_Markasi: "Cubic",
    Urun_Turu:"giysi",
    Urun_Ismi: "Karışık Renkli Rahat Esnek Mini Etek",
    Urun_Fiyati: 35,
    Urun_KapakFotografi:
      "https://img-morhipo.mncdn.com/mnresize/484/663/productimages/i/2710028435767/[img][5][1].jpg?1149",
    Urun_Model2:"https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/i/2710028435767/[img][5][2].jpg?1149",
    Urun_Model3:"https://img-morhipo.mncdn.com/mnresize/1200/1645/productimages/i/2710028435767/[img][5][3].jpg?1149",
    Urun_Model4:"https://img-morhipo.mncdn.com/mnresize/484/663/productimages/i/2710028435767/[img][5][4].jpg?1149",

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

  const pro = document.querySelectorAll(".pro");
  deger  = pro;
}

function runTheDetay(){
  deger.forEach((element) => {
  element.addEventListener("click", () => {
    console.log(element);
    deger2 = element.children[1].children[0].textContent;
    products.forEach((element,idx) =>{
      if(element.Urun_Kodu == deger2){
        console.log(element);
        deger3 = idx;
        localStorage.setItem('keysims1',deger3);
        console.log(deger3);
      }
    })
  });
  });   
}


/*  ÜRÜN SAYFASI  */

function detaysayfasiolustur(element) {

  if(element.Urun_Turu == 'giysi'){
    X=`
    <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
            <option>Medium</option>
          </select>
    `    
  }
  
  else if (element.Urun_Turu == 'ayakkabi'){
  X= `
          <select>
            <option>Select Size</option>
            <option>37</option>
            <option>38</option>
            <option>39</option>
            <option>40</option>
            <option>40.5</option>
            <option>41</option>
            <option>41.5</option>
            <option>42</option>
            <option>43</option>
            <option>44</option>
            <option>45</option>
          </select>
  `
  }
  
  else{
    X=` `
  }

  prodetails.innerHTML = `
  <div class="single-pro-image">
          <img src="${element.Urun_KapakFotografi}" width="100%" id="MainImg" alt="" />
          <div class="small-img-group">
            <div class="small-img-col">
              <img
                src="${element.Urun_KapakFotografi}"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="${element.Urun_Model2}"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="${element.Urun_Model3}"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
            <div class="small-img-col">
              <img
                src="${element.Urun_Model4}"
                width="100%"
                class="small-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="single-pro-details">
          <h6>${element.Urun_Markasi}</h6>
          <h4>${element.Urun_Ismi}</h4>
          <h3>$${element.Urun_Fiyati}</h3>
          ${X}
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

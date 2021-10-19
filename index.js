{
  const articles = [
    {
      id: 1,
      denomination: "Acer Predator Orion 5000",
      marque: "Acer",
      processeur: "Intel core I7-10700K",
      taille: "16 Go",
      SSD: "1 To NVIDIA GeoForce RTX 3080 11 Go",
      price: 3299.95,
      img: "./img/pc-gameur-acer.jpg",
    },
    {
      id: 2,
      denomination: "LDLC pc 10 Zen Perfect",
      marque: "LDLC",
      processeur: "AMD Ryzen 5 5600X 16 Go",
      taille: "16 Go",
      SSD: "240 Go + HDD 2To NVIDIA GeForce RTX 3060 12 Go",
      price: 1759.94,
      img: "./img/pc-gameur-ldlc.jpg",
    },
    {
      id: 3,
      denomination: "ASUS Rog Strix G15",
      marque: "ASUS",
      processeur: "Intel core I5-10300H 16Go",
      taille: "15.6' LED Full HD 144Hz ",
      SSD: "512 Go NVIDIA GeForce GTX 1650 Ti 4Go",
      price: 999.95,
      img: "./img/pc-gameur-asus.jpg",
    },
    {
      id: 4,
      denomination: "Gigabyte Aero 15 OLED XD",
      marque: "Aero OLED",
      processeur: "Intel core I7-11800 32Go",
      taille: "15.6 Oled Ultra HD",
      SSD: "1 To NVIDIA GeForce RTX 3070 8Go",
      price: 2699.95,
      img: "./img/pc-gameur-gigabyte.jpg",
    },
  ];
}

const displayArticle = () => {
  const articleNode = articles.map((article) => {
    return createArticle(article);
  });
  app.append(...articleNode);
};

const app = document.querySelector(".rayon");

const createArticle = (articles) => {
  const div = document.createElement("div");
  div.classList.add("article");

  const a = document.createElement("a");
  a.href = "";

  const img = document.createElement("img");
  img.src = articles.img;
  img.alt = "pc gameur acer";

  const p = document.createElement("p");
  p.classList.add("reference");
  p.innertext = "Acer Predator Orion 5000 (PO5-615s DG.E1YEF.007)";

  const p2 = document.createElement("p");
  p2.innertext = "Intel Core i7-10700K 16 Go SSD 1 To NVIDIA GeForce RTX 3080 11 Go Graveur DVD Wi-Fi AC Windows 10 Famille 64 bits";
    

  const p3 = document.createElement("p");
  p3.classList.add("prix");
  p3.innerHTML = "PRIX:3299.<sup>95</sup>€";





  div.append(a, img, h2, p, p2, p3, div2);
  div2.append(a, img, h2, p, p2, p3, div3);
  div3.append(a, img, h2, p, p2, p3, div4);
  app.appendChild(div);

  return div;
};

displayArticle();

console.log("Loaded this script great");



function newNFTRow(nftItem) {
  let newNode = document.createElement("div");
  newNode.classList.add("collection__content-wrapper");
  newNode.innerHTML = `<div class="collection__image">
    <div class="collection__image-wrapper">
        <img src="${nftItem.logo}" class="image-100" alt="" srcset="">
    </div>
    <p class="font-weight-medium">${nftItem.name}</p>
    </div>
    <div class="collection__price">
    <p>${nftItem.floorPrice}</p>
    <div class="collection__price-image">
        <img src="images/menu.png" class="image-100" alt="" srcset="">
    </div>
    </div>
    <div class="collection__price">
    <p>${nftItem.netWorth}</p>
    <div class="collection__price-image">
        <img src="images/menu.png" class="image-100" alt="" srcset="">
    </div>
    </div>
    <p>${nftItem.sales7d}</p>
    <div class="collection__content-image-wrapper">
    <img src="images/image-3.png" alt="" srcset="">
    </div>`;
  testing.appendChild(newNode);

  console.log("New node", newNode);

}
let offset = 0;
let previousResponse = [];

if (offset == 0) {
  fetchNFTs(0);
}
console.log("Loaded this script great");

function fetchNFTs(offset) {
  fetch("https://api.hypereveal.xyz/v1/collections?sort=domain_authority&limit=10&offset=" + offset)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.collections);
// document.getElementById("nft-list").innerHTML = "";
const tableHead = document.getElementById("nft-list").children[0]
console.log("the first ", tableHead);
document.getElementById("nft-list").innerHTML = "";
document.getElementById("nft-list").appendChild(tableHead)
      data.collections.forEach((element) => {
        newNFTRow(element)
      });
    });
}

document.getElementById("fetch-data").addEventListener("click", function () {
  offset += 100;
  fetchNFTs(offset);
});

document
  .getElementById("fetch-data-back")
  .addEventListener("click", function () {
    if (offset > 100) {
      offset -= 100;
      fetchNFTs(offset);
    }
    console.log("offset " + offset + " is less than 100");
  });
const testing = document.getElementById("nft-list");
console.log("Loaded this script great");


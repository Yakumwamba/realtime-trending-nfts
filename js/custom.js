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
  // console.log(node)
}
let offset = 0;
let previousResponse = [];

if (offset == 0) {
  fetchNFTs(0);
}
console.log("Loaded this script great");
//var myChart = echarts.init(document.getElementById('main'));
function fetchNFTs(offset) {
  fetch("https://api.hypereveal.xyz/v1/collections?sort=domain_authority&limit=5&offset=" + offset)
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
// add event listener to the button to call the function
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
// create a node list of all the nft cards

//
//testing.appendChild(newElement);

console.log(testing);
// write a function that gets json data from a url  using fetch and returns it


//`<div  class="collection__content-wrapper bg-color-secondary">

{
  /* <div class="collection__image">
    <div class="collection__image-wrapper">
        <img src="images/pic-1.png" class="image-100" alt="" srcset="">
    </div>
    <p class="font-weight-medium">Space Riders NFT</p>
</div>
<div class="collection__price">
    <p>0.029</p>
    <div class="collection__price-image">
        <img src="images/menu.png" class="image-100" alt="" srcset="">
    </div>
</div>
<div class="collection__price">
    <p>0.083</p>
    <div class="collection__price-image">
        <img src="images/menu.png" class="image-100" alt="" srcset="">
    </div>
</div>
<p>726</p>
<div class="collection__content-image-wrapper">
    <img src="images/image-3.png" alt="" srcset="">
</div>
</div>` */
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "getAllNamesAndPrices") {
    const newElement = document.createElement("div");
    newElement.id = "results";

    const elements = Array.apply(
      null,
      document.querySelectorAll(".item-list .item")
    );

    elements.forEach(el => {
      const name = el.querySelector('span[itemprop="name"]');
      const price = el.querySelector('span[itemprop="price"]');

      if (!name || !price) return false;

      newElement.innerHTML += `<div class="result-item">${
        name.innerHTML
      } - R$ ${price.innerHTML}</div>`;
    });

    document.body.appendChild(newElement);
  }
});

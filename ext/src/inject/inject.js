chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.command == "startCage") {
    const elements = [...document.querySelectorAll(".item-list .item")];

    elements.forEach(el => {
      const $image = el.querySelector("img.loaded");
      if (!$image) return false;

      const { width, height } = $image;
      const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

      $image.width = width;
      $image.height = height;
      $image.srcset = "";
      $image.src = `https://www.placecage.com/c/${width +
        randomNumber}/${height + randomNumber}`;
    });
  }
});

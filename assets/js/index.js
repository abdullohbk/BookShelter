let cardWrapper = $(".cards__wrapper"),
  card = $(".card"),
  darkBtn = $(".btn");

let BaseUrl =
  "https://www.googleapis.com/books/v1/volumes?q=harry&startIndex=1";

async function GetData(data) {
  try {
    let response = await fetch(data);
    let result = await response.json();
    let array = result.items;
    RenderData(array);
    console.log(array);
    // console.log(result);

    // console.log(response);
  } catch (err) {
    console.log(err);
  }
}

GetData(BaseUrl);

function RenderData(data) {
  data.forEach((el) => {
    const card = document.createElement("div");
    card.classList.add("cardclass");
    card.innerHTML = `
              <img
                src="${el.volumeInfo.imageLinks.smallThumbnail}"
                alt="smthimg"
                class="w-full h-[250px]"
              />
              <div class="card__body">
                <h3 class="text-[18px] font-bold mt-[20px]">${
                  el.volumeInfo.title.length > 18
                    ? el.volumeInfo.title.slice(0, 15) + "..."
                    : el.volumeInfo.title
                }</h3>
                <p class="text-[13px] text-gray-500 font-[500]">
                  ${el.volumeInfo.authors}
                </p>
                <p class="text-[13px] text-gray-500 font-[500]">2009</p>
                <div class="mt-[10px]">
                  <button
                    class="bg-yellow-400 font-bold text-[14px] py-2 px-7 rounded-sm"
                  >
                    Bookmark
                  </button>

                  <button
                    class="bg-blue-200 text-blue-500 font-bold text-[14px] py-2 px-12 rounded-sm"
                  >
                    More
                  </button>
                </div>
                <button
                  class="bg-gray-400 text-white w-full mt-2 py-[5px] rounded-sm"
                >
                  Read
                </button>
              </div>`;

    cardWrapper.appendChild(card);
  });
}

let isDarkMode = false;

darkBtn.onclick = function () {
  if (isDarkMode == false) {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "white"));
  } else {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "black"));
  }
  isDarkMode = !isDarkMode;
};

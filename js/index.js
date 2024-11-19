var bookMarkInput = document.getElementById("BookmarkName");
var webSiteUrlInput = document.getElementById("WebsiteUrl");

var webSiteUrlList = [];

if (localStorage.getItem("webSiteContainer") != null) {
  webSiteUrlList = JSON.parse(localStorage.getItem("webSiteContainer"));
}

displayData();

function subMit() {
  var bookMark = {
    name: bookMarkInput.value,
    url: webSiteUrlInput.value,
  };

  webSiteUrlList.push(bookMark);

  localStorage.setItem("webSiteContainer", JSON.stringify(webSiteUrlList));

  displayData();

  clearForm();

  if (siteName() && Url()) {
    console.log("het");
  } else {
    console.log("hhh");
  }
}

function clearForm() {
  bookMarkInput.value = null;
  webSiteUrlInput.value = null;
}

function siteName() {
  var regx = /^[a-z]{3,6}$/;
  var site = bookMarkInput.value;
  if (regx.test(site)) {
    bookMarkInput.classList.add("is-valid");
    bookMarkInput.classList.remove("is-invalid");
    return true;
  } else {
    bookMarkInput.classList.add("is-invalid");
    bookMarkInput.classList.remove("is-valid");

    return false;
  }
}

function Url() {
  var urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-])\/?$/;
  var site = webSiteUrlInput.value;
  if (urlPattern.test(site)) {
    webSiteUrlInput.classList.add("is-valid");
    webSiteUrlInput.classList.remove("is-invalid");
    return true;
  } else {
    webSiteUrlInput.classList.add("is-invalid");
    webSiteUrlInput.classList.remove("is-valid");

    return false;
  }
}

function displayData() {
  var cartona = "";
  for (var i = 0; i < webSiteUrlList.length; i++) {
    cartona += `
    <tr><td> ${i + 1} </td>
              <td>  ${webSiteUrlList[i].name} </td>
              <td>
              <a href="${webSiteUrlList[i].url}">
                <button class="btn btn-visit">
            <i class="fa-solid fa-eye fa-sm"></i>
            Visit</button></a>
              </td>
             <td>
              <button onclick="deletItem( ${i} )"  class="btn btn-delete pe-2">
                <i class="fa-solid fa-trash fa-sm"></i>
                Delete
              </button>
             </td>
            
            </tr>
            


    
    
    `;
  }
  document.getElementById("tableContent").innerHTML = cartona;
}

function deletItem(index) {
  webSiteUrlList.splice(index, 1);

  localStorage.setItem("webSiteContainer", JSON.stringify(webSiteUrlList));

  displayData();
}

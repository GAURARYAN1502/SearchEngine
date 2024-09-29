// Add event listener to the search box
document.addEventListener("DOMContentLoaded", function() {
  var searchBox = document.querySelector(".gcse-search");
  searchBox.addEventListener("submit", function(event) {
    event.preventDefault();
    var query = searchBox.querySelector("input").value;
    // Call the Google Custom Search API
    var url = "https://www.googleapis.com/customsearch/v1";
    var apiKey = "AIzaSyDSDJUdn6o2TJQw7rSvGdxiApgweyH5KKc";
    var cx = "e3f20ad3eaa8f4695";
    var params = {
      "q": query,
      "cx": cx,
      "key": apiKey
    };
    fetch(url, {
      method: "GET",
      params: params
    })
    .then(response => response.json())
    .then(data => {
      var resultsContainer = document.getElementById("results-container");
      resultsContainer.innerHTML = "";
      data.items.forEach(item => {
        var resultHTML = `
          <div>
            <h2><a href="${item.link}">${item.title}</a></h2>
            <p>${item.snippet}</p>
          </div>
        `;
        resultsContainer.innerHTML += resultHTML;
      });
    })
    .catch(error => console.error(error));
  });
});
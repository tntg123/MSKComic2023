$(document).ready(function() {
  let itemsPerPage = 1;
  let currentPage = parseInt(getQueryVariable("page")) || 1;
  let totalPages = Math.ceil($('.bookItem').length / itemsPerPage);
  
  function getQueryVariable(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  }
  
  function showPage(page) {
    $('.bookItem').hide();
    $('.bookItem').slice((page-1) * itemsPerPage, page * itemsPerPage).show();
    currentPage = page;
    updateButtons();
    updatePageNumbers();
    window.history.pushState({}, "", "?page=" + page);
}
  
  function updateButtons() {
    $('#firstPage').prop("disabled", currentPage === 1);
    $('#prevPage').prop("disabled", currentPage === 1);
    $('#nextPage').prop("disabled", currentPage === totalPages);
    $('#lastPage').prop("disabled", currentPage === totalPages);
  }
  
  function updatePageNumbers() {
  $("#pageNumbers").empty();
  let startPage = 1;
  let endPage = totalPages;
  if (totalPages > 6) {
    startPage = currentPage - 2;
    endPage = currentPage + 2;
    if (startPage < 1) {
      startPage = 1;
      endPage = 5;
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - 4;
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    let button = $("<button class='buttonPage' title='Trang "+ i +"'>" + i + "</button>");
    if (i === currentPage) {
      button.addClass("currentPage");
    }
    button.click(function() {
      showPage(i);
    });
    $("#pageNumbers").append(button);
  }
  if (startPage > 1) {
    $("#pageNumbers").prepend("<button class='hidebutton'>...</button>");
  }
  if (endPage < totalPages) {
    $("#pageNumbers").append("<button class='hidebutton'>...</button>");
  }
}
  
  $('#firstPage').click(function() {
    showPage(1);
  });
  
  $('#prevPage').click(function() {
    showPage(currentPage - 1);
  });
  
  $('#nextPage').click(function() {
    showPage(currentPage + 1);
  });
  
  $('#lastPage').click(function() {
    showPage(totalPages);
  });
  
  showPage(currentPage);
});

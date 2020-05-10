var books = document.querySelectorAll("#booklist li.name");

Array.from(books).forEach(function(book) {
  console.log(book.textContent);
});

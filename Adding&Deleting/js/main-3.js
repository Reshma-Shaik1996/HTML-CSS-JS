document.addEventListener("DOMContentLoaded", function() {
  var list = document.querySelector("#book-list ul");
  var myForms = document.forms;

  //console.log(list);
  //console.log(myForms);
  //==================Delete Books
  list.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
      var myli = e.target.parentElement;
      myli.parentNode.removeChild(myli);
    }
  });
  //================Adding Books
  var addForm = myForms["add-book"];
  //console.log(addForm);
  addForm.addEventListener("submit", function(e) {
    //This prevents the form from reloadig

    e.preventDefault();
    //Create Elements
    var value = addForm.querySelector('[type= "text"]').value;
    var li = document.createElement("li");
    var bookName = document.createElement("span");
    var DeleteBook = document.createElement("span");

    // Add text content=============
    bookName.textContent = value;
    DeleteBook.textContent = "Delete";

    //Add Classes=========
    bookName.classList.add("name");
    DeleteBook.className = "delete";

    //================Append to DOM
    li.appendChild(bookName);
    li.appendChild(DeleteBook);
    list.appendChild(li);

    //========Remove text from input
    addForm.querySelector('input[type="text"]').value = "";
  });
  //=============+Hide books
  //function(e) instead of anyonymous functio we can pass(e) =>
  var hidebox = document.querySelector("#hide");
  hidebox.addEventListener("change", e => {
    if (hidebox.checkd) {
      list.getElementsByClassName.display = "none";
    } else {
      list.getElementsByClassName.display = "initial";
    }
  });
  //==============Filter Books or Search Books

  var searchBook = myForms["search-book"].querySelector("input");
  searchBook.addEventListener("keyup", e => {
    var term = e.target.value.toLowerCase();
    var books = list.getElementsByTagName("li");
    //console.log(books);

    Array.from(books).forEach(book => {
      var title = book.firstElementChild.textContent;
      // console.log(title);
      if (title.toLowerCase().indexOf(e.target.value) != 1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });
});

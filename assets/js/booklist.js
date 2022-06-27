function mood() {
    let body = document.querySelector("body");
    if (body.classList == "bgColor1") {
        body.classList.toggle("bgColor2");
    }


    else {
        body.classList.toggle("bgColor1");
    }

}


// Main task

let submit_btn = document.querySelector("#submit_btn");
submit_btn.addEventListener("click", addBook);

let remove_book = document.querySelector("#book_list");
remove_book.addEventListener("click", removeBook);



// Add book function
function addBook(e) {
    e.preventDefault();
    let bookname = document.querySelector("#bookname").value.trim();
    let bookauthor = document.querySelector("#bookauthor").value.trim();

    let id1 = "#errorMsg";
    let msg1 = '<div class="alert alert-danger text-center">Sorry Fields cannot be Empty !!</div>'




    let list = document.createElement("tr");


    if (bookname == "" || bookauthor == "") {
        msgs(id1,msg1);
    }
    else {
        list.innerHTML = `
        <td>#</td>
        <td>${bookname}</td>
        <td>${bookauthor}</td>
        <td><a href="#" class="btn btn-warning btn-sm">Remove</a></td>
        `;
        console.log(list);

        let book_list = document.querySelector("#book_list");
        book_list.appendChild(list);

        document.querySelector("#bookname").value = "";
        document.querySelector("#bookauthor").value = "";
    }
}

function removeBook(e) {
    let id2 = "#removeBook";
    let msg2 = '<div class="alert alert-success text-center">The Book is removed ....</div>'
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure ?")) {
            let ele = e.target.parentElement.parentElement;
            ele.remove();
            msgs(id2,msg2);
        }
    }
}



function msgs(id1,msg1)
{
    let errorMsg = document.querySelector(id1);
    errorMsg.innerHTML= msg1 ;
    setTimeout(() => (errorMsg.innerHTML = ""), 2000);
}

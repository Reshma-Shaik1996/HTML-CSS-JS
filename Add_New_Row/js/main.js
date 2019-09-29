function _(e) {
  return document.querySelector(e);
}

function __(e) {
  return document.querySelectorAll(e);
}

let deleteBtn;
let editBtn;
let saveBtn;

let rows = __("table tr");

_(".addRow").onclick = () => {
  let name = _(".name");
  let country = _(".country");
  let age = _(".age");

  if (name.value != "" && country.value != "" && age.value != "") {
    const row = `
        <td>${name.value}</td>
        <td>${country.value}</td>
        <td>${age.value}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="save">Save</button>
            <button class="delete">Delete</button>
        </td>
    `;

    _("table").insertRow(rows.length - 1).innerHTML = row;
    name.value = country.value = age.value = "";
  } else {
    alert("Please Enter all the Inpul Fields");
  }

  deleteBtn = __(".delete");
  editBtn = __(".edit");
  saveBtn = __(".save");

  deleteBtn.forEach(btn => {
    btn.onclick = () => {
      btn.parentElement.parentElement.remove();
    };
  });

  editBtn.forEach(function() {
    btn.onclick = () => {
      let td = btn.parentElement.parentElement.querySelectorAll("td");
      for (let i = 0; i < td.length - 1; i++) {
        td[i].setAttribute("contenteditable", "true");
      }
    };
  });

  saveBtn.forEach(function() {
    btn.onclick = () => {
      let td = btn.parentElement.parentElement.querySelectorAll("td");
      for (let i = 0; i < td.length - 1; i++) {
        td[i].setAttribute("contenteditable", "false");
      }
    };
  });
};

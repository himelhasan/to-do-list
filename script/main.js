// document.getElementById("new-task-item").addEventListener("keyup", function (event) {
//   const taskAddBtn = document.getElementById("button-addon2");

//   const text = event.target.value;
//   if (text.length > 0) {
//     taskAddBtn.removeAttribute("disabled");
//   } else {
//     taskAddBtn.addAttribute("disabled");
//   }
// });

document.getElementById("button-addon2").addEventListener("click", function () {
  const ulList = document.getElementById("li-group");
  // console.log(ulList.innerHTML);
  const liSingle = document.getElementsByTagName("li");
  const liInput = document.getElementsByClassName("form-check-input");
  // const inputLabelname = document.getElementsByAtt("form-check-label");
  // console.log(inputLabelname.innerHTML);

  // * get the new task list item
  const zz = document.getElementById("new-task-item");
  const zzValue = zz.value;
  const taskAddBtn = document.getElementById("button-addon2");

  function btnDisband() {
    if (zzValue == "") {
      taskAddBtn.setAttribute("disabled");
    } else {
      taskAddBtn.removeAttribute("disabled");
    }
  }
  btnDisband();
  //* adding new task to the list

  //
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.classList.add("stretched-link");
  label.innerText = zzValue;

  // generating random id for each task
  let randomNo = Math.floor(Math.random() * 100000);
  console.log(randomNo);
  //
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  label.setAttribute("for", randomNo);
  //
  const inputTask = document.createElement("input");
  inputTask.setAttribute("class", "form-check-input me-2");
  inputTask.setAttribute("type", "checkbox");
  inputTask.setAttribute("value", "");
  inputTask.setAttribute("id", randomNo);

  ulList.appendChild(li);
  li.appendChild(inputTask);
  li.appendChild(label);
  zz.value = "";
});

// label.setAttribute("id", randomNo);

// //  remove irems on double click

const taskListItems = document.getElementById("li-group");
taskListItems.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove(event.target);
});

// for (const taskListItem of taskListItems) {
// taskListItems.addEventListener("click", function (event) {

// });

// });
// document
//   .getElementsByClassName("list-group-item")
//   .addEventListener("click", function (event) {
//     console.log("dblclick");
//   });

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

  //* adding new task to the list

  //
  const label = document.createElement("label");
  label.classList.add("form-check-label");
  label.classList.add("stretched-link");
  label.innerText = zzValue;
  //
  let randomNo = Math.floor(math.random() * 100);
  console.log(randomNo);
  //
  const li = document.createElement("li");
  li.classList.add("list-group-item");
  label.setAttribute("for", "checkbox-$");
  //
  const inputTask = document.createElement("input");
  inputTask.setAttribute("class", "form-check-input me-1");
  inputTask.setAttribute("type", "checkbox");
  inputTask.setAttribute("value", "");
  inputTask.setAttribute("id", "checkbox-$");

  ulList.appendChild(li);
  li.appendChild(inputTask);
  li.appendChild(label);
});

label.setAttribute("id", "checkbox-$");

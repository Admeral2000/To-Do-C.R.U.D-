const data = [
  {
    id: 1,
    text: "Soliqlarni to'lash kerak",
    date: "11/12/2023",
  },
  {
    id: 2,
    text: "CRUD amaliyot qilish kerak",
    date: "10/12/2023",
  },
];

const todo_wrapper = document.querySelector(".todo_wrapper");
const timeInput = document.querySelector(".deadline");
const textInput = document.querySelector(".todo");
const idInput = document.querySelector(".id");

function printAllData() {
  let elements = "";
  data.map(
    (item) =>
      (elements += `
      <div class="card_styles">
          <div>
              <h1>${item.text}</h1>
              <p>${item.date}</p>
          </div>
          <div class="card_styles_btns">
              <button onclick="editTodo(${item.id})" class="btn btn-dark">Edit</button>
              <button onclick="deleteTodo(${item.id})" class="btn btn-danger">Delete</button>
          </div>
      </div>
    `)
  );

  todo_wrapper.innerHTML = elements;
}

printAllData();

function addTodo() {
  if (textInput.value == "" || timeInput.value == "") {
    alert("Inputlarni to'ldiring !!!");
  } else {
    const newTodo = {
      id: data.length + 1,
      text: textInput.value,
      date: timeInput.value,
    };

    data.push(newTodo);

    printAllData();

    textInput.value = "";
    timeInput.value = "";
  }
}

function editTodo(id) {
  const selected = data.find((item) => item.id == id);

  textInput.value = selected.text;
  timeInput.value = selected.date;
  idInput.value = selected.id;
}

function updateTodo() {
  const selectedTodoId = parseInt(idInput.value);

  console.log(selectedTodoId);

  const selectedIndex = data.findIndex((item) => item.id == selectedTodoId);

  data[selectedIndex] = {
    id: selectedIndex,
    text: textInput.value,
    date: timeInput.value,
  };

  printAllData();

  textInput.value = "";
  timeInput.value = "";
}

function deleteTodo(id) {
  data.splice(id - 1, 1);

  printAllData();
}

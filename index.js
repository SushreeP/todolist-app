const currentTasks = document.getElementsByClassName("currenttasks")[0];

const markDone = (event) => {
  event.target.classList.toggle("markdone");
};

const removeTask = (event) => {
  const requiredElement = event.target.parentElement;
  requiredElement.style.display = "none";
  requiredElement.parentElement.removeChild(requiredElement);
  if (currentTasks.hasChildNodes()) {
    document.getElementById("removeAll").style.display = "block";
  }
};

const addTask = (event) => {
  event.preventDefault();
  const newtask = document.createElement("li");

  const task = document.createElement("span");
  task.innerHTML = document.getElementById("task").value;
  task.setAttribute("class", "newtask");
  task.addEventListener("click", markDone);

  const btnRemovetask = document.createElement("button");
  btnRemovetask.innerHTML = "x";
  btnRemovetask.addEventListener("click", removeTask);

  task.appendChild(btnRemovetask);
  newtask.appendChild(task);

  currentTasks.appendChild(newtask);
  document.getElementById("task").value = "";

  document.getElementById("removeAll").style.display = "block"; // runs everytime, is it the right way?
};

const removeAll = () => {
  currentTasks.innerHTML = "";
  document.getElementById("removeAll").style.display = "none";
};

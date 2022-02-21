"use strict";

let accountsAndPassword = [
  { id: 0, name: "GitHub", password: "githubisboss23" },
  { id: 1, name: "Facebook", password: "fbismetanow" },
  { id: 2, name: "LinkedIn", password: "MSownsme" },
];
let uniqueID = accountsAndPassword.length;


const closeModal = (modalName) => modalName.classList.remove("is-active");
const openModal = (modalName) => modalName.classList.add("is-active");

/* Script for the "add new account" modal */

const addNewAccountModal = document.querySelector("[data-new-account-modal]");
const cancelAddNewAccountModalBtn = addNewAccountModal.querySelector("button.cancel-modal");
const addNewAccountBtn = document.querySelector("[data-add-account-btn]");
const closeNewAccountModal = addNewAccountModal.querySelector("[aria-label='close']");

cancelAddNewAccountModalBtn.addEventListener("click", () => closeModal(addNewAccountModal));
addNewAccountBtn.addEventListener("click", () => openModal(addNewAccountModal));
closeNewAccountModal.addEventListener("click", () => closeModal(addNewAccountModal));


/* Logic for adding new account to localStorage */
const saveNewAccountBtn = addNewAccountModal.querySelector(".add-account-btn");
saveNewAccountBtn.addEventListener("click", () => {
  const newAccountName = addNewAccountModal.querySelector("[name='name']");
  const newAccountPassword = addNewAccountModal.querySelector("[name='password']");

  // Check if any data is available else do nothing
  if (!newAccountName.value && !newAccountPassword.value) return;

  const newAccount = { id: uniqueID, name: newAccountName.value, password: newAccountPassword.value };

  accountsAndPassword.push(newAccount);
  buildAccountCard(newAccount);
  console.log(accountsAndPassword);

  // close the modal after value is submitted
  closeModal(addNewAccountModal);
  // Clear the input fields
  newAccountName.value = "";
  newAccountPassword.value = "";
});


/* Logic for displaying and deleting the accounts on the UI */
let allAccounts = document.querySelector("[data-accounts]");
const accountTemplate = document.querySelector("[data-account-template]");


function buildAccountCard(account) {
  const accountCard = accountTemplate.content.cloneNode(true);
  const cardParentElement = accountCard.querySelector("div.added");

  accountCard.querySelector(".account-name").textContent = account.name;
  const cardDeleteBtn = accountCard.querySelector("button.delete");
  cardDeleteBtn.addEventListener("click", () => {
    cardParentElement.classList.remove("added");
    cardParentElement.classList.add("deleted");
    setTimeout(() => cardParentElement.remove(), 990);
    cardParentElement.remove()
  });

  allAccounts.append(accountCard);
}

accountsAndPassword.forEach((account) => buildAccountCard(account));

/*
const addItemBtn = document.querySelector("[data-add-item-button]");
const allTodoItems = document.querySelector("[data-todo-list]");
const itemTemplate = document.querySelector("[data-todo-item]");

// localStorage.clear()
let localTodos = localStorage.getItem("todos");  // Get items from localStorage
localTodos = localTodos ? JSON.parse(localTodos) : [];
localTodos.forEach(element => allTodoItems.append(buildItem(element)));

const getInput = () => document.querySelector("[data-input-field]");
const isValidInput = () => getInput().value.trim() ? true : false;
const saveToStorage = () => localStorage.setItem("todos", JSON.stringify(localTodos));
// Remove item from localStorage and UI
const deleteItem = (item) => localTodos.splice(localTodos.indexOf(item), 1);

function buildItem(element) {
  const todoItem = itemTemplate.content.cloneNode(true);

  todoItem.querySelector("span.content").textContent = element;
  todoItem.querySelector("li").classList.add("added")
  const deleteBtn = todoItem.querySelector("button.delete");
  // Add delete functionality to item created
  deleteBtn.addEventListener('click', () => {
    deleteBtn.parentElement.classList.remove("added")
    deleteBtn.parentElement.classList.add("deleted");
    setTimeout(() => deleteBtn.parentElement.remove(), 1500)
    deleteItem(element);
    saveToStorage();
  });

  return todoItem;
}

function addItemAndSaveToStorage() {
  allTodoItems.append(buildItem(getInput().value));
  // ES6 spread syntax
  localTodos = [...localTodos, getInput().value];
  saveToStorage();
}

addItemBtn.addEventListener('click', () => {
  if (isValidInput()) addItemAndSaveToStorage();
  getInput().value = "";  // Clear the input field
});
*/

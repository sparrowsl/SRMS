"use strict";

let accountsAndPassword = [];
let uniqueID = accountsAndPassword.length;


const closeModal = (modalName) => modalName.classList.remove("is-active");
const openModal = (modalName) => modalName.classList.add("is-active");

/* Script for the "add new account" modal */
const addNewAccountModal = document.querySelector("[data-new-account-modal]");
const accountDetailModal = document.querySelector("[data-account-detail-modal]");
const addNewAccountBtn = document.querySelector("[data-add-account-btn]");
const closeNewAccountModal = addNewAccountModal.querySelector("[aria-label='close']");
const closeAccountDetailModal = accountDetailModal.querySelector("[aria-label='close']");

addNewAccountBtn.addEventListener("click", () => openModal(addNewAccountModal));
closeNewAccountModal.addEventListener("click", () => closeModal(addNewAccountModal));
closeAccountDetailModal.addEventListener("click", () => closeModal(accountDetailModal));


/* Logic for adding new account to localStorage */
const saveNewAccountBtn = addNewAccountModal.querySelector(".add-account-btn");
saveNewAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newAccountName = addNewAccountModal.querySelector("[name='name']");
  const newAccountPassword = addNewAccountModal.querySelector("[name='password']");

  if (isValidNewAccount(newAccountName, newAccountPassword) === false) return;
  const newAccount = { id: uniqueID, name: newAccountName.value, password: newAccountPassword.value };

  accountsAndPassword.push(newAccount);
  buildAccountCard(newAccount);

  // // close the modal after value is submitted
  closeModal(addNewAccountModal);
  // Clear the input fields
  newAccountName.value = "";
  newAccountPassword.value = "";
});

function isValidNewAccount(name, password) {
  let isValidName = false;
  let isValidPassword = false;

  // Check if any data is available else do nothing
  if (name.value.trim().length < 1) {
    addNewAccountModal.querySelector("p.nameError").textContent = "please enter an account name";
  } else {
    isValidName = true;
    addNewAccountModal.querySelector("p.nameError").textContent = "";
  }

  if (password.value.trim().length < 1) {
    addNewAccountModal.querySelector("p.passwordError").textContent = "please enter a password!";
  } else {
    isValidPassword = true;
    addNewAccountModal.querySelector("p.passwordError").textContent = "";
  }

  return isValidName && isValidPassword;
}


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
    setTimeout(() => cardParentElement.remove(), 650);
  });

  // Open modal to display account details on click
  cardParentElement.querySelector("strong").addEventListener("click", () => {
    openModal(accountDetailModal);
    buildAccountDetail(account);
  });

  allAccounts.append(accountCard);
}

function buildAccountDetail(account) {
  const accountName = accountDetailModal.querySelector(".account-detail-name p");
  const accountPassword = accountDetailModal.querySelector(".account-detail-password p");

  // Filter the account list to find the correct account.
  const filtered = accountsAndPassword.filter(acc => acc.id === account.id);

  accountName.textContent = filtered[0].name;
  accountPassword.textContent = filtered[0].password;
}


accountsAndPassword.forEach(account => buildAccountCard(account));

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

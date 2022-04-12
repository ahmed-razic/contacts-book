//UI variables
const inputForm = document.querySelector('#input-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneNumber = document.querySelector('#phone');
const emailAddress = document.querySelector('#email');
const filterInput = document.querySelector('#filter-input');
const contactsList = document.querySelector('#contacts-list');
const clearContacts = document.querySelector('#clear-contacts');

// console.log(
//   inputForm,
//   firstName,
//   lastName,
//   phoneNumber,
//   emailAddress,
//   filterInput,
//   contactsList,
//   clearContacts
// );

//Load event listeners

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getContacts);
  inputForm.addEventListener('submit', addContact);
  filterInput.addEventListener('keyup', filterContacts);
  contactsList.addEventListener('click', deleteContact);
  clearContacts.addEventListener('click', clearContacts);
}

//Event functions

function getContacts() {}

function addContact() {}

function filterContacts() {}

function deleteContact() {}

function clearContacts() {}

//Locale Storage Action

function getContactsFromLocaleStorage() {}

function setContactsToLocaleStorage() {}

function clearContactsFromLocaleStorage() {}

//UI variables
const inputForm = document.querySelector('#input-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneNumber = document.querySelector('#phone');
const emailAddress = document.querySelector('#email');
const filterInput = document.querySelector('#filter-input');
const contactsList = document.querySelector('#contacts-list');
const clearButton = document.querySelector('#clear-contacts');

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
  clearButton.addEventListener('click', clearContacts);
}

//Event functions

function getContacts() {}

function addContact(e) {
  e.preventDefault();
  const person1 = {
    firstName: 'Ahmed',
    lastName: 'Razic',
    email: 'ahmed.razic@gmail.com',
    phone: '111-111-111',
  };
  const person2 = {
    firstName: 'Ahmed',
    lastName: 'Razic',
    email: 'ahmed.razic@gmail.com',
    phone: '222-222-222',
  };
  const person3 = {
    firstName: 'Ahmed',
    lastName: 'Razic',
    email: 'ahmed.razic@gmail.com',
    phone: '333-333-333',
  };

  let people = [];
  people.push(person1, person2, person3);

  console.log(people);

  localStorage.setItem('people', JSON.stringify(people));

  const list = JSON.parse(localStorage.getItem('people'));

  list.forEach(function (item) {
    console.log(item.phone);
  });
}

function filterContacts() {}

function deleteContact() {}

function clearContacts() {}

//Locale Storage Action

function getContactsFromLocaleStorage() {}

function setContactsToLocaleStorage() {}

function clearContactsFromLocaleStorage() {}

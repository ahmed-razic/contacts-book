//UI variables
const inputForm = document.querySelector('#input-form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneNumber = document.querySelector('#phone');
const emailAddress = document.querySelector('#email');
const filterInput = document.querySelector('#filter-input');
const contactsList = document.querySelector('#contacts-list');
const clearButton = document.querySelector('#clear-contacts');

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

  //get input data and store it into a person object
  const person = {};
  person.firstName = firstName.value;
  person.lastName = lastName.value;
  person.phoneNumber = phoneNumber.value;
  person.emailAddress = emailAddress.value;

  //make a list item and append it to ul
  const li = document.createElement('li');
  li.className = 'collection-item contact avatar';

  const avatar = document.createElement('i');
  avatar.className = 'material-icons circle teal large';
  avatar.appendChild(document.createTextNode('person'));

  const personNames = document.createElement('span');
  personNames.className = 'title';
  personNames.appendChild(
    document.createTextNode(`${person.firstName} ${person.lastName}`)
  );

  const phone = document.createElement('p');
  phone.appendChild(document.createTextNode(`${person.phoneNumber}`));

  const email = document.createElement('p');
  email.appendChild(document.createTextNode(`${person.emailAddress}`));

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'material-icons red-text';
  deleteIcon.appendChild(document.createTextNode('delete'));

  const link = document.createElement('a');
  link.className = 'secondary-content';
  link.appendChild(deleteIcon);

  li.appendChild(avatar);
  li.appendChild(personNames);
  li.appendChild(phone);
  li.appendChild(email);
  li.appendChild(link);

  contactsList.appendChild(li);

  setContactsToLocaleStorage(person);
}

function filterContacts() {}

function deleteContact() {}

function clearContacts() {}

//Locale Storage Action

function getContactsFromLocaleStorage() {}

function setContactsToLocaleStorage(person) {
  let people;

  if (localStorage.getItem('people') === null) {
    people = [];
  } else {
    people = JSON.parse(localStorage.getItem('people'));
  }

  people.push(person);
  localStorage.setItem('people', JSON.stringify(people));
}

function clearContactsFromLocaleStorage() {}

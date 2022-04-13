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

function getContacts() {
  const people = getContactsFromLocaleStorage();

  people.forEach(function (person) {
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

    //append to contact list
    contactsList.appendChild(li);
  });
}

function addContact(e) {
  e.preventDefault();

  //get input data and store it into a person object
  const person = {};

  if (
    firstName.value === '' ||
    lastName.value === '' ||
    phoneNumber.value === '' ||
    emailAddress.value === ''
  ) {
    alert('Please enter values in all fields');
    return;
  }

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
  deleteIcon.className = 'material-icons red-text delete';
  deleteIcon.appendChild(document.createTextNode('delete'));

  const link = document.createElement('a');
  link.className = 'secondary-content';
  link.appendChild(deleteIcon);

  li.appendChild(avatar);
  li.appendChild(personNames);
  li.appendChild(phone);
  li.appendChild(email);
  li.appendChild(link);

  //append to contact list
  contactsList.appendChild(li);

  //save added contact to locale storage
  setContactsToLocaleStorage(person);
}

function filterContacts() {}

function deleteContact(e) {
  console.log(e.target);
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }

  deleteContactFromLocalStorage();
}

function clearContacts() {
  while (contactsList.firstChild) {
    contactsList.removeChild(contactsList.firstChild);
  }

  clearAllContactsFromLocaleStorage();
}

//Locale Storage Action

function getContactsFromLocaleStorage() {
  let people;

  if (localStorage.getItem('people') === null) {
    people = [];
  } else {
    people = JSON.parse(localStorage.getItem('people'));
  }

  return people;
}

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

function clearAllContactsFromLocaleStorage() {
  localStorage.clear();
}

function deleteContactFromLocalStorage() {}

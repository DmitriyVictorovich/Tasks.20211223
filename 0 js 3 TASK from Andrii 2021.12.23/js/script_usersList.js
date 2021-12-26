

let UserBase = localStorage.getItem('form');
let UserBaseString = JSON.parse(UserBase);


UserBaseString.forEach(element => {
let User = {
    name: UserBaseString[0].name,
    phone: UserBaseString[0].phone,
};

const userListHtml = document.getElementsByClassName('js-list-users');
const userLineHtml = '<div>' + User.name + ' ' + User.phone + '</div>';
userListHtml[0].innerHTML = userListHtml[0].innerHTML + userLineHtml;
});











/*
let User = {
    name: UserBaseString[0].name,
    phone: UserBaseString[0].phone,
};
  UserBaseString.forEach((i) => {
    name.push(i[0]);
    phone.push(i[0])
  });
      
  console.log(name, phone);
*/








/*let User = {
    name: UserBaseString[0].name,
    phone: UserBaseString[0].phone,
};
console.log(User)

const userListHtml = document.getElementsByClassName('js-list-users');
const userLineHtml = '<div>' + User.name + ' ' + User.phone + '</div>';
userListHtml[0].innerHTML = userListHtml[0].innerHTML + userLineHtml;
*/

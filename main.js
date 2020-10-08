const person = {
  name: "",
  age: 0,
}
console.log(person);
const saveProfile = document.getElementById("saveProfile").addEventListener("click",
  function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    console.log(name, age);

    person.name = name;
    person.age = age;
    console.log(person);

    setCookie("profile", JSON.stringify(person), 1);
  })

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
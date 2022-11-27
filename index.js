// import { button_style, li_style } from './index_css'
let add_person_button = document.querySelector(".add-person-button");
let list = document.querySelector(".list");

let people = [
  { id: 1, name: "John Bender" },
  { id: 2, name: "Allison Reynolds" },
  { id: 3, name: "Brian Johnson" }
];

let button_style = `border-radius: 15px; background-color: red; color: white;
                    border: 0px solid white; margin: 0px 5px 0px 0px; width: 25px;
                    height: 25px;`
let li_style = `display: flex; flex-direction: row;
                justify-content: space-between;`


let remove_person = (index) => {
  console.log(index)
}

const load_list = (people) => {
  list.innerHTML = people.map((item) => {
    return (
      `<li style="${li_style}">
        ${item.name} <button style="${button_style}" onclick="${remove_person(item.id)}">X</button>
      </li>`
    )
  }).join("");
};
load_list(people);

add_person_button.onclick = () => {
  let input_name = document.querySelector("#input-name").value;
  let list = document.querySelector(".list").innerHTML;

  people.push({ id: list.length + 1, name: input_name });
  list += `<li style="${li_style}">
            ${input_name} <button style="${button_style}">X</button>
          </li>`;

  document.querySelector(".list").innerHTML = list;
  document.querySelector("#input-name").value = ''
};
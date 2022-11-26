let button = document.querySelector("button");
let list = document.querySelector(".list");

let people = [
  { name: "John Bender" },
  { name: "Allison Reynolds" },
  { name: "Brian Johnson" }
];

let button_style = `border-radius: 10px; background-color: red; color: white;
                    border: 0px solid white; margin: 0px 5px 0px 0px;`
let li_style = `display: flex; flex-direction: row;
                justify-content: space-between;`

const load_list = (people) => {
  list.innerHTML = people.map((item) => {
    return `<li style="${li_style}">
              ${item.name} <button style="${button_style}">X</button>
            </li>`
  }).join("");
};

load_list(people);

button.onclick = () => {
  let input_name = document.querySelector("#input-name").value;
  let list = document.querySelector(".list").innerHTML;

  people.push({ name: input_name });
  list += `<li>${input_name}</li>`;

  if (!input_name) return "";

  document.querySelector(".list").innerHTML = list;
};

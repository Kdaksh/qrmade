const getVal = (id) => document.getElementById(id).value;
const classL = (id, meth, val) => {if (meth == "r") {document.getElementById(id).classList.remove(val);} else {document.getElementById(id).classList.add(val);}};
const click = (id) => document.getElementById(id).click();
const matchRegex = (regex, str) => {return str.toLowerCase().trim().match(regex);};
const elem = (id) => document.getElementById(id);
const elemManager = (id, key, val) => {document.getElementById(id)[key] = val;};
const ManageEventsOnInput = (id, btn, regex) => {id.addEventListener("input", () => {if (matchRegex(regex, id.value)) {classL(id.id, "r", "is-invalid");classL(id.id, "a", "is-valid");btn.disabled = false;} else {classL(id.id, "a", "is-invalid");classL(id.id, "r", "is-valid");btn.disabled = true;}});};
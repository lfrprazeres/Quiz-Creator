// function to generate unique IDs to the quizes
let lastId = localStorage.getItem("lastId") !== null ? localStorage.getItem("lastId") : 1;
localStorage.setItem("lastId", parseInt(lastId)+1);

export default function() {
    let currentId = lastId;
    lastId++;
    return `${currentId}`;
}
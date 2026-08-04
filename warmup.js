const title = "My First Note";
const isPinned = false;
const tags = ["personal", "todo"];

console.log(title, typeof title);
console.log(isPinned, typeof isPinned);
console.log(tags, typeof tags);


// the makenote function

function makeNote(title, content) {
  return {
    title: title,
    content: content,
    createdAt: new Date()
  };
}

console.log(makeNote("Groceries", "Milk, eggs, bread"));

// creating array of 3 note objects

const notes = [
  { title: "Groceries", content: "Milk, eggs" },
  { title: "Workout", content: "Legs day" },
  { title: "Reading", content: "Finish chapter 3" },
];

const titles = notes.map((note) => note.title);
console.log(titles);

// destructing & template literals

const { title: noteTitle, content } = notes[0];
console.log(`${noteTitle}: ${content}`);

// async/await basics
async function getSampleData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

getSampleData();
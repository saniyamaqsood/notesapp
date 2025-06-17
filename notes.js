let createbtn =document.querySelector(".btn");
let notesContainer =document.querySelector(".notes");

 // load notes
window.addEventListener("load",() =>{
  let savedNotes= JSON.parse(localStorage.getItem("notes")) || [];
 savedNotes.forEach((text)=>{
  createNote(text);
});
});

createbtn.addEventListener("click", ()=>{
createNote("");
saveNotes();
});


function createNote(text){
  const noteWrapper = document.createElement("div");
  noteWrapper.classList.add("note-item");

    //create textarea
let notes=document.createElement("textarea");
notes.classList.add("input");
notes.placeholder="...";
 notes.value=text;

//save to ls on every input
notes.addEventListener("input",saveNotes);

//create delete btn
const img= document.createElement("img");
img.classList.add("delete-icon");
img.src= "images/delete.png";
 img.addEventListener("click", () => {
    noteWrapper.remove();
    
  });

  noteWrapper.appendChild(notes);
  noteWrapper.appendChild(img);
  notesContainer.appendChild(noteWrapper);
}
 

 //save all notes
 function saveNotes(){
  let allNotes= document.querySelectorAll(".input");
  let notes=[];
allNotes.forEach((note) => {
if( note.value.trim() !== "" )
{ notes.push(note.value);}
});
localStorage.setItem("notes", JSON.stringify(notes));}

class HTML {
  constructor() {
    this.notes = document.querySelector(".notes");
  }
  createNote(note) {
    let li = document.createElement("li");
    li.textContent = note;
    this.notes.appendChild(li);
  }

  showMsg(msgText, msgType) {
    let p = document.createElement("p");

    p.textContent = msgText;
    if (msgType === "success") {
      p.classList.add("success");
      p.classList.remove("error");
    } else {
      p.classList.add("error");
      p.classList.remove("success");
    }
    document.body.insertBefore( p ,this.notes);
    setTimeout(() => {
        p.remove()
    } , 2000)
  }
}

export default HTML
function click(event) {
    if (event.key === "Enter") {
      adder();
    }
  }
  let myList = [
    {
      name: "hello",
      date: "12-12-2020",
    },
  ];
  renderList();
  function renderList() {
    let arrayList = "";
    for (let i = 0; i < myList.length; i++) {
      const lis = myList[i];
      const { name, date } = lis;
      const html = `<p>${name} ${date} <button onclick='
        myList.splice(${i}, 1);
        renderList();
        '>Delete</button> </p>`;
      arrayList += html;
    }
    document.querySelector(".showText").innerHTML = arrayList;
  }

  function adder() {
    const text = document.querySelector(".list");
    const dateInput = document.querySelector(".date");
    const name = text.value;
    const date = dateInput.value;

    if (name && date) {
      myList.push({ name, date });
      text.value = "";
      dateInput.value = "";
      renderList();
    }
  }
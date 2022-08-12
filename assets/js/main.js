fetch("assets/data.json")
  .then((res) => {
    let data = res.json();
    return data;
  })
  .then((res) => {
    let mainDiv = document.querySelector(".main .container .content .days");
    res.forEach((element) => {
      let dayDiv = document.createElement("div");
      dayDiv.className = element.day;
      let presentDiv = document.createElement("div");
      presentDiv.className = "present";
      presentDiv.dataset.present = element.amount;
      let amountDiv = document.createElement("div");
      amountDiv.className = "amount";
      amountDiv.textContent = `$${element.amount}`;
      presentDiv.appendChild(amountDiv);
      let mainP = document.createElement("p");
      mainP.textContent = element.day;
      dayDiv.append(presentDiv, mainP);
      mainDiv.appendChild(dayDiv);
      presentDiv.style.height = `${
        (presentDiv.dataset.present *
          (dayDiv.clientHeight - mainP.clientHeight - 10)) /
        100
      }%`;
      presentDiv.addEventListener("mouseover", () => {
        amountDiv.style.opacity = "1";
      });
      presentDiv.addEventListener("mouseout", () => {
        amountDiv.style.opacity = "0";
      });
    });
    return res;
  })
  .then((res) => {
    let arr = [];
    res.map((value) => {
      arr.push(value.amount);
    });
    let biggest = document.querySelector(
      `[data-present="${Math.max(...arr)}"]`
    );
    biggest.classList.add("big");
  });

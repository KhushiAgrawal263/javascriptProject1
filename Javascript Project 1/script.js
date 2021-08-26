// const input = document.getElementsByClassName("pop");
// console.log(input[0]);
// console.log("khougvjg");

// if (input.length === 0) {
//   console.log("hfvvvvvvvyyyyyyyyyyyyyyyyyyyyyyyyyy");
// }
// input.forEach((f) => {
//   console.log(f);
// });

function fun(val) {
  // document.querySelector(".pop").classList.add("hidden");
  console.log(val);
  if (val === "action") {
    // document.querySelector(".pop").classList.add("hidden");
    var divs = document.querySelectorAll(".pop"),
      i;

    for (i = 0; i < divs.length; i++) {
      divs[i].classList.add("hidden");
    }

    document.querySelector(".act").classList.toggle("hidden");
  }
  if (val === "romance") {
    // document.querySelector(".pop").classList.add("hidden");
    var divs = document.querySelectorAll(".pop"),
      i;

    for (i = 0; i < divs.length; i++) {
      divs[i].classList.add("hidden");
    }
    document.querySelector(".romance").classList.toggle("hidden");
  }
  if (val === "horror") {
    // document.querySelector(".pop").classList.add("hidden");
    var divs = document.querySelectorAll(".pop"),
      i;

    for (i = 0; i < divs.length; i++) {
      divs[i].classList.add("hidden");
    }
    document.querySelector(".horror").classList.toggle("hidden");
  }
  if (val === "all") {
    // document.querySelector(".pop").classList.add("hidden");
    var divs = document.querySelectorAll(".pop"),
      i;

    for (i = 0; i < divs.length; i++) {
      divs[i].classList.add("hidden");
    }
    document.querySelector(".all").classList.toggle("hidden");
  }
}

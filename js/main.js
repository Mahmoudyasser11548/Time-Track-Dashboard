// Select Items
let list = Array.from(document.querySelectorAll(".date li")),
  dataContainer = Array.from(document.querySelectorAll(".box .time"));

list.forEach((li) => {
  li.onclick = () => {
    getData();
  };
});


function getData() {
  fetch('../json/data.json')
    .then((res) => res.json())
    .then((data) => {
      let length = data.length;
      createDataText(data, length);
    });
}

function createDataText(data, count) {
  for(let i = 0;i <= count;i++) {
    console.log('Good')
  }
}

/* <div class="box work">
  <span class="title">work</span>
  <div class="time">
    <div class="hour">32hrs</div>
    <span>last week - 5hrs</span>
  </div>
</div>; */
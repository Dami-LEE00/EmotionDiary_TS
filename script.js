//자바스크립트 객체 지향 프로그래밍 언어
// "this"는 주로 객체 지향 프로그래밍에서 현재 실행 중인 메서드나 함수가 속해 있는 객체를 가리키는 데 사용


// let student = {
//   name: "Hong",
//   score: {
//     history: 85,
//     science: 94,
//     average: function() {
//       return (this.history + this.science) / 2
//     }
//   }
// }

// function Book(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
  
//   this.finish = function() {
//     let str = "";
//     this.done === false ? str = "읽는 중" : str = "완독"
//     return str;
//   }
// }

// let book1 = new Book("React", 350, false);
// let book2 = new Book("Javascript", 420, true);



//Date 객체 => 필터 !!! 
//pivotDate => 오늘 현시점 날짜 정보 !!
//dateArray => 특정한 날짜 포함된 배열

function filterThisMonth(pivotDate, dateArray) {
  const year = pivotDate.getFullYear();
  const month = pivotDate.getMonth();
   //6월 첫째 날 
  const startDay = new Date(year, month, 1, 0, 0, 0);
    //6월 마지막 날 
  const endDay = new Date(year, month + 1, 0, 23, 59, 59) 
  
  const resArr = dateArray.filter((it) => 
  startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime()
  )
  return resArr;
}

const dateArray = [
  new Date("2023-6-01"),
  new Date("2023-6-30"),
  new Date("2023-7-01"),
  new Date("2023-5-31"),
  new Date("2023-6-22")
]
const today = new Date("2023-06-22/00:00:00");
const filteredArray = filterThisMonth(today,dateArray)

console.log(filteredArray);
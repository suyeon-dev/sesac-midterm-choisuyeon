/* 1. https://jsonplaceholder.typicode.com/todos 로부터 데이터를 불러와서 추가해주는 함수 getTodos() 선언 */
// getTodos()는 추후에 HTML DOM 내용이 완전히 로드되었을 때 실행되어야 합니다.

document.addEventListener("DOMContentLoaded", () => {
  const addTodo = document.getElementById("addTodo"); //작성 버튼
  const todoList = document.getElementById("todoList"); //할일목록 공간
  const todoInput = document.getElementById("todoInput"); //todo 입력창

  // 1. 데이터 불러오기
  async function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log("res", res);
        return res.json(); //response 객체 json 본문 -> js객체 변환
      })
      .then((data) => {
        console.log("data", data);
      });
  }

  // 2. 할일 추가
  addTodo.addEventListener("click", () => {
    const item = document.createElement("div");
    // 체크박스
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // 텍스트
    const text = document.createElement("span");
    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    // 할일 추가하기
    if (!todoInput.value) {
      alert("내용을 입력해주세요");
    } else {
      item.textContent = todoInput.value;
      todoInput.value = ""; // 초기화

      item.appendChild(checkbox);
      item.appendChild(text);
      item.appendChild(deleteBtn);
      todoList.appendChild(item);
    }

    // 체크 박스 클릭 시
    // 폰트 색 변경, 취소선 추가
    checkbox.addEventListener("change", (e) => {
      if (e.currentTarget.checked) {
        text.style.textDecoration = "line-through";
        text.style.color = "lightgray";
      } else {
        text.style.textDecoration = "none";
      }
    });

    // 제거하기 버튼
    deleteBtn.addEventListener("click", (e) => {
      todoList.removeChild(e.currentTarget.parentNode);
    });
    input.value = "";
  });
});

/* 
  2. 새로운 입력창의 Todo를 Todo 목록에 추가하고, 입력창을 초기화합니다.
  - 공백이나 빈 문자열의 경우 추가될 수 없습니다.
  - 작성 버튼 클릭 시 addTodo() 함수가 실행됩니다.
  - 입력 창에서 Enter 키 입력시에도 addTodo() 함수가 실행됩니다.
*/

/*  3. x 버튼을 클릭하면 클릭한 버튼을 갖는 Todo 항목이 삭제됩니다. */
// 삭제 함수의 이름 및 모양 변경 가능
function deleteTodo(item) {}

/* 
 4. Todo 목록 불러오기,  
 - GET https://jsonplaceholder.typicode.com/todos 요청의 응답 결과에서 맨 처음부터 10개의 원소만 잘라내어 
   투두 목록에 초기 Todo를 표시해야 합니다.
 - HTML 문서의 DOM 내용이 완전히 로드되었을 때 실행됩니다.
 - 따로 함수를 만들어도 좋고, 함수를 만들지 않아도 좋습니다.
*/

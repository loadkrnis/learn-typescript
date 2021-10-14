let todoItems: Array<TodoItem>;

class TodoItem {
  id: number;
  title: string;
  done: boolean;

  constructor(id: number, title: string, done: boolean) {
    this.id = id;
    this.title = title;
    this.done = done;
  }
}

// api
function fetchTodoItems(): any {
  return [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
}

// crud methods
function fetchTodos(): Array<TodoItem> {
  const result: Array<TodoItem> = [];
  const todos: Array<{
    id: number;
    title: string;
    done: boolean;
  }> = fetchTodoItems();
  for (const todo of todos) {
    result.push(new TodoItem(todo.id, todo.title, todo.done));
  }
  return result;
}

function addTodo(todo: TodoItem): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoItem): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TodoItem {
  return todoItems[0];
}

function showCompleted(): Array<TodoItem> {
  return todoItems.filter(item => item.done);
}

// 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todos: Array<TodoItem>): void {
  addTodo(todos[0]);
  addTodo(todos[1]);
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodos();
addTwoTodoItems([
  new TodoItem(10, 'type', false),
  new TodoItem(11, 'script', false),
]);
deleteTodo(1);
completeTodo(0, logFirstTodo());
showCompleted();
log();

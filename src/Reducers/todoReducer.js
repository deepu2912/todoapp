export const todoListReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem("todoList"));
    switch (action.type) {
        case "INSERT":
            list.push(action.payload);
            localStorage.setItem("todoList", JSON.stringify(list))
            return {
                todoList: list,
                CurrentIndex: -1
            }
        case "UPDATE":
            list[state.CurrentIndex] = action.payload;
            localStorage.setItem("todoList", JSON.stringify(list))
            return {
                todoList: list,
                CurrentIndex: -1
            }
        case "DELETE":
            list.splice(action.payload, 1);
            localStorage.setItem("todoList", JSON.stringify(list))
            return {
                todoList: list,
                CurrentIndex: -1
            }
            case "UPDATEINDEX":
                return {
                    todoList: list,
                    CurrentIndex: action.payload
                }
            default:
                return state;
    }


}
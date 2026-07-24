import { Component } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { DeleteButton, TaskListList, TaskListItem } from "./TaskList.styled";

class TaskList extends Component{
    tasks = [
        { id: 1, text: "Вивчити React" }, 
        { id: 2, text: "Зробити домашнє завдання" },
        { id: 3, text: "Повторити JavaScript" },
    ];
    onDelete=(id) => {
        this.tasks = this.tasks.filter(task => task.id !== id)
        this.forceUpdate()
    }
    render() {
        return (
            <>
            <TaskListList>{this.tasks.map(task => (<TaskListItem key={task.id}>{task.text}<DeleteButton onClick={() => {this.onDelete(task.id)}}><FaRegTrashAlt /></DeleteButton></TaskListItem>))}</TaskListList>
            </>
        )
    }
}
export default TaskList;
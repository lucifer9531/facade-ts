import Components from "./Components";
import { ITodoData } from "../../../typings";

export interface IListOptions {
    wrapperEl: HTMLElement;
    todoData: ITodoData[];
}

class List extends Components {

    private wrapperEl: HTMLElement;
    private static todoData: ITodoData[];

    constructor(options: IListOptions) {
        super();
        this.wrapperEl = options.wrapperEl;
        List.todoData = options.todoData;
    }

    public render() {
        this.wrapperEl.innerHTML += Components.listView(List.todoData);
    }

    public bindEvent() {
        const oTodoList: HTMLElement = document.querySelector('.todo-list');
        oTodoList.addEventListener('click', this.handleListClick.bind(this), false);
    }

    public static addItem(val: string) {
        const oTodoList: HTMLElement =  document.querySelector('.todo-list');
        const _item: ITodoData = {
            id: new Date().getTime(),
            content: val,
            completed: false
        }
        List.todoData.push(_item);
        if (List.todoData.length === 1) {
            oTodoList.innerHTML = '';
        }
        oTodoList.innerHTML += Components.todoView(_item);
    }

    private handleListClick(e: MouseEvent) {
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName.toLowerCase();
        const oTodoItems: HTMLCollection = document.getElementsByClassName('todo-item');

        if (tagName === 'input' || tagName === 'button') {
            const id: number = parseInt(tar.dataset.id);

            switch (tagName) {
                case 'input':
                    this._handleCheckBoxClick(id, oTodoItems);
                    break;
                case 'button':
                    this._handleButtonClick(id, oTodoItems);
                    break;
                default:
                    break;
            }
        }
    }

    private _handleCheckBoxClick(id: number, oTodoItems: HTMLCollection) {
        List.todoData = List.todoData.map((todo, index) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                oTodoItems[index].querySelector('span').style.textDecoration = todo.completed ? 'line-through' : '';
            }
            return todo;
        })
    }

    private _handleButtonClick(id: number, oTodoItems: HTMLCollection) {
        List.todoData = List.todoData.filter((todo, index) => {
            if (todo.id !== id) {
                return todo;
            } else {
                oTodoItems[index].remove();
            }
        })
    }
}

export default List;

import {Injectable, NotFoundException} from '@nestjs/common';
import {Todo} from "./interfaces/todo.interface";
import {createTodoDto} from "./dto/create-todo.dto";

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: "todo-app",
            description: "Create NestJS todos-app",
            done: false,
        },
        {
            id: 2,
            title: "Bread",
            description: "Buy bread for dinner",
            done: true,
        },
        {
            id: 3,
            title: "Wine",
            description: "Buy bread for dinner",
            done: true,
        },
    ];

    findOne(id: string) {
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }
    create(todo: createTodoDto) {
        this.todos = [...this.todos, todo];
    }
    update(id: string, todo: Todo) {
        // retrieve the todo to update
        const todoToUpdate = this.todos.find(t => t.id === +id);
        if(!todoToUpdate) {
            return new NotFoundException("todo doesn't exist...")
        }
        // apply to granulary update a single property
        if (todo.hasOwnProperty('done')) {
            todoToUpdate.done = todo.done;
        }
        if (todo.title) {
            todoToUpdate.title = todo.title;
        }
        if (todo.description) {
            todoToUpdate.description = todo.description;
        }
        const updatedTodos = this.todos.map(t => t.id !== +id ? t: todoToUpdate)
        this.todos = [...updatedTodos];
        return { updatedTodo: 1, todo: todoToUpdate };
    }
}

import { Injectable } from '@nestjs/common';
import {Todo} from "./interfaces/todo.interface";

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

    findAll(): Todo[] {
        return this.todos;
    }
    create(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
}

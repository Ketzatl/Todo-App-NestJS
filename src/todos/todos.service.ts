import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    todos = [
        {
            id: 1,
            title: "todo-app",
            description: "Create NestJS todos-app"
        },
        {
            id: 2,
            title: "Bread",
            description: "Buy bread for dinner"
        }
    ];

    findAll(): any[] {
        return this.todos;
    }
}

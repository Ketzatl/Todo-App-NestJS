import {Body, Controller, Get, Post} from '@nestjs/common';
import {TodosService} from "./todos.service";

// Le prefixe "todos" permet d'écouter localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAll(): any[] {
        return this.todosService.findAll();
    }
    @Post()
    createTodo(@Body() newTodo) {

    }
}

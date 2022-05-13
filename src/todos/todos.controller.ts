import {Body, Controller, Get, Post, Param} from '@nestjs/common';
import {TodosService} from "./todos.service";
import {createTodoDto} from "./dto/create-todo.dto";

// Le prefixe "todos" permet d'écouter localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('id', id)
        return this.todosService.findOne(id);
    }
    @Get()
    findAll(): any[] {
        return this.todosService.findAll();
    }
    @Post()
    createTodo(@Body() newTodo) {
        console.log("newTodo", createTodoDto);
        this.todosService.create(newTodo);
    }
}

import {Body, Controller, Get, Post, Param, Patch, Delete} from '@nestjs/common';
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
        return this.todosService.findAll();
    }
    @Post()
    createTodo(@Body() newTodo) {
        console.log("newTodo", createTodoDto);
        this.todosService.create(newTodo);
    }
    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todo: createTodoDto) {
        return this.todosService.update(id, todo);
    }
<<<<<<< Updated upstream
    @Delete(':id')
    deleteTodo(@Param('id') id: string) {
        return this.todosService.deleteTodo(id);
    }
=======

>>>>>>> Stashed changes
}

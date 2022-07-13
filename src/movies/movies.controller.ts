import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('movies')
export class MoviesController {

@Get()
getAll() {
    return "This whii be All Movies";
}

@Get("/:id") 
getOne(@Param("id") id: string) {
    return `this will return one movie ${id}`;
}

@Post()
create() {
    return `This Will Create Movie`;
}

@Delete("/:id") 
remove(@Param('id') movieId: string) {
    return `Delete Movie id :${movieId}`;
}

// Put은 모든 리소스 업데이트
//Patch는 일부분만 업데이트
@Patch('/:id')
path(@Param('id') movieId: string) {
    return `Patch Movie id :${movieId}`;
}

}



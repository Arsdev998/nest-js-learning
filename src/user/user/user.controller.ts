import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  @Get('/hello')
  getIdParams(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): string {
    return `GET QUERY PARAMS NAME : ${firstName} ${lastName}`;
  }
  
  @Get('/:id')
  getId(@Param("id") id:string): string {
    return `GET ${id} Userrr`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get('/get')
  get(): string {
    return 'Hello masbrooo ini get method di nest js';
  }
}

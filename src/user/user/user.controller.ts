import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response,Request } from 'express';

@Controller('/api/users')
export class UserController {
  //cookie set
  @Get('/set-cookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('succes set cookie');
  }

  @Get('/get-cookie')
  getCookie(@Req() request: Request) {
    return request.cookies['name'];
  }

  // params and query http and async
  @Get('/hello')
  @HttpCode(200)
  async getIdParams(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
  ): Promise<string> {
    return `GET QUERY PARAMS NAME : ${firstName} ${lastName}`;
  }

  // sample response http
  @Get('/response')
  getResponse(@Res() res: Response): Response {
    return res
      .status(200)
      .send('Hello World! ini response di nest js tapi ini not recomended');
  }

  // response http
  @Get('/walawe')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getWalawe(): Record<string, string> {
    return {
      data: 'wathehelll',
      apaan: 'gatau',
    };
  }

  @Get('/:id')
  getId(@Param('id') id: string): string {
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

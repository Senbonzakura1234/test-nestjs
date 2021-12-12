import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        return 'Hello';
    }

    @Post()
    postHello(@Body() appDto: AppDto): AppDto {
        return this.appService.getDto(appDto);
    }
}

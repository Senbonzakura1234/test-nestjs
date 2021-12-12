import { Body, Controller, Get } from '@nestjs/common';
import { AppDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(@Body() appDto: AppDto): AppDto {
        return this.appService.getDto(appDto);
    }
}

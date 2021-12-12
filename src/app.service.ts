import { Injectable } from '@nestjs/common';
import { AppDto } from './app.dto';

@Injectable()
export class AppService {
    getDto(appDto: AppDto): AppDto {
        console.log(appDto);
        return appDto;
    }
}

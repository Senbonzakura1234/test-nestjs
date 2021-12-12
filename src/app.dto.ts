import { IsString } from 'class-validator';

export class AppDto {
    @IsString()
    content: string;
}

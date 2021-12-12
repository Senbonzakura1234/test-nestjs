import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppDto } from './app.dto';
import { AppService } from './app.service';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return void', () => {
            expect(appController.getHello()).toBe('Hello');
        });
        it('should return DTO', () => {
            const appDto: AppDto = { content: 'Hello World!' };
            expect(appController.postHello(appDto)).toBe(appDto);
        });
    });
});

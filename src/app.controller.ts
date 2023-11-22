import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CommandsDTO } from './dto/commands.dto';
import { BaseMessageChunk } from 'langchain/schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/process-text')
  processText(@Body() commands: CommandsDTO): Promise<BaseMessageChunk> {
    return this.appService.processText(commands);
  }
}

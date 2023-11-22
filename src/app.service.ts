import { Injectable } from '@nestjs/common';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { ChatPromptTemplate } from 'langchain/prompts';
import { CommandsDTO } from './dto/commands.dto';
import { BaseMessageChunk } from 'langchain/schema';

@Injectable()
export class AppService {
  async processText(commandsDTO: CommandsDTO): Promise<BaseMessageChunk> {
    if (!commandsDTO) {
      throw new Error('You have not passed any commands.');
    }
    const template = `You are a helpful assistant who handles the cosmonaut commands. 
    A user will give a list of commands, and you should generate some answer to each given command in the list. 
    For example, for a command like 'Fire up the engine number 1', reply something like 'Successfully fired up the engine number 1'.`;

    const humanTemplate = '{commands}';

    const chatPrompt = ChatPromptTemplate.fromMessages([
      ['system', template],
      ['human', humanTemplate],
    ]);

    const model = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
    });

    const chain = chatPrompt.pipe(model);

    const result = await chain.invoke({
      commands: commandsDTO.commands,
    });

    if (!result) {
      throw new Error('Something went wrong with processing commands');
    }

    return result;
  }
}

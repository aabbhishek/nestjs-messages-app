import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-messages.dto';
import { MassagesService } from './messages.service';

@Controller('massages')
export class MassagesController {
  constructor(public messageService: MassagesService) {}

  @Get()
  listMessage() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: createMessageDto) {
    return this.messageService.create(body.content);
  }
  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}

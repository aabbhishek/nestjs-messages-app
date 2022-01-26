import { Module } from '@nestjs/common';
import { MassagesController } from './massages.controller';
import { MessagesRepository } from './messages.repository';
import { MassagesService } from './messages.service';

@Module({
  controllers: [MassagesController],
  providers: [MassagesService, MessagesRepository],
})
export class MessagesModule {}

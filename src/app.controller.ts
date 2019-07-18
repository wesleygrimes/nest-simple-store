import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InMemoryEntity, InMemoryService } from './in-memory-store';

export interface User extends InMemoryEntity {
  firstName: string;
  lastName: string;
}

@Controller()
export class AppController {
  constructor(private readonly userRepo: InMemoryService<User>) {
    this.userRepo.create({ firstName: 'Wes', lastName: 'Grimes' });
    this.userRepo.create({ firstName: 'Chris', lastName: 'Whited' });
  }

  @Get('users')
  getAllUsers(): User[] {
    return this.userRepo.getAll();
  }

  @Get('users/:id')
  getUser(@Param() id: number): User {
    return this.userRepo.get(id);
  }

  @Post('users')
  createUser(@Body() user: User): User {
    return this.userRepo.create(user);
  }
}

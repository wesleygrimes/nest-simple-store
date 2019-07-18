import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SimpleStore } from './simple-store';
import { SimpleStoreEntity } from './simple-store/models';

export interface User extends SimpleStoreEntity {
  firstName: string;
  lastName: string;
}

@Controller()
export class AppController {
  constructor(private readonly store: SimpleStore<User>) {
    this.store.create({ firstName: 'Wes', lastName: 'Grimes' });
    this.store.create({ firstName: 'Chris', lastName: 'Whited' });
  }

  @Get('users')
  getAllUsers(): User[] {
    return this.store.getAll();
  }

  @Get('users/:id')
  getUser(@Param() id: number): User {
    return this.store.get(id);
  }

  @Post('users')
  createUser(@Body() user: User): User {
    return this.store.create(user);
  }
}

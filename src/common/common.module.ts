import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './guards/api-key.guard';

@Module({
    providers: [{
        provide: 'APP_GUARD',
        useClass: ApiKeyGuard,
    }]
})
export class CommonModule { }

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiKeyGuard } from './guards/api-key.guard';
import { LoggingMiddleware } from './middleware/logging.middleware';

@Module({
    providers: [{
        provide: 'APP_GUARD',
        useClass: ApiKeyGuard,
    }]
})
export class CommonModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggingMiddleware).forRoutes('*');
    }

}

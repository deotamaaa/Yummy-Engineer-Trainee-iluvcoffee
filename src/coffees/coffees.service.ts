import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Cappuccino',
            brand: 'Froilà',
            flavors: ['vanilla', 'caramel'],
        }
    ];

    findAll(): Coffee[] {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(item => item.id === +id);
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
    }

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {

        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}

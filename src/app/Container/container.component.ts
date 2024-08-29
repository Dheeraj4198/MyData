import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Product } from '../../Models/custom';
import { LowerCasePipe } from '@angular/common';

@Component({
    selector: 'app-Container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ContainerComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }

    //-----------------------------------------------------------------------------------------
    products = [
        { id: 1, Name: 'Dheeraj', Age: 23, Gender: 'male', IsActive: 'true' },
        { id: 2, Name: 'Vivek', Age: 22, Gender: 'male', IsActive: 'true' },
        { id: 3, Name: 'John', Age: 22, Gender: 'male', IsActive: 'false' },
        { id: 4, Name: 'catrinre', Age: 23, Gender: 'female', IsActive: 'true' }
    ]

    //-----------------------------------------------------------------------------------------
    all: number = 10;
    free: number = 13;
    @Input('total') premium: number = 100;

    //-----------------------------------------------------------------------------------------
    sayHello(inputEl: HTMLInputElement) {
        alert('Hello ' + inputEl.value);
    }

    //-----------------------------------------------------------------------------------------
    selectedName: any;
    selectedProducts(name: string) {
        this.selectedName = name;
    }
    productss: Product[] = [
        { id: 1, Name: 'Dheeraj1', Age: 23, Gender: 'male', IsActive: 'true' },
        { id: 2, Name: 'Vivek1', Age: 22, Gender: 'male', IsActive: 'true' },
        { id: 3, Name: 'John1', Age: 22, Gender: 'male', IsActive: 'false' },
        { id: 4, Name: 'catrinre1', Age: 23, Gender: 'female', IsActive: 'true' }
    ]
    //-----------------------------------------------------------------------------------------

    title = 'ViewChild';
    @ViewChild('dobInput') dateOfBirth: ElementRef = new ElementRef(null);
    @ViewChild('ageInput') age: ElementRef = new ElementRef(null);

    CalculateAge() {
        let birthyear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
        let currentyear = new Date().getFullYear();
        let age = currentyear - birthyear;
        this.age.nativeElement.value = age;
        // console.log(this.dateOfBirth);
        // console.log(this.age);
    }

    //-----------------------------------------------------------------------------------------


}
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Customer, Representative } from 'src/app/demo/api/customer';
import { Product } from 'src/app/demo/api/product';
import { CustomerService } from 'src/app/demo/service/customer.service';

import { LectureService } from '../services/lecture.service';
import { Lecture } from '../models/lecture';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss'],
  providers: [MessageService]
})
export class LecturesComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    lectures: Lecture[] = [];

    lecture: Lecture = {
        IDLectures: 0,
        Date: new Date(),
        IDArticle: 0,
        IDChaineMontage: 0,
        IDEmploye: 0,
        IDOFabrication: 0,
        IDLancement: 0,
        Quantite: 0,
        Temps: 0,
        LibTaille: '',
        IDOperation: 0,
        NumTicket: 0,
        IdPhase: 0,
        IDTiers: 0,
        IDPacket: 0,
        IDGamme: 0
    };

    selectedProducts: Lecture[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private lectureService: LectureService, private messageService: MessageService) { }

    ngOnInit() {
        this.lectureService.getAllLectures().subscribe(data => {this.lectures = data
         console.log(data);

        });

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.lecture = {
            IDLectures: 0,
            Date: new Date(),
            IDArticle: 0,
            IDChaineMontage: 0,
            IDEmploye: 0,
            IDOFabrication: 0,
            IDLancement: 0,
            Quantite: 0,
            Temps: 0,
            LibTaille: '',
            IDOperation: 0,
            NumTicket: 0,
            IdPhase: 0,
            IDTiers: 0,
            IDPacket: 0,
            IDGamme: 0
        };
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(lecture: Lecture) {
        this.lecture = { ...lecture };
        this.productDialog = true;
    }

    deleteProduct(lecture: Lecture) {
        this.deleteProductDialog = true;
        this.lecture = { ...lecture };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.lectures = this.lectures.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.lectures = this.lectures.filter(val => val.IDLectures !== this.lecture.IDLectures);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'lecture Deleted', life: 3000 });
        this.lecture = {
            IDLectures: 0,
            Date: new Date(),
            IDArticle: 0,
            IDChaineMontage: 0,
            IDEmploye: 0,
            IDOFabrication: 0,
            IDLancement: 0,
            Quantite: 0,
            Temps: 0,
            LibTaille: '',
            IDOperation: 0,
            NumTicket: 0,
            IdPhase: 0,
            IDTiers: 0,
            IDPacket: 0,
            IDGamme: 0
        };
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.lecture.LibTaille?.trim()) {
            if (this.lecture.IDLectures) {
                // @ts-ignore
                this.product.inventoryStatus = this.lecture.inventoryStatus.value ? this.lecture.inventoryStatus.value : this.product.inventoryStatus;
                this.lectures[this.findIndexById(this.lecture.IDLectures)] = this.lecture;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                // this.lecture.IDArticle = this.createId();
                // this.lecture.Article = this.createId();
                // this.lecture.image = 'lecture-placeholder.svg';
                // @ts-ignore
                this.lecture.inventoryStatus = this.lecture.inventoryStatus ? this.lecture.inventoryStatus.value : 'INSTOCK';
                this.lectures.push(this.lecture);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'lecture Created', life: 3000 });
            }

            this.lectures = [...this.lectures];
            this.productDialog = false;
            this.lecture = {
                IDLectures: 0,
                Date: new Date(),
                IDArticle: 0,
                IDChaineMontage: 0,
                IDEmploye: 0,
                IDOFabrication: 0,
                IDLancement: 0,
                Quantite: 0,
                Temps: 0,
                LibTaille: '',
                IDOperation: 0,
                NumTicket: 0,
                IdPhase: 0,
                IDTiers: 0,
                IDPacket: 0,
                IDGamme: 0
            };
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.lectures.length; i++) {
            if (this.lectures[i].IDLectures === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

}

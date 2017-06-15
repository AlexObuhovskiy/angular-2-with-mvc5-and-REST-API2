export class ProductModel {
    Id: number;
    Type: ProductType;
    TypeAsString: string;
    WoodType: WoodType;
    WoodTypeAsString: string;
    Length: number;
    Width: number;
    Price: number;
}

export enum ProductType {
    Platbands, //Налічник
    Plinth, // Плінтус
    Lining, // Вагонка
    Bead, // Штапік
}

export enum WoodType {
    Oak, // Дуб
    Ash, // Ясен
    Pine, // Сосна
    Aspen, // Осика
    Linden, // Липа
    Alder // Вільха
}

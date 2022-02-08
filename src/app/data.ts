import { catchError, delay, EMPTY, Observable, of } from "rxjs"

export interface IProduct {
    _id: string;
    title: string;
    img: string;
    price: number;
    author: string;
    isFavorite: boolean;
}

export const products = [
    {
        _id: '5g5fjgdj55654j7b7de1',
        title: 'Product 2345',
        img: 'assets/img/1740730.jpg',
        price: 221,
        author: 'Vlad',
        isFavorite: true,
    }, {
        _id: '5g5fjgdj55654j7b7de2',
        title: 'Product 2347',
        img: 'assets/img/1740730.jpg',
        price: 345,
        author: 'Vlad',
        isFavorite: true,
    }, {
        _id: '5g5fjgdj55654j7b7de3',
        title: 'Product 2349',
        img: 'assets/img/1740730.jpg',
        price: 4235,
        author: 'Igor',
        isFavorite: false,
    }, {
        _id: '5g5fjgdj55654j7b7de4',
        title: 'Product 6365',
        img: 'assets/img/1740730.jpg',
        price: 3421,
        author: 'Dmitry',
        isFavorite: true,
    }, {
        _id: '5g5fjgdj55654j7b7de5',
        title: 'Product 45213',
        img: 'assets/img/1740730.jpg',
        price: 5465,
        author: 'Sem',
        isFavorite: false,
    }, {
        _id: '5g5fjgdj55654j7b7de6',
        title: 'Product 24245',
        img: 'assets/img/1740730.jpg',
        price: 8532,
        author: 'Vlad',
        isFavorite: false,
    }, {
        _id: '5g5fjgdj55654j7b7de7',
        title: 'Product 525',
        img: 'assets/img/1740730.jpg',
        price: 245626,
        author: 'Gregory',
        isFavorite: false,
    }, {
        _id: '5g5fjgdj55654j7b7de8',
        title: 'Product 8979',
        img: 'assets/img/1740730.jpg',
        price: 2427,
        author: 'Vlad',
        isFavorite: false,
    }, {
        _id: '5g5fjgdj55654j7b7de9',
        title: 'Product 2346747',
        img: 'assets/img/1740730.jpg',
        price: 7585,
        author: 'Vlad',
        isFavorite: true,
    }, {
        _id: '5g5fjgdj55654j7b7de20',
        title: 'Product 563',
        img: 'assets/img/1740730.jpg',
        price: 654785,
        author: 'Vlad',
        isFavorite: false,
    },
]

export interface IProductsRes {
    products: IProduct[];
    serviceError: boolean | null;
}

export const products$: Observable<IProductsRes> = of(
    { products, serviceError: null }
).pipe(
    delay(500),
    catchError(() => [])
);
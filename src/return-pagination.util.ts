interface IAchPagination<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    size: number;
    page: number;
    numberOfElements: number;
    last: boolean;
    first: boolean;
    empty: boolean;
}

export class AchPagination<T> implements IAchPagination<T>{
    size: number;
    page: number;
    content: T[];
    totalElements: number;
    totalPages: number;
    numberOfElements: number;
    empty: boolean;
    last: boolean;
    first: boolean;

    constructor(
        content: T[],
        quantityAll: number,
        page: number,
        size: number
    ) {
        this.page = page;
        this.size = size;

        this.content = content;
        this.totalElements = quantityAll;

        const _totalPages = Math.floor((quantityAll - 1) / size) + 1;
        this.totalPages = content.length === 0 ? null as any : _totalPages;

        this.empty = content.length === 0 ? true : false;

        this.numberOfElements = content.length === 0 ? null as any : content.length;

        const getFirst = (): boolean => {
            if (content.length === 0) return false
            return (_totalPages - page) === _totalPages ? false : true
        }
        this.first = getFirst();

        const getLast = (): boolean => {
            if (content.length === 0) return false
            return (page + 1) === _totalPages ? false : true
        }
        this.last = getLast();
    }
}
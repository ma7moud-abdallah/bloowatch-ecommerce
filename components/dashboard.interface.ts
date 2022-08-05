export type sortOrder = 'default' |'ascending' | 'descending';

export interface ISortOptions {
    name: string;
    value: string;
    sortOrder: sortOrder;
    current: boolean;
}
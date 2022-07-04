/// <reference types="react" />
import { GridRenderCellParams, GridCellParams, GridColDef, GridRowModel, DataGridProProps } from '@mui/x-data-grid-pro';
import * as React from 'react';
import { GridCellParams as GridCellParams$1, GridRenderEditCellParams } from '@mui/x-data-grid';

declare function renderAvatar(params: GridRenderCellParams): JSX.Element;

declare function renderCountry(params: GridRenderCellParams): JSX.Element;

declare function renderEmail(params: GridCellParams): JSX.Element;

declare function renderIncoterm(params: GridCellParams): JSX.Element;

interface DemoLinkProps {
    href: string;
    children: string;
}
declare const DemoLink: React.NamedExoticComponent<DemoLinkProps>;
declare function renderLink(params: GridCellParams): JSX.Element;

declare function renderPnl(params: GridCellParams$1): JSX.Element;

declare function renderProgress(params: GridCellParams): JSX.Element;

declare function renderRating(params: GridCellParams): JSX.Element;

declare function renderStatus(params: GridCellParams): JSX.Element;

declare function renderTotalPrice(params: GridCellParams$1): JSX.Element;

declare function renderEditCurrency(params: GridRenderEditCellParams): JSX.Element;

declare function renderEditProgress(params: GridRenderEditCellParams): JSX.Element;

declare function renderEditStatus(params: GridRenderEditCellParams): JSX.Element;

declare function renderEditIncoterm(params: GridRenderEditCellParams): JSX.Element;

declare function renderEditRating(params: GridRenderEditCellParams): JSX.Element;

declare function renderEditCountry(params: GridRenderEditCellParams): JSX.Element;

interface GridDataGeneratorContext {
    /**
     * Values already attributed to this column.
     * Only defined if the column has the uniqueness mode activated.
     * The keys represents the random value and the value represents the amount of rows that already have this value.
     * This allows to data generators to add a suffix to the returned value to force the uniqueness.
     */
    values?: Record<string, number>;
}
interface GridColDefGenerator extends GridColDef {
    generateData?: (row: any, context: GridDataGeneratorContext) => any;
    /**
     * If `true`, each row will have a distinct value
     * If several rows are generated with the same value, then a suffix will be added to the 2nd, 3rd, ...
     * @default false
     */
    dataGeneratorUniquenessEnabled?: boolean;
}

declare type ColumnDataGenerator<Value> = (data: any, context: GridDataGeneratorContext) => Value;
declare const random: (min: number, max: number) => number;
declare const randomInt: (min: number, max: number) => number;
declare const randomPrice: (min?: number, max?: number) => number;
declare const randomRate: () => number;
declare const randomDate: (start: Date, end: Date) => Date;
declare const randomArrayItem: <T>(arr: T[]) => T;
declare const randomBoolean: () => boolean;
declare const randomColor: () => "#e91e63" | "#2196f3" | "#ff9800" | "#f44336" | "#4caf50" | "#03a9f4" | "#9c27b0";
declare const randomId: () => string;
declare const randomDesk: () => string;
declare const randomCommodity: () => string;
declare const randomTraderName: () => string;
declare const randomUserName: () => string;
declare const randomEmail: () => string;
declare const randomUrl: () => string;
declare const randomPhoneNumber: () => string;
declare const randomUnitPrice: () => number;
declare const randomUnitPriceCurrency: () => string;
declare const randomQuantity: () => number;
declare const randomFeeRate: () => number;
declare const randomIncoterm: () => string;
declare const randomStatusOptions: () => string;
declare const randomPnL: () => number;
declare const randomMaturityDate: () => Date;
declare const randomTradeDate: () => Date;
declare const randomBrokerId: () => string;
declare const randomCompanyName: () => string;
declare const randomCountry: () => {
    value: string;
    code: string;
    label: string;
    phone: string;
    suggested?: undefined;
} | {
    value: string;
    code: string;
    label: string;
    phone: string;
    suggested: boolean;
};
declare const randomCurrency: () => string;
declare const randomAddress: () => string;
declare const randomCity: () => string;
declare const randomTaxCode: () => string;
declare const randomContractType: () => string;
declare const randomRateType: () => string;
declare const randomCreatedDate: () => Date;
declare const randomUpdatedDate: () => Date;
declare const randomJobTitle: () => string;
declare const randomRating: () => number;
declare const randomName: ColumnDataGenerator<string>;
declare const generateFilledQuantity: (data: {
    quantity: number;
}) => number;
declare const generateIsFilled: (data: {
    quantity: number;
    filledQuantity: number;
}) => boolean;

interface GridDemoData {
    rows: GridRowModel[];
    columns: GridColDefGenerator[];
}
declare function getRealGridData(rowLength: number, columns: GridColDefGenerator[]): Promise<GridDemoData>;

declare const getCommodityColumns: (editable?: boolean) => GridColDefGenerator[];

declare const getEmployeeColumns: () => GridColDefGenerator[];

interface AddPathToDemoDataOptions {
    /**
     * The field used to generate the path
     * If not defined, the tree data will not be built
     */
    groupingField?: string;
    /**
     * The depth of the tree
     * @default: 1
     */
    maxDepth?: number;
    /**
     * The average amount of children in a node
     * @default: 2
     */
    averageChildren?: number;
}
interface DemoTreeDataValue extends Pick<DataGridProProps, 'getTreeDataPath' | 'treeData' | 'groupingColDef'>, GridDemoData {
}

declare type DemoDataReturnType = {
    data: DemoTreeDataValue;
    loading: boolean;
    setRowLength: (count: number) => void;
    loadNewData: () => void;
};
declare type DataSet = 'Commodity' | 'Employee';
interface UseDemoDataOptions {
    dataSet: DataSet;
    rowLength: number;
    maxColumns?: number;
    editable?: boolean;
    treeData?: AddPathToDemoDataOptions;
}
declare const useDemoData: (options: UseDemoDataOptions) => DemoDataReturnType;

export { DemoDataReturnType, DemoLink, GridColDefGenerator, GridDataGeneratorContext, GridDemoData, UseDemoDataOptions, generateFilledQuantity, generateIsFilled, getCommodityColumns, getEmployeeColumns, getRealGridData, random, randomAddress, randomArrayItem, randomBoolean, randomBrokerId, randomCity, randomColor, randomCommodity, randomCompanyName, randomContractType, randomCountry, randomCreatedDate, randomCurrency, randomDate, randomDesk, randomEmail, randomFeeRate, randomId, randomIncoterm, randomInt, randomJobTitle, randomMaturityDate, randomName, randomPhoneNumber, randomPnL, randomPrice, randomQuantity, randomRate, randomRateType, randomRating, randomStatusOptions, randomTaxCode, randomTradeDate, randomTraderName, randomUnitPrice, randomUnitPriceCurrency, randomUpdatedDate, randomUrl, randomUserName, renderAvatar, renderCountry, renderEditCountry, renderEditCurrency, renderEditIncoterm, renderEditProgress, renderEditRating, renderEditStatus, renderEmail, renderIncoterm, renderLink, renderPnl, renderProgress, renderRating, renderStatus, renderTotalPrice, useDemoData };

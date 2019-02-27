import { VNode } from 'vue';
import { ScopedSlot } from 'vue/types/vnode';

// 筛选表单
type FilterType = 'input' | 'select' | 'cascader' | 'levelcode' | 'datetime' | 'date' | 'datetimerange' | 'checkboxButton';
export interface FilterFormList {
  key: string;
  type: FilterType;
  label: string;
  placeholder: string | string[];
  value?: string[];
  fieldNames?: any;
  options?: Array<{ value: any, label: string }>;
  change?: Function;
  disabledTime?: (dates: [object, object], partial: 'start'|'end') => any;
}

export interface TableColumnFilter {
  text: string,
  value: any
}

export interface ColumnFilterItem {
  text?: string;
  value?: string;
  children?: any;
}

export declare type SortOrder = 'ascend' | 'descend';

// column
export interface tableList {
  /**
   * specify how content is aligned
   * @default 'left'
   * @type string
   */
  align: 'left' | 'right' | 'center';

  /**
   * Span of this column's title
   * @type number
   */
  colSpan: number;

  /**
   * Display field of the data record, could be set like a.b.c
   * @type string
   */
  dataIndex: string;

  /**
   * Default order of sorted values: 'ascend' 'descend' null
   * @type string
   */
  defaultSortOrder: SortOrder;

  /**
   * Customized filter overlay
   * @type any (slot)
   */
  filterDropdown: any;

  /**
   * Whether filterDropdown is visible
   * @type boolean
   */
  filterDropdownVisible: boolean;

  /**
   * Whether the dataSource is filtered
   * @default false
   * @type boolean
   */
  filtered: boolean;

  /**
   * Controlled filtered value, filter icon will highlight
   * @type string[]
   */
  filteredValue: string[];

  /**
   * Customized filter icon
   * @default false
   * @type any
   */
  filterIcon: any;

  /**
   * Whether multiple filters can be selected
   * @default true
   * @type boolean
   */
  filterMultiple: boolean;

  /**
   * Filter menu config
   * @type object[]
   */
  filters: ColumnFilterItem[];

  /**
   * Set column to be fixed: true(same as left) 'left' 'right'
   * @default false
   * @type boolean | string
   */
  fixed: boolean | 'left' | 'right';

  /**
   * Unique key of this column, you can ignore this prop if you've set a unique dataIndex
   * @type string
   */
  key: string;

  /**
   * Renderer of the table cell. The return value should be a VNode,
   * or an object for colSpan/rowSpan config
   * @type Function | ScopedSlot
   */
  customRender: Function | ScopedSlot;

  /**
   * Sort function for local sort, see Array.sort's compareFunction.
   * If you need sort buttons only, set to true
   * @type boolean | Function
   */
  sorter: boolean | Function;

  /**
   * Order of sorted values: 'ascend' 'descend' false
   * @type boolean | string
   */
  sortOrder: boolean | SortOrder;

  /**
   * Title of this column
   * @type any (string | slot)
   */
  title: any;

  /**
   * Width of this column
   * @type string | number
   */
  width: string | number;

  /**
   * Set props on per cell
   * @type Function
   */
  customCell: (
    record: any,
    rowIndex: number,
  ) => {
    props: object;
    attrs: object;
    on: object;
    class: object;
    style: object;
    nativeOn: object;
  };

  /**
   * Set props on per header cell
   * @type
   */
  customHeaderCell: (
    column: any,
  ) => {
    props: object;
    attrs: object;
    on: object;
    class: object;
    style: object;
    nativeOn: object;
  };

  /**
   * Callback executed when the confirm filter button is clicked,
   * Use as a filter event when using template or jsx
   * @type Function
   */
  onFilter: Function;

  /**
   * Callback executed when filterDropdownVisible is changed,
   * Use as a filterDropdownVisible event when using template or jsx
   * @type Function
   */
  onFilterDropdownVisibleChange: (visible: boolean) => void;

  /**
   * When using columns, you can use this property to configure
   * the properties that support the slot,
   * such as slots: { filterIcon: 'XXX'}
   * @type object
   */
  slots: object;

  /**
   * When using columns, you can use this property to configure
   * the properties that support the slot-scope,
   * such as scopedSlots: { customRender: 'XXX'}
   * @type object
   */
  scopedSlots: object;
}
// 操作
export interface Opreat {
  key: string,
  rowKey: string,
  color: Function | string,
  text: Function | string,
  disabled?: Function;
  roles: Function | boolean,
  msg?: Function | string,
}
// 表格数据
export interface tableTag {
  key: number,
  color: string,
  value: number,
  label: string,
}

export interface menuItem {
  id: number,
  title: string,
  url?: string,
  icon?: string,
  permission: string | Array<string> | boolean,
  children?: Array<menuItem>,
}

export interface MockConfig {
  url: string,
  headers: any,
  body: string,
}

export interface routerItem {
  name?: string,
  component?: any,
  path: string,
  icon?: string,
  hidden?: boolean,
  permission?: string | string[] | boolean,
  redirect?: string | object,
  children?: routerItem[],
  meta?: any,
}

export interface Directives {
  name: string,
  value: any,
  modifiers: object,
}
type CoordinateSystem = 'bd09ll' | 'gcj02ll';
export interface MapCarData {
  id: string,
  direction: number,
  lat: number,
  lng: number,
  plateNum: string,
  speed: number,
  coordinateSystem: CoordinateSystem,
}
// 坐标
export interface Point {
  lng: number,
  lat: number,
}
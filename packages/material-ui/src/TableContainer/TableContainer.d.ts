import { SxProps } from '@material-ui/system';
import * as React from 'react';
import { Theme } from '..';
import { OverridableComponent, OverrideProps } from '../OverridableComponent';

export interface TableContainerTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    /**
     * The content of the component, normally `Table`.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: {
      /** Styles applied to the root element. */
      root?: string;
    };
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx?: SxProps<Theme>;
  };
  defaultComponent: D;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableContainer API](https://material-ui.com/api/table-container/)
 */
declare const TableContainer: OverridableComponent<TableContainerTypeMap>;

export type TableContainerClassKey = keyof NonNullable<TableContainerTypeMap['props']['classes']>;

export type TableContainerProps<
  D extends React.ElementType = TableContainerTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableContainerTypeMap<P, D>, D>;

export default TableContainer;

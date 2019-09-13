import { CheckboxVisibility, DetailsList, DetailsListLayoutMode, IColumn, IDetailsList, Selection } from 'office-ui-fabric-react/lib/DetailsList';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { createRef } from 'office-ui-fabric-react/lib/Utilities';
import * as React from 'react';
import { IEmployee } from '../Interfaces/IEmployee';
import styles from './EmployeeSelectedList.module.scss';
import ShowProfileLink from './ShowProfileLink';



export interface IEmployeeSelectedListProps {
  Employees: IEmployee[];
}

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'DisplayName',
    fieldName: 'displayName',
    minWidth: 50,
    maxWidth: 150,
    isResizable: true,
    ariaLabel: 'DisplayName'
  },
  {
    key: 'column2',
    name: 'Mail',
    fieldName: 'mail',
    minWidth: 50,
    maxWidth: 150,
    isResizable: true,
    ariaLabel: 'Mail'
  } as IColumn,
  {
    key: 'column3',
    name: 'Phone',
    fieldName: 'mobilePhone',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    ariaLabel: 'Phone'
  } as IColumn, ,
  {
    key: 'column4',
    name: 'Show Profile',
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Show Profile',
    onRender: (item: IEmployee) => {
      return   <ShowProfileLink target="_blank" href={"https://eur.delve.office.com/?u=" + item.id} displayName={item.displayName}></ShowProfileLink>;
    }
  } as IColumn,
];

export default class EmployeeSelectedList extends React.Component<IEmployeeSelectedListProps, {}> {

  constructor(props) {
    super(props);
  }

  private _detailsList = createRef<IDetailsList>();
  private _selection: Selection;

  public render(): React.ReactElement<IEmployeeSelectedListProps> {
    return (
      <div>
        <Label className={styles.label}>Selected Employees:</Label>
        <DetailsList
          componentRef={this._detailsList}
          items={this.props.Employees}
          columns={_columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.fixedColumns}
          checkboxVisibility={CheckboxVisibility.hidden}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        />
      </div>
    );
  }
}

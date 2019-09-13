import { Placeholder } from "@pnp/spfx-controls-react/lib/Placeholder";
import * as React from 'react';
import { IEmployee } from '../Interfaces/IEmployee';
import EmployeeSelectedList from './EmployeeSelectedList';
import EmployeeSelector from './EmployeeSelector';
import { ISPFxExampleProjectProps } from './ISPFxExampleProjectProps';
import styles from './SPFxExampleProject.module.scss';

export interface ISPFxExampleProjectState {
  selectedEmployees: IEmployee[];
}

export default class SPFxExampleProject extends React.Component<ISPFxExampleProjectProps, ISPFxExampleProjectState> {

  constructor(props) {
    super(props);
    this.state = { selectedEmployees: [] };
  }

  protected OnEmployeeSelected(selectedEmployeeId: string) {
    let selected: IEmployee[] = this.props.employees.filter((empl) => empl.id === selectedEmployeeId);
    if (selected.length > 0) {
      this.setState({ selectedEmployees: this.state.selectedEmployees.concat(selected) });
    }
  }

  private _onConfigure() {
    // Context of the web part
    this.props.context.propertyPane.open();
  }


  public render(): React.ReactElement<ISPFxExampleProjectProps> {
    let row;
    if (this.props.darkTheme) {
      row = <div className={styles.rowdark}>
        <EmployeeSelector employees={this.props.employees} OnEmployeeSelected={(value) => this.OnEmployeeSelected(value)} ></EmployeeSelector>
        <EmployeeSelectedList Employees={this.state.selectedEmployees}></EmployeeSelectedList>
      </div>;
    } else {
      row = <div className={styles.row}>
        <EmployeeSelector employees={this.props.employees} OnEmployeeSelected={(value) => this.OnEmployeeSelected(value)} ></EmployeeSelector>
        <EmployeeSelectedList Employees={this.state.selectedEmployees}></EmployeeSelectedList>
      </div>;
    }

    return (
      this.props.employees.length > 0 ? (
        <div className={styles.SPFxExampleProject}>
          <div className={styles.container}>
            {row}
          </div>
        </div>) : (
          < Placeholder
            iconName='Edit'
            iconText='Configure your web part'
            description='Please configure the web part.'
            buttonLabel='Configure'
            onConfigure={this._onConfigure.bind(this)} />)
    );
  }
}

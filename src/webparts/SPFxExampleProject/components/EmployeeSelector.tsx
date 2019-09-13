import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import * as React from 'react';
import { IEmployee } from '../Interfaces/IEmployee';


export interface IEmployeeSelectorProps {
    employees: IEmployee[];
    OnEmployeeSelected?: { (selectedEmployeeId: string): void };
}

export default class EmployeeSelector extends React.Component<IEmployeeSelectorProps, {}> {

    constructor(props) {
        super(props);
        this.state = { selectedEmployee: null };
    }

    public changeState = (item: IDropdownOption): void => {
        this.props.OnEmployeeSelected(item.key.toString());
    }

    public render(): React.ReactElement<IEmployeeSelectorProps> {
        let employeeOptions: any[] = this.props.employees.map((empl: IEmployee) => { return { key: empl.id, text: empl.displayName }; });
        return (
            <div>
                <Dropdown
                    placeHolder="Select an Employee"
                    id="EmployeeSelect"
                    ariaLabel="Employee Selector"
                    options={employeeOptions}
                    onChanged={this.changeState}
                />
            </div>
        );
    }
}

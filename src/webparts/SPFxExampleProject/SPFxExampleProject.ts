import { Environment, EnvironmentType, Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneDropdown, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as strings from 'SPFxExampleProjectWebPartStrings';
import { ISPFxExampleProjectProps } from './components/ISPFxExampleProjectProps';
import SPFxExampleProject from './components/SPFxExampleProject';
import { IDataService } from './Interfaces/IDataService';
import { IEmployee } from './Interfaces/IEmployee';
import { IGroupData } from './Interfaces/IGroupData';
import DataService from './services/dataservice';
import MockDataService from './services/mockdataservice';

export interface ISPFxExampleProjectPropsWebPartProps {
  group: string;
  darkTheme: boolean;
}

export default class ReactDemoWebPart extends BaseClientSideWebPart<ISPFxExampleProjectPropsWebPartProps> {

  private _dataService: IDataService;
  private get DataService(): IDataService {
    if (!this._dataService) {
      if (Environment.type in [EnvironmentType.Local, EnvironmentType.Test]) {
        this._dataService = new MockDataService();
      }
      else {
        this._dataService = new DataService(this.context);
      }
    }
    return this._dataService;
  }

  private employees: IEmployee[] = [];
  private groups: IGroupData[] = [];

  protected onPropertyPaneConfigurationStart(): void {
    this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'options');

    this.DataService.getGroups().then((groupData: any) => {
      this.groups = groupData;
      this.context.propertyPane.refresh();
      // clear status indicator
      this.context.statusRenderer.clearLoadingIndicator(this.domElement);
      // re-render the web part as clearing the loading indicator removes the web part body
      this.render();
    })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      });
  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {
    if (propertyPath === 'group' && newValue) {
      if (this.properties.group) {
        // push new list value
        super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
        this.context.statusRenderer.displayLoadingIndicator(this.domElement, 'direct reports');

        this.DataService.getEmployees(this.properties.group).then((employeesResult: IEmployee[]) => {
          this.employees = employeesResult;

          this.context.statusRenderer.clearLoadingIndicator(this.domElement);
          // re-render the web part as clearing the loading indicator removes the web part body
          this.render();
        })
          .catch((error) => {
            console.log(error);
          });
      }
      else {
        super.onPropertyPaneFieldChanged(propertyPath, oldValue, newValue);
      }
    }
  }

  public render(): void {
    const element: React.ReactElement<ISPFxExampleProjectProps> = React.createElement(
      SPFxExampleProject,
      {
        employees: this.employees,
        context: this.context,
        darkTheme: this.properties.darkTheme
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('group', {
                  label: 'Select Group',
                  options: this.groups.map((grp) => { return { key: grp.id, text: grp.displayName }; },
                  )
                }),
                PropertyPaneToggle('darkTheme', {
                  label: 'Dark theme'
                }),
              ]
            }
          ]
        }
      ]
    };
  }
}

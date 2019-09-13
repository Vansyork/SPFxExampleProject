import { MSGraphClient } from '@microsoft/sp-http';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IDataService } from "../Interfaces/IDataService";

export default class DataService implements IDataService {


  constructor(protected context: WebPartContext) {

  }
  public getEmployees(groupId: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          client
            .api(`groups/${groupId}/members`)
            .version("v1.0")
            .get((err, res) => {
              if (err) {
                reject(err);
              }
              resolve(res.value);
            });
        });
    });
  }

  public getGroups(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          client
            .api(`me/memberOf`)
            .version("v1.0")
            .get((err, res) => {
              if (err) {
                reject(err);
              }
              resolve(res.value);
            });
        });
    });
  }
}
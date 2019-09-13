import { IEmployee } from './IEmployee';
import { IGroupData } from './IGroupData';

export interface IDataService {
 getEmployees(groupId: string): Promise<IEmployee[]>;
 getGroups(): Promise<IGroupData[]>;
}
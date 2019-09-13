import { WebPartContext } from "@microsoft/sp-webpart-base";
import { IEmployee } from "../Interfaces/IEmployee";

export interface ISPFxExampleProjectProps {
  employees: IEmployee[];
  context: WebPartContext;
  darkTheme: boolean;
}

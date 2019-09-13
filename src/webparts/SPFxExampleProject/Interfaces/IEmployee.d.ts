export interface IEmployee {
  id: string;
  businessPhones?: (string)[] | (null)[] | null;
  displayName: string | null;
  givenName: string | null;
  jobTitle?: string | null;
  mail: string | null;
  mobilePhone: string | null;
  officeLocation: string | null;
  preferredLanguage: string | null;
  surname: string | null;
  userPrincipalName: string | null;
}

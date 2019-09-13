export interface IGroupData {
  id: string;
  deletedDateTime?: null;
  classification?: null;
  createdDateTime: string;
  creationOptions?: (string)[] | null;
  description: string;
  displayName: string;
  groupTypes?: (string)[] | null;
  mail: string;
  mailEnabled: boolean;
  mailNickname: string;
  onPremisesLastSyncDateTime?: null;
  onPremisesSecurityIdentifier?: null;
  onPremisesSyncEnabled?: null;
  preferredDataLocation?: null;
  proxyAddresses?: (string)[] | null;
  renewedDateTime: string;
  resourceBehaviorOptions?: (null)[] | null;
  resourceProvisioningOptions?: (string)[] | null;
  securityEnabled: boolean;
  visibility: string;
  onPremisesProvisioningErrors?: (null)[] | null;
}

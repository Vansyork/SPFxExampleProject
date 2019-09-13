import { IDataService } from "../Interfaces/IDataService";
import { IEmployee } from "../Interfaces/IEmployee";
import { IGroupData } from "../Interfaces/IGroupData";

export default class MockDataService implements IDataService {
    public getGroups(): Promise<IGroupData[]> {
        let result: IGroupData[] = [
            {
                "id": "ea03591c-fae3-4612-9414-5560ef570b15",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2017-02-08T19:36:51Z",
                "creationOptions": [],
                "description": "Angular 2 Tech Session",
                "displayName": "Angular 2 Tech Session",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "Tasks@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "Tasks",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:Tasks@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2017-02-08T19:36:51Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [],
                "securityEnabled": false,
                "visibility": "Private",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "b237f3ce-1dcc-485b-856a-625efb9d238d",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2016-11-23T13:21:37Z",
                "creationOptions": [],
                "description": "Private group for mock users.",
                "displayName": "mock",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "grp_mock@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "grp_mock",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:grp_mock@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2016-11-23T13:21:37Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [
                    "Team"
                ],
                "securityEnabled": false,
                "visibility": "Private",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "ec43b0d4-b671-4965-a212-e903638ca467",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2018-01-24T09:39:10Z",
                "creationOptions": [],
                "description": "Planner Tech Sessie",
                "displayName": "Planner Tech Sessie",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "PlannerTechSessie@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "PlannerTechSessie",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:PlannerTechSessie@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2018-01-24T09:39:10Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [],
                "securityEnabled": false,
                "visibility": "Private",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "14b7dbbe-3878-4176-8de2-0eb96cd38e9f",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2018-01-26T08:18:51Z",
                "creationOptions": [
                    "ExchangeProvisioningFlags:481"
                ],
                "description": "Certificatie",
                "displayName": "Certificatie",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "Certificatie@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "Certificatie",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:Certificatie@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2018-01-26T08:18:51Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [
                    "Team"
                ],
                "securityEnabled": false,
                "visibility": "Public",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "3c172701-f643-419c-a6ce-93e857a3780f",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2018-01-24T10:07:57Z",
                "creationOptions": [],
                "description": "Peppie en Kokkie",
                "displayName": "Peppie en Kokkie",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "PeppieenKokkie@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "PeppieenKokkie",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:PeppieenKokkie@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2018-01-24T10:07:57Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [],
                "securityEnabled": false,
                "visibility": "Private",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "d2b4c645-301c-4d94-9cdd-343ac09039f7",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2017-11-24T12:00:54Z",
                "creationOptions": [],
                "description": "A plan to build expertise in Office 365 for the mock team",
                "displayName": "Office 365 Knowledge",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "Office365Knowledge@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "Office365Knowledge",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:Office365Knowledge@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2017-11-24T12:00:54Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [
                    "Team"
                ],
                "securityEnabled": false,
                "visibility": "Private",
                "onPremisesProvisioningErrors": []
            },
            {
                "id": "0fe1759c-4cdb-4b65-bcdd-d565cfd8ecb9",
                "deletedDateTime": null,
                "classification": null,
                "createdDateTime": "2018-03-01T19:44:35Z",
                "creationOptions": [
                    "ExchangeProvisioningFlags:481"
                ],
                "description": "Technische sessies",
                "displayName": "Technische sessies",
                "groupTypes": [
                    "Unified"
                ],
                "mail": "Technischesessies@mock.onmicrosoft.com",
                "mailEnabled": true,
                "mailNickname": "Technischesessies",
                "onPremisesLastSyncDateTime": null,
                "onPremisesSecurityIdentifier": null,
                "onPremisesSyncEnabled": null,
                "preferredDataLocation": null,
                "proxyAddresses": [
                    "SMTP:Technischesessies@mock.onmicrosoft.com"
                ],
                "renewedDateTime": "2018-03-01T19:44:35Z",
                "resourceBehaviorOptions": [],
                "resourceProvisioningOptions": [
                    "Team"
                ],
                "securityEnabled": false,
                "visibility": "Public",
                "onPremisesProvisioningErrors": []
            }
        ];
        return Promise.resolve(result);
    }
    public getEmployees(groupId: string): Promise<IEmployee[]> {
        let result: IEmployee[] = [
            {
                "id": "a880103d-a9bc-4657-83b5-e2821bc29da5",
                "businessPhones": [],
                "displayName": "Joske Vermeulen",
                "givenName": "Joske",
                "jobTitle": null,
                "mail": "joske.vermeulen@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": "en-GB",
                "surname": "Vermeulen",
                "userPrincipalName": "joske.vermeulen@mock.onmicrosoft.com"
            },
            {
                "id": "de98bf87-bf50-429e-a8f5-28ae43bd047d",
                "businessPhones": [],
                "displayName": "Belinda Blink",
                "givenName": "Belinda",
                "jobTitle": null,
                "mail": "Belinda.Blink@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": null,
                "surname": "Blink",
                "userPrincipalName": "Belinda.Blink@mock.onmicrosoft.com"
            },
            {
                "id": "2065e492-cd50-4b85-9132-9a4405c1cdb4",
                "businessPhones": [],
                "displayName": "Flipper DeMan",
                "givenName": "Flipper",
                "jobTitle": null,
                "mail": "Flipper.DeMan@mock.onmicrosoft.com",
                "mobilePhone": "000 000 111 22",
                "officeLocation": null,
                "preferredLanguage": "en-US",
                "surname": "DeMan",
                "userPrincipalName": "Flipper.DeMan@mock.onmicrosoft.com"
            },
            {
                "id": "e9528158-8634-4f67-a17b-89a62e3b2549",
                "businessPhones": [],
                "displayName": "Guy Traitor",
                "givenName": "Guy",
                "jobTitle": null,
                "mail": "guy.traitor@mock.onmicrosoft.com",
                "mobilePhone": "222 333111 22",
                "officeLocation": "Somewhere",
                "preferredLanguage": "en-US",
                "surname": "Traitor",
                "userPrincipalName": "guy.traitor@mock.onmicrosoft.com"
            },
            {
                "id": "58dbbec5-d95f-4168-ad23-569affa1ebeb",
                "businessPhones": [],
                "displayName": "Guy Flanders",
                "givenName": "Guy",
                "jobTitle": null,
                "mail": "guy.flanders@mock.onmicrosoft.com",
                "mobilePhone": "999 6633 22",
                "officeLocation": null,
                "preferredLanguage": null,
                "surname": "Flanders",
                "userPrincipalName": "guy.flanders@mock.onmicrosoft.com"
            },
            {
                "id": "bdd33f7e-381a-4b9d-a50f-8344a48cbec4",
                "businessPhones": [
                    "0000-00000-0000-000"
                ],
                "displayName": "Him Self",
                "givenName": "Him",
                "jobTitle": null,
                "mail": "him.self@mock.onmicrosoft.com",
                "mobilePhone": "04-000-000-00",
                "officeLocation": "Somewhere",
                "preferredLanguage": null,
                "surname": "Self",
                "userPrincipalName": "him.self@mock.onmicrosoft.com"
            },
            {
                "id": "c7b7cdbd-afc0-40ec-8797-6241f5eb13c6",
                "businessPhones": [],
                "displayName": "The Legend",
                "givenName": "The",
                "jobTitle": null,
                "mail": "the.legend@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": null,
                "surname": "Legend",
                "userPrincipalName": "the.legend@mock.onmicrosoft.com"
            },
            {
                "id": "74b6939a-877d-4caa-b3c8-b9ae95d0ea1e",
                "businessPhones": [
                    "666 55 777 44"
                ],
                "displayName": "Flipper De Bont",
                "givenName": "Flipper",
                "jobTitle": null,
                "mail": "Flipper.debont@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": "en-US",
                "surname": "De Bont",
                "userPrincipalName": "Flipper.debont@mock.onmicrosoft.com"
            },
            {
                "id": "316d0997-e39d-4e23-b4ad-1a3294940ed0",
                "businessPhones": [],
                "displayName": "Flipper Dude",
                "givenName": "Flipper",
                "jobTitle": null,
                "mail": "Flipper.dude@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": null,
                "surname": "Dude",
                "userPrincipalName": "Flipper.dude@mock.onmicrosoft.com"
            },
            {
                "id": "bda759d9-f86c-4a84-8eb1-384f9898df02",
                "businessPhones": [],
                "displayName": "Shiny Girl",
                "givenName": "Shiny",
                "jobTitle": null,
                "mail": "shiny.girl@mock.onmicrosoft.com",
                "mobilePhone": null,
                "officeLocation": null,
                "preferredLanguage": null,
                "surname": "Shiny",
                "userPrincipalName": "shiny.girl@mock.onmicrosoft.com"
            }
        ];
        return Promise.resolve(result);
    }
}
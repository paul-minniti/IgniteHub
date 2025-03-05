#  Generated TypeScript README
This README will guide you through the process of using the generated TypeScript SDK package for the connector `default`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@IgniteHub/dataconnect` as shown below. Both CommonJS and ESM imports are supported.
You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

# Accessing the connector
A connector is a collection of queries and mutations. One SDK is generated for each connector - this SDK is generated for the connector `default`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

In order to call Data Connect queries and mutations, you need to create an instance of the connector in your application code.

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@IgniteHub/dataconnect';

const connector: DataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```javascript
// add connectDataConnectEmulator to your imports 
import { connectDataConnectEmulator, getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@IgniteHub/dataconnect';

const connector: DataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(connector, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK. 

# Queries
There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument

Below are examples of how to use the `default` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListNewsletterSignIps
You can execute the `ListNewsletterSignIps` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listNewsletterSignIps(): QueryPromise<ListNewsletterSignIpsData, undefined>;

listNewsletterSignIpsRef(): QueryRef<ListNewsletterSignIpsData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listNewsletterSignIps(dc: DataConnect): QueryPromise<ListNewsletterSignIpsData, undefined>;

listNewsletterSignIpsRef(dc: DataConnect): QueryRef<ListNewsletterSignIpsData, undefined>;
```

### Variables
The `ListNewsletterSignIps` query has no variables.
### Return Type
Recall that executing the `ListNewsletterSignIps` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `ListNewsletterSignIpsData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListNewsletterSignIpsData {
  newsletters: ({
    email: string;
  } & Newsletter_Key)[];
}
```
### Using `ListNewsletterSignIps`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, listNewsletterSignIps } from '@IgniteHub/dataconnect';

// Call the `listNewsletterSignIps()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listNewsletterSignIps();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await listNewsletterSignIps(connector);

console.log(data.newsletters);

// Or, you can use the `Promise` API.
listNewsletterSignIps().then((response) => {
  const data = response.data;
  console.log(data.newsletters);
});
```

### Using `ListNewsletterSignIps`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listNewsletterSignIpsRef } from '@IgniteHub/dataconnect';

// Call the `listNewsletterSignIpsRef()` function to get a reference to the query.
const ref = listNewsletterSignIpsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = listNewsletterSignIpsRef(connector);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.newsletters);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.newsletters);
});
```

## GetNewsletterByEmail
You can execute the `GetNewsletterByEmail` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
getNewsletterByEmail(vars?: GetNewsletterByEmailVariables): QueryPromise<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;

getNewsletterByEmailRef(vars?: GetNewsletterByEmailVariables): QueryRef<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getNewsletterByEmail(dc: DataConnect, vars?: GetNewsletterByEmailVariables): QueryPromise<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;

getNewsletterByEmailRef(dc: DataConnect, vars?: GetNewsletterByEmailVariables): QueryRef<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;
```

### Variables
The `GetNewsletterByEmail` query has an optional argument of type `GetNewsletterByEmailVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetNewsletterByEmailVariables {
  email?: string | null;
}
```
### Return Type
Recall that executing the `GetNewsletterByEmail` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `GetNewsletterByEmailData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface GetNewsletterByEmailData {
  newsletter?: {
    email: string;
  } & Newsletter_Key;
}
```
### Using `GetNewsletterByEmail`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, getNewsletterByEmail, GetNewsletterByEmailVariables } from '@IgniteHub/dataconnect';
// The `GetNewsletterByEmail` query has an optional argument of type `GetNewsletterByEmailVariables`:
const getNewsletterByEmailVars: GetNewsletterByEmailVariables = {
  email: ..., // optional
}

// Call the `getNewsletterByEmail()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getNewsletterByEmail(getNewsletterByEmailVars);
// Variables can be defined inline as well.
const { data } = await getNewsletterByEmail({ email: ..., });
// Since all variables are optional for this query, you can omit the `GetNewsletterByEmailVariables` argument.
const { data } = await getNewsletterByEmail();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await getNewsletterByEmail(connector, getNewsletterByEmailVars);

console.log(data.newsletter);

// Or, you can use the `Promise` API.
getNewsletterByEmail(getNewsletterByEmailVars).then((response) => {
  const data = response.data;
  console.log(data.newsletter);
});
```

### Using `GetNewsletterByEmail`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getNewsletterByEmailRef, GetNewsletterByEmailVariables } from '@IgniteHub/dataconnect';
// The `GetNewsletterByEmail` query has an optional argument of type `GetNewsletterByEmailVariables`:
const getNewsletterByEmailVars: GetNewsletterByEmailVariables = {
  email: ..., // optional
}

// Call the `getNewsletterByEmailRef()` function to get a reference to the query.
const ref = getNewsletterByEmailRef(getNewsletterByEmailVars);
// Variables can be defined inline as well.
const ref = getNewsletterByEmailRef({ email: ..., });
// Since all variables are optional for this query, you can omit the `GetNewsletterByEmailVariables` argument.
const ref = getNewsletterByEmailRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = getNewsletterByEmailRef(connector, getNewsletterByEmailVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.newsletter);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.newsletter);
});
```

## ListUsers
You can execute the `ListUsers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listUsers(): QueryPromise<ListUsersData, undefined>;

listUsersRef(): QueryRef<ListUsersData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

listUsersRef(dc: DataConnect): QueryRef<ListUsersData, undefined>;
```

### Variables
The `ListUsers` query has no variables.
### Return Type
Recall that executing the `ListUsers` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `ListUsersData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListUsersData {
  users: ({
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orginizationId?: UUIDString | null;
    roles?: string[] | null;
  } & User_Key)[];
}
```
### Using `ListUsers`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsers } from '@IgniteHub/dataconnect';

// Call the `listUsers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await listUsers(connector);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsers().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsers`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersRef } from '@IgniteHub/dataconnect';

// Call the `listUsersRef()` function to get a reference to the query.
const ref = listUsersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = listUsersRef(connector);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## ListOrgs
You can execute the `ListOrgs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
listOrgs(): QueryPromise<ListOrgsData, undefined>;

listOrgsRef(): QueryRef<ListOrgsData, undefined>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
listOrgs(dc: DataConnect): QueryPromise<ListOrgsData, undefined>;

listOrgsRef(dc: DataConnect): QueryRef<ListOrgsData, undefined>;
```

### Variables
The `ListOrgs` query has no variables.
### Return Type
Recall that executing the `ListOrgs` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `ListOrgsData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface ListOrgsData {
  orginizations: ({
    id: UUIDString;
    name: string;
    status?: string | null;
    users_on_orginization: ({
      id: string;
    } & User_Key)[];
  } & Orginization_Key)[];
}
```
### Using `ListOrgs`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, listOrgs } from '@IgniteHub/dataconnect';

// Call the `listOrgs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listOrgs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await listOrgs(connector);

console.log(data.orginizations);

// Or, you can use the `Promise` API.
listOrgs().then((response) => {
  const data = response.data;
  console.log(data.orginizations);
});
```

### Using `ListOrgs`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listOrgsRef } from '@IgniteHub/dataconnect';

// Call the `listOrgsRef()` function to get a reference to the query.
const ref = listOrgsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = listOrgsRef(connector);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orginizations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orginizations);
});
```

## GetUserById
You can execute the `GetUserById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
getUserById(vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

getUserByIdRef(vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getUserById(dc: DataConnect, vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

getUserByIdRef(dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
```

### Variables
The `GetUserById` query requires an argument of type `GetUserByIdVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetUserByIdVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetUserById` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `GetUserByIdData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface GetUserByIdData {
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orginizationId?: UUIDString | null;
    roles?: string[] | null;
  } & User_Key;
}
```
### Using `GetUserById`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserById, GetUserByIdVariables } from '@IgniteHub/dataconnect';
// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
}

// Call the `getUserById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserById(getUserByIdVars);
// Variables can be defined inline as well.
const { data } = await getUserById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await getUserById(connector, getUserByIdVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserById(getUserByIdVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserById`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserByIdRef, GetUserByIdVariables } from '@IgniteHub/dataconnect';
// The `GetUserById` query requires an argument of type `GetUserByIdVariables`:
const getUserByIdVars: GetUserByIdVariables = {
  id: ..., 
}

// Call the `getUserByIdRef()` function to get a reference to the query.
const ref = getUserByIdRef(getUserByIdVars);
// Variables can be defined inline as well.
const ref = getUserByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = getUserByIdRef(connector, getUserByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetUserOrg
You can execute the `GetUserOrg` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
getUserOrg(vars: GetUserOrgVariables): QueryPromise<GetUserOrgData, GetUserOrgVariables>;

getUserOrgRef(vars: GetUserOrgVariables): QueryRef<GetUserOrgData, GetUserOrgVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getUserOrg(dc: DataConnect, vars: GetUserOrgVariables): QueryPromise<GetUserOrgData, GetUserOrgVariables>;

getUserOrgRef(dc: DataConnect, vars: GetUserOrgVariables): QueryRef<GetUserOrgData, GetUserOrgVariables>;
```

### Variables
The `GetUserOrg` query requires an argument of type `GetUserOrgVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetUserOrgVariables {
  id: string;
}
```
### Return Type
Recall that executing the `GetUserOrg` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `GetUserOrgData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface GetUserOrgData {
  user?: {
    orginizationId?: UUIDString | null;
    orginization?: {
      id: UUIDString;
      name: string;
      status?: string | null;
    } & Orginization_Key;
  };
}
```
### Using `GetUserOrg`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserOrg, GetUserOrgVariables } from '@IgniteHub/dataconnect';
// The `GetUserOrg` query requires an argument of type `GetUserOrgVariables`:
const getUserOrgVars: GetUserOrgVariables = {
  id: ..., 
}

// Call the `getUserOrg()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserOrg(getUserOrgVars);
// Variables can be defined inline as well.
const { data } = await getUserOrg({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await getUserOrg(connector, getUserOrgVars);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserOrg(getUserOrgVars).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserOrg`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserOrgRef, GetUserOrgVariables } from '@IgniteHub/dataconnect';
// The `GetUserOrg` query requires an argument of type `GetUserOrgVariables`:
const getUserOrgVars: GetUserOrgVariables = {
  id: ..., 
}

// Call the `getUserOrgRef()` function to get a reference to the query.
const ref = getUserOrgRef(getUserOrgVars);
// Variables can be defined inline as well.
const ref = getUserOrgRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = getUserOrgRef(connector, getUserOrgVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## GetWebsitesInOrg
You can execute the `GetWebsitesInOrg` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
getWebsitesInOrg(vars: GetWebsitesInOrgVariables): QueryPromise<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;

getWebsitesInOrgRef(vars: GetWebsitesInOrgVariables): QueryRef<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```javascript
getWebsitesInOrg(dc: DataConnect, vars: GetWebsitesInOrgVariables): QueryPromise<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;

getWebsitesInOrgRef(dc: DataConnect, vars: GetWebsitesInOrgVariables): QueryRef<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
```

### Variables
The `GetWebsitesInOrg` query requires an argument of type `GetWebsitesInOrgVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface GetWebsitesInOrgVariables {
  orginizationId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWebsitesInOrg` query returns a `QueryPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `GetWebsitesInOrgData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface GetWebsitesInOrgData {
  orginization?: {
    websites_on_organization: ({
      name: string;
      domain: string;
      structureId: string;
      status?: string | null;
      createdAt: DateString;
      updatedAt?: DateString | null;
    })[];
  };
}
```
### Using `GetWebsitesInOrg`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, getWebsitesInOrg, GetWebsitesInOrgVariables } from '@IgniteHub/dataconnect';
// The `GetWebsitesInOrg` query requires an argument of type `GetWebsitesInOrgVariables`:
const getWebsitesInOrgVars: GetWebsitesInOrgVariables = {
  orginizationId: ..., 
}

// Call the `getWebsitesInOrg()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWebsitesInOrg(getWebsitesInOrgVars);
// Variables can be defined inline as well.
const { data } = await getWebsitesInOrg({ orginizationId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await getWebsitesInOrg(connector, getWebsitesInOrgVars);

console.log(data.orginization);

// Or, you can use the `Promise` API.
getWebsitesInOrg(getWebsitesInOrgVars).then((response) => {
  const data = response.data;
  console.log(data.orginization);
});
```

### Using `GetWebsitesInOrg`'s `QueryRef` function

```javascript
import { getDataConnect, DataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWebsitesInOrgRef, GetWebsitesInOrgVariables } from '@IgniteHub/dataconnect';
// The `GetWebsitesInOrg` query requires an argument of type `GetWebsitesInOrgVariables`:
const getWebsitesInOrgVars: GetWebsitesInOrgVariables = {
  orginizationId: ..., 
}

// Call the `getWebsitesInOrgRef()` function to get a reference to the query.
const ref = getWebsitesInOrgRef(getWebsitesInOrgVars);
// Variables can be defined inline as well.
const ref = getWebsitesInOrgRef({ orginizationId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = getWebsitesInOrgRef(connector, getWebsitesInOrgVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orginization);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orginization);
});
```

# Mutations
There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument

Below are examples of how to use the `default` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUser
You can execute the `CreateUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

createUserRef(vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

createUserRef(dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
```

### Variables
The `CreateUser` mutation requires an argument of type `CreateUserVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface CreateUserVariables {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
```
### Return Type
Recall that executing the `CreateUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `CreateUserData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface CreateUserData {
  user_insert: User_Key;
}
```
### Using `CreateUser`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, createUser, CreateUserVariables } from '@IgniteHub/dataconnect';
// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
}

// Call the `createUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUser(createUserVars);
// Variables can be defined inline as well.
const { data } = await createUser({ id: ..., firstName: ..., lastName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await createUser(connector, createUserVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUser(createUserVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUser`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserRef, CreateUserVariables } from '@IgniteHub/dataconnect';
// The `CreateUser` mutation requires an argument of type `CreateUserVariables`:
const createUserVars: CreateUserVariables = {
  id: ..., 
  firstName: ..., 
  lastName: ..., 
  email: ..., 
}

// Call the `createUserRef()` function to get a reference to the mutation.
const ref = createUserRef(createUserVars);
// Variables can be defined inline as well.
const ref = createUserRef({ id: ..., firstName: ..., lastName: ..., email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = createUserRef(connector, createUserVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## AddNewsletterSignUp
You can execute the `AddNewsletterSignUp` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
addNewsletterSignUp(vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

addNewsletterSignUpRef(vars: AddNewsletterSignUpVariables): MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
addNewsletterSignUp(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

addNewsletterSignUpRef(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
```

### Variables
The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface AddNewsletterSignUpVariables {
  email: string;
}
```
### Return Type
Recall that executing the `AddNewsletterSignUp` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `AddNewsletterSignUpData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface AddNewsletterSignUpData {
  newsletter_insert: Newsletter_Key;
}
```
### Using `AddNewsletterSignUp`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, addNewsletterSignUp, AddNewsletterSignUpVariables } from '@IgniteHub/dataconnect';
// The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`:
const addNewsletterSignUpVars: AddNewsletterSignUpVariables = {
  email: ..., 
}

// Call the `addNewsletterSignUp()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addNewsletterSignUp(addNewsletterSignUpVars);
// Variables can be defined inline as well.
const { data } = await addNewsletterSignUp({ email: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await addNewsletterSignUp(connector, addNewsletterSignUpVars);

console.log(data.newsletter_insert);

// Or, you can use the `Promise` API.
addNewsletterSignUp(addNewsletterSignUpVars).then((response) => {
  const data = response.data;
  console.log(data.newsletter_insert);
});
```

### Using `AddNewsletterSignUp`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addNewsletterSignUpRef, AddNewsletterSignUpVariables } from '@IgniteHub/dataconnect';
// The `AddNewsletterSignUp` mutation requires an argument of type `AddNewsletterSignUpVariables`:
const addNewsletterSignUpVars: AddNewsletterSignUpVariables = {
  email: ..., 
}

// Call the `addNewsletterSignUpRef()` function to get a reference to the mutation.
const ref = addNewsletterSignUpRef(addNewsletterSignUpVars);
// Variables can be defined inline as well.
const ref = addNewsletterSignUpRef({ email: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = addNewsletterSignUpRef(connector, addNewsletterSignUpVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.newsletter_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.newsletter_insert);
});
```

## CreateOrg
You can execute the `CreateOrg` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
createOrg(vars: CreateOrgVariables): MutationPromise<CreateOrgData, CreateOrgVariables>;

createOrgRef(vars: CreateOrgVariables): MutationRef<CreateOrgData, CreateOrgVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
createOrg(dc: DataConnect, vars: CreateOrgVariables): MutationPromise<CreateOrgData, CreateOrgVariables>;

createOrgRef(dc: DataConnect, vars: CreateOrgVariables): MutationRef<CreateOrgData, CreateOrgVariables>;
```

### Variables
The `CreateOrg` mutation requires an argument of type `CreateOrgVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface CreateOrgVariables {
  orgName: string;
  orgStatus: string;
}
```
### Return Type
Recall that executing the `CreateOrg` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `CreateOrgData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface CreateOrgData {
  orginization_insert: Orginization_Key;
}
```
### Using `CreateOrg`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, createOrg, CreateOrgVariables } from '@IgniteHub/dataconnect';
// The `CreateOrg` mutation requires an argument of type `CreateOrgVariables`:
const createOrgVars: CreateOrgVariables = {
  orgName: ..., 
  orgStatus: ..., 
}

// Call the `createOrg()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOrg(createOrgVars);
// Variables can be defined inline as well.
const { data } = await createOrg({ orgName: ..., orgStatus: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await createOrg(connector, createOrgVars);

console.log(data.orginization_insert);

// Or, you can use the `Promise` API.
createOrg(createOrgVars).then((response) => {
  const data = response.data;
  console.log(data.orginization_insert);
});
```

### Using `CreateOrg`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOrgRef, CreateOrgVariables } from '@IgniteHub/dataconnect';
// The `CreateOrg` mutation requires an argument of type `CreateOrgVariables`:
const createOrgVars: CreateOrgVariables = {
  orgName: ..., 
  orgStatus: ..., 
}

// Call the `createOrgRef()` function to get a reference to the mutation.
const ref = createOrgRef(createOrgVars);
// Variables can be defined inline as well.
const ref = createOrgRef({ orgName: ..., orgStatus: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = createOrgRef(connector, createOrgVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orginization_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orginization_insert);
});
```

## AddUserToOrg
You can execute the `AddUserToOrg` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [default-connector/index.d.ts](./index.d.ts):
```javascript
addUserToOrg(vars: AddUserToOrgVariables): MutationPromise<AddUserToOrgData, AddUserToOrgVariables>;

addUserToOrgRef(vars: AddUserToOrgVariables): MutationRef<AddUserToOrgData, AddUserToOrgVariables>;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```javascript
addUserToOrg(dc: DataConnect, vars: AddUserToOrgVariables): MutationPromise<AddUserToOrgData, AddUserToOrgVariables>;

addUserToOrgRef(dc: DataConnect, vars: AddUserToOrgVariables): MutationRef<AddUserToOrgData, AddUserToOrgVariables>;
```

### Variables
The `AddUserToOrg` mutation requires an argument of type `AddUserToOrgVariables`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:

```javascript
export interface AddUserToOrgVariables {
  orginizationId: UUIDString;
}
```
### Return Type
Recall that executing the `AddUserToOrg` mutation returns a `MutationPromise` that resolves to an object with a `data` property. 

The `data` property is an object of type `AddUserToOrgData`, which is defined in [default-connector/index.d.ts](./index.d.ts). It has the following fields:
```javascript
export interface AddUserToOrgData {
  user_update?: User_Key | null;
}
```
### Using `AddUserToOrg`'s action shortcut function

```javascript
import { getDataConnect, DataConnect } from 'firebase/data-connect';
import { connectorConfig, addUserToOrg, AddUserToOrgVariables } from '@IgniteHub/dataconnect';
// The `AddUserToOrg` mutation requires an argument of type `AddUserToOrgVariables`:
const addUserToOrgVars: AddUserToOrgVariables = {
  orginizationId: ..., 
}

// Call the `addUserToOrg()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addUserToOrg(addUserToOrgVars);
// Variables can be defined inline as well.
const { data } = await addUserToOrg({ orginizationId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const connector: DataConnect = getDataConnect(connectorConfig);
const { data } = await addUserToOrg(connector, addUserToOrgVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
addUserToOrg(addUserToOrgVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `AddUserToOrg`'s `MutationRef` function

```javascript
import { getDataConnect, DataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addUserToOrgRef, AddUserToOrgVariables } from '@IgniteHub/dataconnect';
// The `AddUserToOrg` mutation requires an argument of type `AddUserToOrgVariables`:
const addUserToOrgVars: AddUserToOrgVariables = {
  orginizationId: ..., 
}

// Call the `addUserToOrgRef()` function to get a reference to the mutation.
const ref = addUserToOrgRef(addUserToOrgVars);
// Variables can be defined inline as well.
const ref = addUserToOrgRef({ orginizationId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const connector: DataConnect = getDataConnect(connectorConfig);
const ref = addUserToOrgRef(connector, addUserToOrgVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```


import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default',
  service: 'ignitehub-data-connect',
  location: 'us-east1'
};

export function createUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}

export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}

export function addNewsletterSignUpRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewsletterSignUp', inputVars);
}

export function addNewsletterSignUp(dcOrVars, vars) {
  return executeMutation(addNewsletterSignUpRef(dcOrVars, vars));
}

export function createOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrg', inputVars);
}

export function createOrg(dcOrVars, vars) {
  return executeMutation(createOrgRef(dcOrVars, vars));
}

export function addUserToOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUserToOrg', inputVars);
}

export function addUserToOrg(dcOrVars, vars) {
  return executeMutation(addUserToOrgRef(dcOrVars, vars));
}

export function listNewsletterSignIpsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNewsletterSignIps');
}

export function listNewsletterSignIps(dc) {
  return executeQuery(listNewsletterSignIpsRef(dc));
}

export function getNewsletterByEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetNewsletterByEmail', inputVars);
}

export function getNewsletterByEmail(dcOrVars, vars) {
  return executeQuery(getNewsletterByEmailRef(dcOrVars, vars));
}

export function listUsersRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}

export function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
}

export function listOrgsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListOrgs');
}

export function listOrgs(dc) {
  return executeQuery(listOrgsRef(dc));
}

export function getUserByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}

export function getUserById(dcOrVars, vars) {
  return executeQuery(getUserByIdRef(dcOrVars, vars));
}

export function getUserOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserOrg', inputVars);
}

export function getUserOrg(dcOrVars, vars) {
  return executeQuery(getUserOrgRef(dcOrVars, vars));
}

export function getWebsitesInOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWebsitesInOrg', inputVars);
}

export function getWebsitesInOrg(dcOrVars, vars) {
  return executeQuery(getWebsitesInOrgRef(dcOrVars, vars));
}


const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ignitehub-data-connect',
  location: 'us-east1'
};
exports.connectorConfig = connectorConfig;

function createUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
exports.createUserRef = createUserRef;

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};

function addNewsletterSignUpRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewsletterSignUp', inputVars);
}
exports.addNewsletterSignUpRef = addNewsletterSignUpRef;

exports.addNewsletterSignUp = function addNewsletterSignUp(dcOrVars, vars) {
  return executeMutation(addNewsletterSignUpRef(dcOrVars, vars));
};

function createOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrg', inputVars);
}
exports.createOrgRef = createOrgRef;

exports.createOrg = function createOrg(dcOrVars, vars) {
  return executeMutation(createOrgRef(dcOrVars, vars));
};

function addUserToOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUserToOrg', inputVars);
}
exports.addUserToOrgRef = addUserToOrgRef;

exports.addUserToOrg = function addUserToOrg(dcOrVars, vars) {
  return executeMutation(addUserToOrgRef(dcOrVars, vars));
};

function listNewsletterSignIpsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNewsletterSignIps');
}
exports.listNewsletterSignIpsRef = listNewsletterSignIpsRef;

exports.listNewsletterSignIps = function listNewsletterSignIps(dc) {
  return executeQuery(listNewsletterSignIpsRef(dc));
};

function getNewsletterByEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetNewsletterByEmail', inputVars);
}
exports.getNewsletterByEmailRef = getNewsletterByEmailRef;

exports.getNewsletterByEmail = function getNewsletterByEmail(dcOrVars, vars) {
  return executeQuery(getNewsletterByEmailRef(dcOrVars, vars));
};

function listUsersRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}
exports.listUsersRef = listUsersRef;

exports.listUsers = function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
};

function listOrgsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListOrgs');
}
exports.listOrgsRef = listOrgsRef;

exports.listOrgs = function listOrgs(dc) {
  return executeQuery(listOrgsRef(dc));
};

function getUserByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}
exports.getUserByIdRef = getUserByIdRef;

exports.getUserById = function getUserById(dcOrVars, vars) {
  return executeQuery(getUserByIdRef(dcOrVars, vars));
};


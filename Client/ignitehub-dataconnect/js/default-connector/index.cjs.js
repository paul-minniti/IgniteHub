const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'ignitehub-data-connect',
  location: 'us-east1'
};
exports.connectorConfig = connectorConfig;

exports.createUserRef = function createUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}

exports.createUser = function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
};
exports.addNewsletterSignUpRef = function addNewsletterSignUpRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddNewsletterSignUp', inputVars);
}

exports.addNewsletterSignUp = function addNewsletterSignUp(dcOrVars, vars) {
  return executeMutation(addNewsletterSignUpRef(dcOrVars, vars));
};
exports.createOrgRef = function createOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrg', inputVars);
}

exports.createOrg = function createOrg(dcOrVars, vars) {
  return executeMutation(createOrgRef(dcOrVars, vars));
};
exports.addUserToOrgRef = function addUserToOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUserToOrg', inputVars);
}

exports.addUserToOrg = function addUserToOrg(dcOrVars, vars) {
  return executeMutation(addUserToOrgRef(dcOrVars, vars));
};
exports.listNewsletterSignIpsRef = function listNewsletterSignIpsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListNewsletterSignIps');
}

exports.listNewsletterSignIps = function listNewsletterSignIps(dc) {
  return executeQuery(listNewsletterSignIpsRef(dc));
};
exports.getNewsletterByEmailRef = function getNewsletterByEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetNewsletterByEmail', inputVars);
}

exports.getNewsletterByEmail = function getNewsletterByEmail(dcOrVars, vars) {
  return executeQuery(getNewsletterByEmailRef(dcOrVars, vars));
};
exports.listUsersRef = function listUsersRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsers');
}

exports.listUsers = function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
};
exports.listOrgsRef = function listOrgsRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListOrgs');
}

exports.listOrgs = function listOrgs(dc) {
  return executeQuery(listOrgsRef(dc));
};
exports.getUserByIdRef = function getUserByIdRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserById', inputVars);
}

exports.getUserById = function getUserById(dcOrVars, vars) {
  return executeQuery(getUserByIdRef(dcOrVars, vars));
};
exports.getWebsitesInOrgRef = function getWebsitesInOrgRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWebsitesInOrg', inputVars);
}

exports.getWebsitesInOrg = function getWebsitesInOrg(dcOrVars, vars) {
  return executeQuery(getWebsitesInOrgRef(dcOrVars, vars));
};

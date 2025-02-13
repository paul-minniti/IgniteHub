import { auth, logger } from "firebase-functions/v1";

export const createUserData = auth.user().onCreate(async (user) => {
  logger.log(`User Created: ${user.email}`);
});

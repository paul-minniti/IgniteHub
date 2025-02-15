import { auth, logger } from "firebase-functions/v1";
import { createUser } from "@IgniteHub/dataconnect";

export const createUserData = auth.user().onCreate(async (user) => {
  let firstName: string = "";
  let lastName: string = "";

  if (typeof user.displayName === "string") {
    [firstName, lastName = ""] = user.displayName.split(" ");
  }
  createUser({
    id: user.uid,
    firstName: firstName,
    lastName: lastName,
    email: user.email as string,
  });
  logger.log(`User Created: ${user.email}, ${user.displayName}`);
});

import { AuthenticatedUser } from "./authenticatedUser.model";
export type User = Pick<
  AuthenticatedUser,
  "firstName" | "secondName" | "emailDetails"
>;

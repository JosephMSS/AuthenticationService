import { AuthDetails } from "./authDetails.model";
import { EmailDetails } from "./emailDetails.model";
import { RoleDetails } from "./rolDetails.model";

export interface AuthenticatedUser {
  firstName: string;
  secondName: string;
  emailDetails: EmailDetails;
  isActive: boolean;
  roleDetails: RoleDetails[];
  authDetails: AuthDetails;
  createdAt: string;
  updatedAt: string;
}

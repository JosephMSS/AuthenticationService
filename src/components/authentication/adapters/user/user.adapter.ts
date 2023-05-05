import { User } from "../../models";

export const UserAdapter = (data: User): User => {
  return {
    firstName: data?.firstName,
    secondName: data?.secondName,
    emailDetails: {
      email: data?.emailDetails?.email,
      recoveryEmail: data?.emailDetails?.recoveryEmail,
      secondaryEmail: data?.emailDetails?.secondaryEmail,
    },
  };
};

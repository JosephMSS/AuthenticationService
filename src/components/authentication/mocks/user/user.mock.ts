import { User } from "../../models";
import { emailDetailsMock } from "../emailDetails";

export const userMock: User = {
  firstName: "John",
  secondName: "Smith",
  emailDetails: emailDetailsMock,
};

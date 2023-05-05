import Joi from "joi";
import { EmailDetailsSchema } from "../../models";

const email = Joi.string().email();
const secondaryEmail = Joi.string().email();
const recoveryEmail = Joi.string().email();

export const EmailDetails: EmailDetailsSchema = {
  email,
  secondaryEmail,
  recoveryEmail,
};

export const createUser = Joi.object<EmailDetailsSchema>({
  email: EmailDetails.email.required(),
  recoveryEmail: EmailDetails.recoveryEmail.required(),
  secondaryEmail: EmailDetails.secondaryEmail.optional(),
});

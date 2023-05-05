import { StringSchema } from "joi";

export interface EmailDetailsSchema {
  email: StringSchema<string>;
  secondaryEmail: StringSchema<string>;
  recoveryEmail: StringSchema<string>;
}

import { describe, expect, it } from "vitest";
import { emailDetailsMock } from "../../mocks";
import { EmailDetails } from "../../models";
import { createUser } from "./emailDetails.schema";
describe("EmailDetailsSchema", () => {
  describe("createUser", () => {
    it("should have validate function", () => {
      expect(createUser.validate).toBeDefined(); // Verifica que la propiedad validate esté definida
      expect(typeof createUser.validate).toBe("function");
    });

    it("should pass validation with valid inputs", () => {
      const emailDetailsMockData = { ...emailDetailsMock };

      const result = createUser.validate(emailDetailsMockData);
      expect(result.error).toBeUndefined();
    });
    it("shouldn't fail if secondary email not exist", () => {
      const emptySecondaryEmail: EmailDetails = {
        ...emailDetailsMock,
      };
      delete emptySecondaryEmail.secondaryEmail;
      
      const resultEmpty = createUser.validate(emptySecondaryEmail);
      expect(resultEmpty.error).toBeFalsy();
    });

    it("should fail validation with invalid inputs", () => {
      const invalidEmails: EmailDetails = {
        email: "emaiasd_12@a.badexample",
        recoveryEmail: "email@gmail.empresarial",
        secondaryEmail: "",
      };
      const undefinedEmails: EmailDetails = {
        email: undefined,
        recoveryEmail: undefined,
        secondaryEmail: undefined,
      };
      const invalidEmailsResult = createUser.validate(invalidEmails);
      const undefinedEmailsResult = createUser.validate(undefinedEmails);

      expect(invalidEmailsResult.error).toBeDefined();
      expect(undefinedEmailsResult.error).toBeDefined();
    });
  });
});

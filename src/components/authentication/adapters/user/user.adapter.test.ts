import { describe, expect, it } from "vitest";
import { userMock } from "../../mocks";
import { UserAdapter } from "./user.adapter";
describe("UserAdapter", () => {
  it("should return  a user definition", () => {
    const userMockData = { ...userMock };
    const adaptedUser = UserAdapter(userMockData);

    expect(adaptedUser).toHaveProperty("firstName");
    expect(adaptedUser).toHaveProperty("secondName");
    expect(adaptedUser).toHaveProperty("emailDetails");

    expect(adaptedUser.emailDetails).toHaveProperty("email");
    expect(adaptedUser.emailDetails).toHaveProperty("recoveryEmail");
    expect(adaptedUser.emailDetails).toHaveProperty("secondaryEmail");
  });
  it("should return th same object when all data is provided ", () => {
    /**
     * Arrange
     */
    const userMockData = { ...userMock };
    /**
     * Act
     */
    const adaptedUser = UserAdapter(userMockData);
    /**
     * Assert
     */
    expect(adaptedUser).toEqual(userMockData);
  });
  it("should remove additional fields when they exist", () => {
    /**
     * Arrange
     */
    const userMockData = { ...userMock, additionalFields: "adicional Field" };
    const expectedUserMock = {
      ...userMock,
    };
    /**
     * Act
     */
    const adaptedUser = UserAdapter(userMockData);

    /**
     * Assert
     */
    expect(adaptedUser).toEqual(expectedUserMock);
    expect(adaptedUser).not.toHaveProperty("additionalFields");
  });
  it("should handle empty data", () => {
    /**
     * Arrange
     */
    const emptyUserData = {};
    const expectedData = {
      firstName: undefined,
      secondName: undefined,
      emailDetails: {
        email: undefined,
        recoveryEmail: undefined,
        secondaryEmail: undefined,
      },
    };
    /**
     * Act
     */
    const adaptedUser = UserAdapter(emptyUserData);

    /**
     * Assert
     */
    expect(adaptedUser).toEqual(expectedData);
  });
});

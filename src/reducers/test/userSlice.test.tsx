import userReducer, { setUser } from "../userSlice"; // reemplaza 'userSlice' con el nombre de tu archivo

describe("user reducer", () => {
  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      name: null,
    });
  });

  it("should handle setUser", () => {
    const actual = userReducer({ name: null }, setUser("Test User"));
    expect(actual.name).toEqual("Test User");
  });
});

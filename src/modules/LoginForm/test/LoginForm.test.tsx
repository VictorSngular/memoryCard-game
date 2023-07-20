import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: jest.fn((id) => id),
  }),
}));

describe("LoginForm", () => {
  const onSelectUserMock = jest.fn();

  it("should render correctly", () => {
    const { queryByText } = render(
      <LoginForm onSelectUser={onSelectUserMock} />
    );
    expect(queryByText("navbar.title")).toBeInTheDocument();
    expect(queryByText("login.button.label")).toBeInTheDocument();
  });

  it("should handle button click event correctly", () => {
    const { queryByText, getByLabelText } = render(
      <LoginForm onSelectUser={onSelectUserMock} />
    );
    const button = queryByText("login.button.label");
    const input = getByLabelText("login.input.label");

    fireEvent.change(input, { target: { value: "test user" } });
    fireEvent.click(button as HTMLElement);

    expect(onSelectUserMock).toHaveBeenCalledWith("test user");
  });
});

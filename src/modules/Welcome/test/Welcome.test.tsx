import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Welcome } from "../Welcome";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: jest.fn((id) => id),
  }),
}));

describe("Welcome", () => {
  const onPlayMock = jest.fn();
  const props = {
    username: "test user",
    level: "easy",
    highscore: 100,
    onPlay: onPlayMock,
  };

  it("should render correctly", () => {
    const { queryByText } = render(<Welcome {...props} />);
    expect(queryByText("home.start")).toBeInTheDocument();
  });

  it("should handle button click event correctly", () => {
    const { queryByText } = render(<Welcome {...props} />);
    const button = queryByText("home.start");

    fireEvent.click(button as HTMLElement);

    expect(onPlayMock).toHaveBeenCalled();
  });
});

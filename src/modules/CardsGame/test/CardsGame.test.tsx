import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { CardBox } from "../../../components/CardBox/CardBox";
import { CardsGame } from "../CardsGame";

jest.mock("../../../components/CardBox/CardBox", () => ({
  __esModule: true,
  CardBox: jest.fn(),
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: jest.fn((id) => id),
  }),
}));

describe("CardsGame", () => {
  const onFinishMock = jest.fn();
  const levelMock = {
    time: 1,
    score: 1,
    name: "",
  };

  beforeEach(() => {
    (CardBox as jest.Mock).mockImplementation(({ onClick }) => (
      <button onClick={onClick} />
    ));
  });

  it("should render correctly", () => {
    const { queryByText } = render(
      <CardsGame level={levelMock} onFinish={onFinishMock} />
    );
    expect(queryByText("home.memorize")).toBeInTheDocument();

    const buttons = document.querySelectorAll("button");
    expect(buttons).toHaveLength(9);
  });

  it("should handle click event correctly", async () => {
    const { getAllByRole } = render(
      <CardsGame level={levelMock} onFinish={onFinishMock} />
    );
    const buttons = getAllByRole("button");

    await act(async () => {
      fireEvent.click(buttons[0]);
    });

    expect(onFinishMock).toHaveBeenCalled();
  });
});

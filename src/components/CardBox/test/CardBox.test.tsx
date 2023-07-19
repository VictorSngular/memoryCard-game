import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CardBox } from "../CardBox";

describe("CardBox", () => {
  const onClickMock = jest.fn();
  const props = {
    isValid: true,
    isVisible: true,
    onClick: onClickMock,
    number: 5,
  };

  it("should render correctly", () => {
    const { queryByText } = render(<CardBox {...props} />);

    expect(queryByText(`${props.number}`)).toBeInTheDocument();
  });

  it("should not handle click event when isVisible is true", () => {
    const { getByRole } = render(<CardBox {...props} />);
    const card = getByRole("button");

    fireEvent.click(card);
    jest.runAllTimers();

    expect(onClickMock).not.toHaveBeenCalled();
  });

  it("should display the correct color when isValid is false", () => {
    const { getByRole, getByTestId } = render(
      <CardBox {...props} isValid={false} isVisible={false} />
    );
    const card = getByRole("button");

    fireEvent.click(card);
    const content = getByTestId("cardbox-content__id");

    expect(content).toHaveClass("error-bg");
  });

  it("should display the correct color when isValid is true", () => {
    const { getByRole, getByTestId } = render(
      <CardBox {...props} isValid={true} isVisible={false} />
    );
    const card = getByRole("button");

    fireEvent.click(card);
    const content = getByTestId("cardbox-content__id");

    expect(content).toHaveClass("success-bg");
  });
});

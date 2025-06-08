import { initializeTimes, updateTimes } from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./components/BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = [];
  render(
    <MemoryRouter>
      <BookingForm availableTimes={availableTimes} />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe("Booking Form", () => {
  test("submits the form with correct data", () => {
    const submitHandler = jest.fn();
    const dispatch = jest.fn();
    const setATime = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00"];

    render(
      <MemoryRouter>
        <BookingForm
          availableTimes={availableTimes}
          setATime={setATime}
          dispatch={dispatch}
          onSubmit={submitHandler}
        />
      </MemoryRouter>
    );

    const bookingDate = screen.getByLabelText("Booking Date:");
    fireEvent.change(bookingDate, { target: { value: "2025-06-08" } });

    const bookingTime = screen.getByLabelText("Booking Time:");
    fireEvent.change(bookingTime, { target: { value: "18:00" } });

    const numberGuests = screen.getByLabelText("Number of Guests:");
    fireEvent.change(numberGuests, { target: { value: "6" } });

    const occasion = screen.getByLabelText("Occasion:");
    fireEvent.change(occasion, { target: { value: "Birthday" } });

    const btn = screen.getByTestId("btnSubmit");
    fireEvent.click(btn);

    expect(submitHandler).toHaveBeenCalledWith({
      booking_date: "2025-06-08",
      booking_time: "18:00",
      guests: 6,
      occasion: "Birthday",
    });

    expect(setATime).toHaveBeenCalledWith("18:00");
  });
});

describe("Reducer Functions", () => {
  test("initializeTimes returns the initial times array", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    expect(initializeTimes()).toEqual(expectedTimes);
  });

  describe("updateTimes", () => {
    test("returns initial times for UPDATE_TIMES action", () => {
      const initialState = ["10:00", "11:00"];
      const action = { type: "UPDATE_TIMES", payload: "2025-06-08" };
      const expectedTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
      expect(updateTimes(initialState, action)).toEqual(expectedTimes);
    });

    test("returns unchanged state for unknown action", () => {
      const initialState = ["10:00", "11:00"];
      const action = { type: "UNKNOWN_ACTION", payload: "2025-06-08" };
      expect(updateTimes(initialState, action)).toEqual(initialState);
    });
  });
});

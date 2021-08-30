/** */
import React from "react";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Store from "../../../store/_store";
import { AppHeader } from "./index";

describe("<AppHeader /> Suite", () => {
  let container = null,
    onYearChange = null,
    onMonthChange = null;

  beforeEach(() => {
    container = document.createElement("div");
    onYearChange = jest.fn(() => {});
    onMonthChange = jest.fn(() => {});
    document.body.appendChild(container);

    act(() => {
      render(
        <Provider store={Store}>
          <AppHeader
            onMonthChange={onMonthChange}
            onYearChange={onYearChange}
          />
        </Provider>,
        container
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    onMonthChange = null;
    onYearChange = null;
  });

  it("renders two <select> elements", () => {
    const select = document.querySelectorAll("select");
    expect(select).toHaveLength(2);
  });

  it("renders correctly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <header
          class="header"
        >
          <div>
            <h1>
              CALENDAR
            </h1>
          </div>
          <div
            class="viewPicker"
          >
            <span
              class="material-icons"
            >
              event
            </span>
            <select />
            <select>
              <option
                value="1"
              >
                January
              </option>
              <option
                value="2"
              >
                February
              </option>
              <option
                value="3"
              >
                March
              </option>
              <option
                value="4"
              >
                April
              </option>
              <option
                value="5"
              >
                May
              </option>
              <option
                value="6"
              >
                June
              </option>
              <option
                value="7"
              >
                July
              </option>
              <option
                value="8"
              >
                August
              </option>
              <option
                value="9"
              >
                September
              </option>
              <option
                value="10"
              >
                October
              </option>
              <option
                value="11"
              >
                November
              </option>
              <option
                value="12"
              >
                December
              </option>
            </select>
          </div>
        </header>
      </div>
    `);
  });
});

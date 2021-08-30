/** */
import React from "react";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Store from "../../../store/_store";
import { CalendarDay } from "./day";

describe("<CalendarDay /> Suite", () => {
  let container = null,
    year = 2021,
    month = 8,
    day = 2;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <Provider store={Store}>
          <CalendarDay day={day} month={month} year={year} />
        </Provider>,
        container
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders a h5 element with day as value:", () => {
    const header = document.querySelector("h5");
    expect(header.textContent).toBe(day.toString());
  });

  it("renders correctly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="day"
        >
          <h5>
            2
          </h5>
          <div>
            <div
              class="modal"
            >
              <div
                class="modalBody"
              >
                <div
                  class="modalHeader"
                >
                  <div
                    class="modalTitle"
                  >
                     
                    <h5>
                      Mon Aug 02 2021
                    </h5>
                  </div>
                  <div
                    class="closeIcon is-clickable"
                  >
                    ×
                  </div>
                </div>
                <div
                  class="modalContent"
                >
                  <div
                    class="list"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});

import React from "react";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Store from "../../../store/_store";
import { SideNav } from "./index";

let reminder = {
  title: "Merlin's Birthday",
  start_time: "01:30",
  end_time: "19:32",
  color: "#000000",
  date: "Fri Aug 06 2021",
  form_date: "2021-08-06",
  id: "2021-08-06-1630243987207",
};

describe("<SideNav /> Suite", () => {
  let container = null,
    onDiscard = null;

  beforeEach(() => {
    container = document.createElement("div");
    onDiscard = jest.fn(() => {});
    document.body.appendChild(container);

    act(() => {
      render(
        <Provider store={Store}>
          <SideNav {...reminder} onDiscard={onDiscard} />
        </Provider>,
        container
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    onDiscard = null;
  });

  it("renders correctly", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <aside
          class="sidenav"
        >
          <div
            class="formRow"
          >
            <input
              placeholder="Add Reminder Title"
              type="text"
              value="Merlin's Birthday"
            />
            <input
              class="datePicker"
              type="color"
              value="#000000"
            />
          </div>
          <div
            class="formRow"
          >
            <input
              type="date"
              value="2021-08-06"
            />
              
            <input
              type="time"
              value="01:30"
            />
          </div>
          <div
            class="formRow btnRow"
          >
            <button
              class="cancelBtn"
              type="button"
            >
              Discard
            </button>
            <button
              class="saveBtn"
              type="button"
            >
              Save
            </button>
          </div>
        </aside>
      </div>
    `);
  });
});

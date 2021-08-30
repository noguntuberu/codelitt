/** */
import React from "react";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import Store from "../../../store/_store";
import { AdvancedReminder, SimpleReminder } from "./reminder";

let reminder = {
  title: "Merlin's Birthday",
  start_time: "01:30",
  end_time: "19:32",
  color: "#000000",
  date: "Fri Aug 06 2021",
  form_date: "2021-08-06",
  id: "2021-08-06-1630243987207",
};

describe("<SimpleReminder /> Suite", () => {
  let container = null,
    onEdit = jest.fn(() => {});

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <Provider store={Store}>
          <SimpleReminder reminder={reminder} onEdit={onEdit} />
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

  it("renders the title text:", () => {
    const title = document.querySelector("div[class*=reminder]").textContent;
    expect(title).toEqual(reminder.title);
  });

  it("renders correctly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="reminder"
          style="background-color: rgba(0, 0, 0, 0.188); color: rgb(0, 0, 0);"
        >
          Merlin's Birthday
        </div>
      </div>
    `);
  });
});

describe("<AdvancedReminder /> Suite", () => {
  let container = null,
    onDelete = jest.fn(),
    onEdit = jest.fn();

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

    act(() => {
      render(
        <Provider store={Store}>
          <AdvancedReminder
            reminder={reminder}
            onDelete={onDelete}
            onEdit={onEdit}
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
  });

  it("calls onEdit when clicked.", () => {
    const title = document.querySelectorAll("div[class*=reminder] > span")[0]
    title.click();
    expect(onEdit).toBeCalledTimes(1);
  });

  it("calls onDelete when clicked.", () => {
    const title = document.querySelectorAll("div[class*=reminder] > span")[1]
    title.click();
    expect(onDelete).toBeCalledTimes(1);
  });

  it("renders correctly:", () => {
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="reminderWrapper"
        >
          <div>
            <div
              class="reminder"
              style="background-color: rgba(0, 0, 0, 0.188); color: rgb(0, 0, 0);"
            >
              Merlin's Birthday
            </div>
          </div>
          <span
            class="material-icons"
          >
            edit
          </span>
          <span
            class="material-icons"
          >
            delete
          </span>
        </div>
      </div>
    `);
  });
});

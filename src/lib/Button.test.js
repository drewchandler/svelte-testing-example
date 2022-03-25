import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import Button from "./Button.svelte";

test("renders a button", async () => {
  render(svelte`<Button>Click me</Button>`);

  expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

test("triggers an event when clicked", () => {
  const callback = jest.fn();

  render(svelte`<Button on:click={callback} />`);

  userEvent.click(screen.getByRole("button"));

  expect(callback).toHaveBeenCalled();
});

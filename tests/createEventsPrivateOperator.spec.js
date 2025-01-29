const { test, expect } = require("@playwright/test");
const { createEventsPrivateOperator } = require("../objects/createEventPrivateOperator");

test("Create eventos with a operator", async ({ page }) => {
  test.slow();
  await page.goto("/");
  await createEventsPrivateOperator.formEventsOperator(page);
});

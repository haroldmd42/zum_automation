const { test, expect } = require("@playwright/test");
const { createEventsOperator } = require("../objects/createEventsOperator");

test("Create eventos with a operator", async ({ page }) => {
  test.slow();
  await page.goto("/");
  await createEventsOperator.formEventsOperator(page);
});

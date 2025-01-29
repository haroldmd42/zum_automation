const { test, expect } = require("@playwright/test");
const { loginUserSuperAdmin, loginEventExecutive } = require("../objects/login");

test("should first", async ({ page }) => {
  test.slow();
  await page.goto("/");
  //await loginUserSuperAdmin.formLogin(page);
  await loginEventExecutive.formLogin(page);
});

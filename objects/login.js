class LoginUserSuperAdmin{
    async formLogin(page){

        await page.locator('#email').fill('adminop_eventosymas@yopmail.com')
        await page.locator('#password').fill('Zum12345*')
        await page.getByText('Ingresar').click()
    }
}

export const loginUserSuperAdmin = new LoginUserSuperAdmin();


class LoginEventExecutive{
    async formLogin(page){

        await page.locator('#email').fill('supervisorentidad_QA@yopmail.com')
        await page.locator('#password').fill('Zum1235*')
        await page.getByText('Ingresar').click()
        //await page.getByText('Salir', {exact: true}).first().click()
    }
}

export const loginEventExecutive = new LoginEventExecutive();
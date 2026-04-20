
import { test, expect } from '@playwright/test';

import { loginpage } from "../pages/loginpage.po"

import logindata from "../testData/logindata.json"


let login

test.beforeEach(async ({ page }) => {

    login = new loginpage(page)
    await login.loginUrl()


})

test(`Login with vaild credentials`, async () => {

    await login.loginwithCred(logindata.username, logindata.password)

    await login.loginsuccess()
})



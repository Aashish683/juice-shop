protractor.expect = {
  challengeSolved: function (context) {
    describe('(shared)', () => {
      beforeEach(() => {
        browser.get('/score-board')
      })
      // browser.waitForAngularEnabled(false)
      it("challenge '" + context.challenge + "' should be solved on score board", () => {
        // browser.waitForAngularEnabled(false)
        expect(element(by.id(context.challenge + '.solved')).getAttribute('hidden').toBeTruthy)
        expect(element(by.id(context.challenge + '.notSolved')).getAttribute('hidden').not.toBeTruthy)
      })
    })
  }
}

protractor.beforeEach = {
  login: function (context) {
    describe('(shared)', () => {
      let email, password
      beforeEach(() => {
        email = context.email
        password = context.password
        browser.get('/login')
        console.log(email)
        console.log(password)
        element(by.css('input')).sendKeys(email)
        element(by.id('email')).sendKeys(email)
        element(by.id('password')).sendKeys(password)
        element(by.id('loginButton')).click()
      })
      // browser.waitForAngularEnabled(false)
      it('should have logged in user "' + email + '" with password "' + password + '"', () => {
        // browser.waitForAngularEnabled(false)
        browser.getCurrentUrl().then(x => console.log(x))
        expect(browser.getCurrentUrl()).toMatch(/\/search/)
      })
    })
  }
}

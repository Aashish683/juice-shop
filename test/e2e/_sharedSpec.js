protractor.expect = {
  challengeSolved: function (context) {
    describe('(shared)', () => {
      beforeEach(() => {
        browser.sleep(1000)
        browser.get('/score-board')
      })
      it("challenge '" + context.challenge + "' should be solved on score board", () => {
        expect(element(by.id(context.challenge + '.solved')).getAttribute('hidden')).not.toBeTruthy()
        expect(element(by.id(context.challenge + '.notSolved')).getAttribute('hidden')).toBeTruthy()
      })
    })
  }
}

protractor.beforeEach = {
  login: function (context) {
    describe('(shared)', () => {
      let email, password
      beforeEach(() => {
        browser.sleep(1000)
        email = context.email
        password = context.password
        browser.get('/login')
        // console.log(email)
        // console.log(password)
        element(by.id('email')).sendKeys(email)
        element(by.id('password')).sendKeys(password)
        element(by.id('loginButton')).click()
      })
      it('should have logged in user "' + email + '" with password "' + password + '"', () => {
        expect(browser.getCurrentUrl()).toMatch(/\/search/)
      })
    })
  }
}
// Status - All specs working properly!

const config = require('config')

describe('/administration', () => {
  describe('challenge "adminSection"', () => {
    it('should be possible to access administration section even when not authenticated', () => {
      // browser.waitForAngularEnabled(false)
      browser.get('/administration')
      expect(browser.getCurrentUrl()).toMatch(/\/administration/)
    })
    // console.log('In Adminsistration 1')
    protractor.expect.challengeSolved({challenge: 'Admin Section'})
  })

  describe('challenge "fiveStarFeedback"', () => {
    // browser.waitForAngularEnabled(true)
    protractor.beforeEach.login({email: 'jim@' + config.get('application.domain'), password: 'ncc-1701'})
    // browser.waitForAngularEnabled(true)
    /* it('should be possible for any logged-in user to delete feedback', () => {
      browser.get('/#/administration')

      element.all(by.repeater('feedback in feedbacks')).first().element(by.css('.fa-trash-alt')).element(by.xpath('ancestor::a')).click()
      browser.wait(protractor.ExpectedConditions.stalenessOf($('span[aria-valuenow="5"]')), 5000) // eslint-disable-line no-undef
    })
    // console.log('In Adminsistration 1')
    protractor.expect.challengeSolved({challenge: 'Five-Star Feedback'}) */
  })
})

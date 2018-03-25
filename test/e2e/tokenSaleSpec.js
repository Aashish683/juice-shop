describe('/tokensale-ico-ea', () => {
  describe('challenge "tokenSale"', () => {
    it('should be possible to access token sale section even when not authenticated', () => {
      browser.sleep(1000)
      browser.get('/tokensale-ico-ea')
      browser.sleep(1000)
      expect(browser.getCurrentUrl()).toMatch(/\/tokensale-ico-ea/)
    })

    protractor.expect.challengeSolved({challenge: 'Blockchain Tier 1'})
  })
})

// Status - All specs working!

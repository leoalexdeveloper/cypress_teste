/// <reference types="cypress" />

describe('test_loggin_user', () => {
    
    it('loggin_select_other_user', () => {
        
        cy.visit('https://github.com/')

        cy.get('[data-hydro-click-hmac="520d87e8f83281e6946b192f0f840552721c7fcba9b9c36d802e898a816314e2"]').click()

        cy.wait(1000)
        cy.get('.js-prevent-default-behavior').find('#email').type('leoalexandrebp@gmail.com', {force: true})
        cy.wait(1000)
        cy.get('[data-continue-to="password-container"]').should('not.be.disabled')
        cy.get('[data-optimizely-event="click.signup_continue.email"]').click({force: true})

        cy.wait(1000)
        cy.get('.js-prevent-default-behavior').find('#password').type('Leonardo@12345', {force: true})
        cy.wait(1000)
        cy.get('[data-optimizely-event="click.signup_continue.password"]').should('not.be.disabled')
        cy.get('[data-optimizely-event="click.signup_continue.password"]').contains('Continue').click({force: true}).click({force: true})
        
        cy.wait(1000)
        cy.get('[aria-describedby="login-err"]').type('leoalexandrebp')
        cy.wait(1000)
        cy.get('[aria-describedby="login-err"]').should('not.be.disabled')
        cy.get('[data-optimizely-event="click.signup_continue.username"]').contains('Continue').click({force: true}).click({force: true})
        
        cy.get('#opt_in').type('leoalexandrebp')
        cy.wait(1000)
        cy.get('[data-optimizely-event="click.signup_continue.opt-in"]').should('not.be.disabled')
        cy.get('[data-optimizely-event="click.signup_continue.opt-in"]').click({force: true})
        
        
    })
    
})
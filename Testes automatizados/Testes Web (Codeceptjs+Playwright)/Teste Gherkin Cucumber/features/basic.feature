Feature: Login
 I as an user
 I want to login to the application
 To place orders

  Scenario: Login With Success
    Given I am on login page
    When I fill the email field with "brunopachu12@gmail.com"
    And I fill the password field with "123456"
    And I click on Login button
    Then I see "Login realizado"
  
  Scenario: Login Without @
    Given I am on login page
    When I fill the email field with "brunopachu12gmail.com"
    And I fill the password field with "123456"
    And I click on Login button
    Then I see "E-mail inválido."

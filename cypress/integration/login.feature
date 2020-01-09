Feature: Login
  In order to login
  As a user
  I want to be logged in


  I want to login as a user
  
  @focus
  Scenario: Login to the page
    Given I visit auth page
    And I input the email "test@test.com"
    And I input the password "123123"
    When I press login
    Then the url on the website should contain "/recipes"
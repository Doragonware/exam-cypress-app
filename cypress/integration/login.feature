Feature: Login
 
  I want to login as a user
  
  @focus
  Scenario: Login to the page
    Given I visit auth page
    When I input the email "test@test.com" and password "123123" and press login
    Then the url on the website should contain "/recipes"
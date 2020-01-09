Feature: Login failure
  In order to fail login
  As a user
  I want to get error message
  
  @focus
  Scenario: Login with wrong credentials
    Given I visit auth page
    And I input the email "fail@test.com"
    And I input the password "123123"
    When I press login
    Then error message "This email does not exist." should appear
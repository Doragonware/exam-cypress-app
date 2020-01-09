Feature: The home page
 
  I want to open home page
  
  @focus
  Scenario: Show the home page
    Given I open the home page
    Then the title on the page says "Recipe Book"
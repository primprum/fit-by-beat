Feature: BMI Calculation
  As a user, I want to calculate my BMI on the FitByBeat website


Background: User is on the FitByBeat BMI calculation page
    Given user is on the FitByBeat BMI calculation page


Scenario: Calculate BMI with Complete Valid Inputs
    When user enters valid values for weight, height, age, and selects an activity factor
    And selects sex as a 'Male'
    And clicks the calculate button
    Then user should see the calculated BMI, BMR, and BMR with Activity Factor value
    And screenshot is taken
    And sees an interpretation of the calculated result
    And screenshot is taken


Scenario: Calculate BMI with Incomplete Valid Inputs
    When user enters valid values for weight and height only
    And clicks the calculate button
    Then user should only see the calculated BMI
    And screenshot is taken
    And sees an interpretation of the calculated result
    And screenshot is taken


Scenario: Calculate BMI with Blank Inputs
    When clicks the calculate button
    Then user should see an error message indicating that height and weight are required
    And screenshot is taken
    And shouldn't see any interpretation of the calculated result
    And screenshot is taken


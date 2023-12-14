Feature: BMR Calculation with Activity Factor on Male or Female
  As a user, different Sex should give different BMR result


Background: User is on the FitByBeat BMI calculation page
    Given user is on the FitByBeat BMI calculation page


Scenario Outline: Calculate BMR with Activity Factors for '<Sex>'
    When user enters valid values for weight, height, age, and selects an activity factor
    And selects sex as a '<Sex>'
    And clicks the calculate button
    Then user should see the calculated BMI, BMR, and BMR with Activity Factor value
    Then system stores BMR as '<SexBMR>'

Examples:
    | Sex    | SexBMR       | 
    | Male   | MaleBMR      | 
    | Female | FemaleBMR    | 


Scenario: Compare BMR with Activity Factors for Male and Female
    Then 'MaleBMR' should not equal 'FemaleBMR'


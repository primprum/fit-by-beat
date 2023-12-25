import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import BMIPage from "../pageObject/BMIPage";
import BMIAssert from "../pageObject/BMIAssert";
import "cypress-xpath";

// PRECONDITION
// ============
Given("user is on the FitByBeat BMI calculation page", () => {
  BMIPage.visit();
});

// TRIGGERS
// ========
When("user enters valid values for weight and height only", () => {
  BMIPage.fillHeight("165");
  BMIPage.fillWeight("65");
});

When("user enters valid values for weight, height, age, and selects an activity factor", () => {
  BMIPage.fillHeight("165");
  BMIPage.fillWeight("65");
  BMIPage.fillAge("33");

  BMIPage.selectActivity("light");
});

When("selects sex as a {string}", (sex) => {
  BMIPage.selectSex(sex);
});

When("clicks the calculate button", () => {
  BMIPage.calculateBMI();
});

// EXPECTATION
// ===========
Then("user should see the calculated BMI, BMR, and BMR with Activity Factor value", () => {
  BMIAssert.BMIresultShown("all");
});

Then("user should only see the calculated BMI", () => {
  BMIAssert.BMIresultShown();
});

Then("sees an interpretation of the calculated result", () => {
  BMIAssert.BMIinterpretationShown();
});

Then("shouldn't see any interpretation of the calculated result", () => {
  BMIAssert.BMIinterpretationShown("false");
});

Then("user should see an error message indicating that height and weight are required", () => {
  BMIAssert.BMIerrorShown();
});

Then("system stores BMR as {string}", (sexBMR) => {
  BMIAssert.BMIstoreResult(sexBMR);
});

Then("'MaleBMR' should not equal 'FemaleBMR'", () => {
  BMIAssert.BMIfetchResult().then(({ male, female }) => {
    BMIAssert.BMIcompareResult(male, female);
  });
  BMIAssert.BMIclearFixtures();
});

Then("screenshot is taken", () => {
  BMIAssert.generateReport();
});

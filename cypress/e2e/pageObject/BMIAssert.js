class BMIAssert {
  BMIresultShown(BMIresult) {
    if (BMIresult === "all") {
      cy.xpath("//div[@class='qodef-bmic-notifications']").should("be.visible").and("contain", "Your BMI is").and("contain", "BMR").and("contain", "w/Activity Factor");
    } else {
      cy.xpath("//div[@class='qodef-bmic-notifications']").should("be.visible").and("contain", "Your BMI is").and("not.contain", "BMR").and("not.contain", "w/Activity Factor");
    }
  }

  BMIinterpretationShown(BMIinterpretation) {
    if (BMIinterpretation === "false") {
      cy.xpath("//div[@class='qodef-bmic-notifications qodef-bmic-notification-error']").should("be.visible");
      cy.xpath("//span[@class='qodef-bmic-notification-highlight']").should("not.exist");
    } else {
      cy.xpath("//span[@class='qodef-bmic-notification-highlight']").should("be.visible").and("contain", "You are");
    }
  }

  BMIerrorShown() {
    cy.xpath("//span[@class='qodef-bmic-notification-text']").should("be.visible").and("contain", "Please provide a valid height. Please provide a valid weight");
  }

  BMIstoreResult(sexBMR) {
    cy.xpath("//span[@class='qodef-bmic-notification-text']")
      .invoke("text")
      .then((text) => {
        const startIndex = text.indexOf("Your BMI is");
        const endIndex = text.indexOf("kcal/day", startIndex) + 8; // +8 to include "kcal/day" in the result
        const extractedText = text.slice(startIndex, endIndex).trim();

        if (sexBMR === "MaleBMR") {
          const BMRdata = {
            BMIresult: extractedText,
          };
          cy.writeFile("cypress/fixtures/male.json", { BMRdata });
        } else if (sexBMR === "FemaleBMR") {
          const BMRdata = {
            BMIresult: extractedText,
          };
          cy.writeFile("cypress/fixtures/female.json", { BMRdata });
        }
      });
  }

  BMIfetchResult() {
    return cy.fixture("male").then((maleData) => {
      const male = maleData.BMRdata.BMIresult;
      return cy.fixture("female").then((femaleData) => {
        const female = femaleData.BMRdata.BMIresult;
        return { male, female };
      });
    });
  }

  BMIcompareResult(varA, varB) {
    expect(varA).not.to.equal(varB);
  }

  BMIclearFixtures() {
    // clear fixtures data
    const BMRdata = {
      BMIresult: "",
    };
    cy.writeFile("cypress/fixtures/male.json", { BMRdata });
    cy.writeFile("cypress/fixtures/female.json", { BMRdata });
  }
}

export default new BMIAssert();

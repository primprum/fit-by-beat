const URL = "https://fitbybeat.com/";

class BMIPage {
  visit() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(URL);
  }

  fillHeight(height) {
    cy.xpath("//input[@name='height']").type(height);
  }

  fillWeight(weight) {
    cy.xpath("//input[@name='weight']").type(weight);
  }

  fillAge(age) {
    cy.xpath("//input[@name='age']").type(age);
  }

  selectActivity(activityType) {
    cy.get('span[id^="select2-activity_level"]').click();
    cy.xpath(`//li[contains(@id, '-${activityType}')]`).click();
  }

  selectSex(sexType) {
    cy.contains('span[id^="select2-sex-"]', "Sex").click({ force: true });

    if (sexType === "Male") {
      cy.xpath("//li[contains(@id, '-male')]").click();
    } else if (sexType === "Female") {
      cy.xpath("//li[contains(@id, '-female')]").click();
    }
  }

  calculateBMI() {
    cy.xpath("//button[@type='submit']//span[@class='qodef-btn-text']").click();
  }
}

export default new BMIPage();

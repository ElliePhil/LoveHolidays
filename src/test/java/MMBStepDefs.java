import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pagecontainers.ManageMyBookingPageContainer;
import utils.LoveHolidaysDriver;

/**
 * Created by elizabeth on 09/07/2017.
 */
public class MMBStepDefs {
    WebDriver driver;
    ManageMyBookingPageContainer manageMyBooking;
    @Before("@MMB")
    public void before() {
        driver = LoveHolidaysDriver.getCurrentDriver();
        manageMyBooking = PageFactory.initElements(driver,ManageMyBookingPageContainer.class);
        driver.manage().window().maximize();

    }

    @After("@MMB")
    public void tearDown()
    {
        LoveHolidaysDriver.quit();
    }

    @Given("^user navigates to the page '(.*)'$")
    public void gotoMmbPage(String url)
    {
        driver.get(url);
    }

    @When("^user enters the reference number '(.*)'$")
    public void userEntersRef(String ref)
    {
        manageMyBooking.refInputTextBox.sendKeys(ref);
    }

    @And("^the user enters '(.*)' in the surname")
    public void userEntersSurname(String name)
    {
        manageMyBooking.surnameTextBox.sendKeys(name);
    }

    @And("^the user clicks on sign in$")
    public void signIn()
    {
        manageMyBooking.signInButton.click();
    }

    @Then("^the user should get the error message$")
    public void errorMessageValidate()
    {
        String titleText = manageMyBooking.invalidErrorAttribute.getAttribute("oninvalid");
      Assert.assertTrue(titleText.contains("Your booking reference starts with LVE or LOV and can be found on your booking summary"));

    }

    @Then("^the error message should be displayed$")
    public void errorMessageDisplayed(){

        manageMyBooking.errorLabel.isDisplayed();
        Assert.assertTrue(manageMyBooking.errorLabel.getText().contains("Sorry this is not a valid booking reference. If you have booked within the last 24 hours please wait until you receive your LOV or LVE reference number by email before logging in."));
    }
}

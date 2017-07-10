package pagecontainers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by elizabeth on 10/07/2017.
 */
public class ManageMyBookingPageContainer {

    @FindBy(id = "js-reference-field-with-letters")
    public WebElement refInputTextBox;

    @FindBy(xpath = ".//*[@id='getBooking']/label[2]/input")
    public WebElement surnameTextBox;

    @FindBy(className = "mmb-login__form__submit__button")
    public WebElement signInButton;

    @FindBy(id = "js-reference-field-with-letters")
    public WebElement invalidErrorAttribute;

    @FindBy(xpath = ".//*[@id='getBooking']/label[1]/p[1]")
    public WebElement errorLabel;

}

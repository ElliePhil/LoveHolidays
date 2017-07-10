package utils;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by elizabeth on 09/07/2017.
 */
public class BrowserFactory {
    private static final Logger LOGGER = Logger.getLogger(BrowserFactory.class);
    public static final String BROWSER_TYPE = System.getProperty("browser");
    static WebDriver driver;

    public static WebDriver getBrowser() {LOGGER.info("getBrowser()");
        WebDriver mBrowser;
        String browserType = BROWSER_TYPE;


        if (browserType != null) {
            if (browserType.equalsIgnoreCase("firefox")) {
                mBrowser = new FirefoxDriver();
            }
            else {
                // Default browser is set to firefox browser
                mBrowser = new ChromeDriver();//The webdriver.chrome.driver property has not been set for the chrome driver. This is just a prototype.
            }
        } else {
            // Default browser is set remote firefox browser
            LOGGER.info("No browser type specified. Defaulting to using a remote firefox browser");

            mBrowser = new FirefoxDriver();
        }
        return mBrowser;
}



}


package utils;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.RemoteWebElement;
import org.openqa.selenium.remote.UnreachableBrowserException;

/**
 * Created by elizabeth on 09/07/2017.
 */
public class LoveHolidaysDriver {
    private static final Logger LOGGER = Logger.getLogger(LoveHolidaysDriver.class);

    private static WebDriver mDriver;

    public static WebDriver getCurrentDriver() {
        try {
            if (driverNotSet()) {
                LOGGER.info("mDriver is null - get new webdriver");
                mDriver = BrowserFactory.getBrowser();

            }
        } catch (UnreachableBrowserException e) {
            LOGGER.error("get new webdriver, UnreachableBrowserException thrown");
            mDriver = BrowserFactory.getBrowser();
        } catch (WebDriverException e) {
            LOGGER.error("get new webdriver, WebDriverException thrown");
            mDriver = BrowserFactory.getBrowser();
        }
        return mDriver;
    }
    public static boolean driverNotSet() {
        if( mDriver == null )
            return true;

        return false;

    }

    public static void quit() {
        if (mDriver != null) {
            mDriver.quit();
            mDriver = null;
        }
    }
}

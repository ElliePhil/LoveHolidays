import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by elizabeth on 09/07/2017.
 */
@RunWith(Cucumber.class)
@CucumberOptions(tags = "@MMB,@Scenario2",format = { "pretty","html:target/Rules/cucumber","json:target/Rules/cucumber.json"})
public class MMBRun {
//Test needs to be run with Firefox v45 or v47


}

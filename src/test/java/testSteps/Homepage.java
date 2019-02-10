package testSteps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Homepage {
       WebDriver driver;

           public Homepage () {
           System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
           WebDriver driver;
       }

    @Given("^User enters the url$")
         public void user_enters_url() throws Throwable {
            driver = new ChromeDriver();
//            driver.navigate().to("https://google.com");
            driver.get("https://ey-seren.invisionapp.com/share/XCNBZW07Y56#/screens/312448672");

        throw new PendingException();
    }
          @Then("^User close the browser$")
           public void tearDown() throws Throwable{
           driver.quit();
            throw new PendingException();
           }
}

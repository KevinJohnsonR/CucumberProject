package com.definitionPack;

import java.util.List;

import org.openqa.selenium.WebElement;

import com.pojoAndBase.BaseClassCucumber;
import com.pojoAndBase.ClassPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DefinitionClass extends BaseClassCucumber {

	public static ClassPojo fb;

	@Given("To launch the browser and hit the url")
	public void to_launch_the_browser_and_hit_the_url() {

		launchbrowser();
		max();

	}

	@When("To pass the data in emailfield")
	public void to_pass_the_data_in_emailfield(io.cucumber.datatable.DataTable d) {

		fb = new ClassPojo();
		
		 List<String> l= d.asList();
		String em= l.get(2);
		  
		entertext(fb.getEmai(), em);

	}

	@When("To pass the data in passwordfield")
	public void to_pass_the_data_in_passwordfield(io.cucumber.datatable.DataTable dd) {

		List<List<String>> li =dd.asLists();
		
		entertext(fb.getPasss(), li.get(1).get(2));

	}

	@When("To click the login button")
	public void to_click_the_login_button() {

		WebElement button = fb.getBtnclick();

		clicklogbtn(button);

	}

	@Then("To close the browser")
	public void to_close_the_browser() {

		closeBrowser();

	}

/*	@Given("Launch the browser and hit the url")
	public void launch_the_browser_and_hit_the_url() {

		launchbrowser();

	}

	@When("pass the data in{string} emailfield")
	public void pass_the_data_in_emailfield(String emaill) {

		fb = new ClassPojo();

		WebElement maill = fb.getEmai();
		entertext(maill, emaill);

	}

	@When("pass the data in {string} passwordfield")
	public void pass_the_data_in_passwordfield(String pswrd) {

		WebElement passs = fb.getPasss();
		entertext(passs, pswrd);

	}

	@When("click the login button")
	public void click_the_login_button() {
		WebElement clkk = fb.getBtnclick();
		clicklogbtn(clkk);

	}

	@Then("close the browser")
	public void close_the_browser() {

		closeBrowser();

	}
*/
}

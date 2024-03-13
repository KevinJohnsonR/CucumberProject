package com.definitionPack;

import org.openqa.selenium.WebElement;

import com.pojoAndBase.BaseClassCucumber;
import com.pojoAndBase.ClassPojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ExmplClass extends BaseClassCucumber {

	public static ClassPojo f;	
	
	
	@Given("Launch the browser and hit the url")
	public void launch_the_browser_and_hit_the_url() {
		launchbrowser();
		
		max();
	    
	}

	@When("pass the data in{string} emailfield")
	public void pass_the_data_in_emailfield(String emaill) {
	   
		f = new ClassPojo();
		
		WebElement maill= f.getEmai();
		entertext(maill, emaill);
		
	}

	@When("pass the data in {string} passwordfield")
	public void pass_the_data_in_passwordfield(String pswrd) {
		
		WebElement passs= f.getPasss();
		entertext(passs, pswrd);
	    
	}

	@When("click the login button")
	public void click_the_login_button() {
    WebElement clkk =f.getBtnclick();
		clicklogbtn(clkk);
		
	}

	@Then("close the browser")
	public void close_the_browser() {
		
		closeBrowser();
	   
	}


	
	
}

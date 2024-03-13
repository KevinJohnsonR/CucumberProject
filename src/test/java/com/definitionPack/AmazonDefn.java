package com.definitionPack;

import org.openqa.selenium.WebElement;

import com.amazonBaseAndPojo.BaseAmazon;
import com.amazonBaseAndPojo.PojoAmazon;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AmazonDefn extends BaseAmazon{

	public static PojoAmazon pa;	
	
	@Given("Launch the amazon brows and hits url")
	public void launch_the_amazon_brows_and_hits_url() {
	    
		launch();
		
	}

	@When("Pass the value of email or number")
	public void pass_the_value_of_email_or_number() {
		
		pa= new PojoAmazon();
		
		WebElement entermail=pa.getPhone();
		enterData(entermail, "9789437100");
		
	}

	@When("Clic the continue button")
	public void clic_the_continue_button() {
		
		WebElement continu= pa.getCont();
		cclkbtn(continu);
		
	}

	@When("Pass the value of password")
	public void pass_the_value_of_password() {
	    
	WebElement passwrd=	pa.getPass();
	enterData(passwrd, "kevin");
		
	}

	@When("Click the signin button")
	public void click_the_signin_button() {
	    
	WebElement singinn=	pa.getSignin();
	cclkbtn(singinn);
		
	}

	@Then("Close the amazon browser")
	public void close_the_amazon_browser() {
	    
		cloose();
	}

	
	
}

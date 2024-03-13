package com.amazonBaseAndPojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoAmazon extends BaseAmazon{

	
	public PojoAmazon() {


		PageFactory.initElements(drive, this);
	}
	
	
	
	@FindBy(name="email")
	WebElement phone;
	
	
	
	@FindBy(id="continue")
	WebElement cont;
	
	
	@FindBy(name="password")
	WebElement pass;
	
	@FindBy(id="signInSubmit")
	WebElement signin;
	
	
	public WebElement getPhone() {
		return phone;
	}

	public WebElement getCont() {
		return cont;
	}

	public WebElement getPass() {
		return pass;
	}

	public WebElement getSignin() {
		return signin;
	}

	
	
	
	
	
	
}

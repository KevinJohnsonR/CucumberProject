package com.pojoAndBase;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ClassPojo extends BaseClassCucumber {
	
	
	
	public ClassPojo() {

          PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(id="email")
	private WebElement emai;
	
	@FindBy(id="pass")
	private WebElement passs;
	
	
	@FindBy(name="login")
    private WebElement btnclick;


	public WebElement getEmai() {
		return emai;
	}


	public WebElement getPasss() {
		return passs;
	}


	public WebElement getBtnclick() {
		return btnclick;
	}
}

package com.pojoAndBase;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClassCucumber {
	
	public static WebDriver driver;
	
	
	
	public static void launchbrowser() {
		
		
       driver = new ChromeDriver();
       
       driver.get("https://www.facebook.com/");
		
		
	}
	
	
	public static void max() {
		
		driver.manage().window().maximize();
	}
	
	
	public static void entertext(WebElement email, String s) {
		
		
		email.sendKeys(s);
		

	}
	
	public static void clicklogbtn(WebElement btn) {
		
		btn.click();

	}
	
	
	public static void closeBrowser() {
		
		driver.close();
		
		
	}

}

package com.definitionPack;

import org.junit.After;
import org.junit.Before;

import com.pojoAndBase.BaseClassCucumber;

public class HooksClass extends BaseClassCucumber {
	
	@Before
	public void bf() {
		launchbrowser();

	}

	
	
	@After
	public void af() {
		closeBrowser();

	
}
}
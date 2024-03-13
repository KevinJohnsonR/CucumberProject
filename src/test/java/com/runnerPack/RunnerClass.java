package com.runnerPack;

import org.junit.runner.RunWith;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources", 
glue="com.definitionPack", dryRun=false, plugin= {"pretty","html:target","junit:Junit\\junitfile.xml","json:JasonFolder\\jsonfile.json"})



public class RunnerClass {
 

	
}

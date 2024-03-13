$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/amazon.feature");
formatter.feature({
  "name": "",
  "description": "validate login functionality of amazon",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "validate the amazon login with username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Launch the amazon brows and hits url",
  "keyword": "Given "
});
formatter.match({
  "location": "AmazonDefn.launch_the_amazon_brows_and_hits_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pass the value of email or number",
  "keyword": "When "
});
formatter.match({
  "location": "AmazonDefn.pass_the_value_of_email_or_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027email\u0027]\"}\n  (Session info: chrome\u003d122.0.6261.112)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#no-such-element-exception\nBuild info: version: \u00274.18.1\u0027, revision: \u0027b1d3319b48\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [da509d26fc0290a179660f838e837a1f, findElement {value\u003demail, using\u003dname}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 122.0.6261.112, chrome: {chromedriverVersion: 122.0.6261.111 (9d4c1072da6..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:60574}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:60574/devtoo..., se:cdpVersion: 122.0.6261.112, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: da509d26fc0290a179660f838e837a1f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:190)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:519)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:356)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:350)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.sendKeys(Unknown Source)\r\n\tat com.amazonBaseAndPojo.BaseAmazon.enterData(BaseAmazon.java:26)\r\n\tat com.definitionPack.AmazonDefn.pass_the_value_of_email_or_number(AmazonDefn.java:29)\r\n\tat ✽.Pass the value of email or number(file:src/test/resources/amazon.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Clic the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefn.clic_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pass the value of password",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefn.pass_the_value_of_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the signin button",
  "keyword": "And "
});
formatter.match({
  "location": "AmazonDefn.click_the_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the amazon browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonDefn.close_the_amazon_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/fbLogin.feature");
formatter.feature({
  "name": "To validate login fuctionality of Facebook application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To validate login by using invalid username and valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "DefinitionClass.to_launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the data in emailfield",
  "rows": [
    {
      "cells": [
        "Kevin",
        "Johnson",
        "Muruga",
        "Mano"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "DefinitionClass.to_pass_the_data_in_emailfield(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the data in passwordfield",
  "rows": [
    {
      "cells": [
        "aaaaa",
        "bbbbbb",
        "cccccc",
        "ddddd",
        "eeeee",
        "ffff"
      ]
    },
    {
      "cells": [
        "22222",
        "333333",
        "444444",
        "55555",
        "66666",
        "7777"
      ]
    },
    {
      "cells": [
        "sjked",
        "1234hk",
        "cncjfk",
        "45b6b",
        "nsncj",
        "54bk"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.to_pass_the_data_in_passwordfield(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "DefinitionClass.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionClass.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate login by using negative and positve multiple data parallely",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser and hit the url",
  "keyword": "Given "
});
formatter.step({
  "name": "pass the data in\"\u003cemailfield\u003e\" emailfield",
  "keyword": "When "
});
formatter.step({
  "name": "pass the data in \"\u003cpasswordfield\u003e\" passwordfield",
  "keyword": "And "
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailfield",
        "passwordfield"
      ]
    },
    {
      "cells": [
        "kevin123",
        "kevin"
      ]
    },
    {
      "cells": [
        "johnson123",
        "johnson"
      ]
    },
    {
      "cells": [
        "muruga123",
        "muruga"
      ]
    },
    {
      "cells": [
        "saran123",
        "saran"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate login by using negative and positve multiple data parallely",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "ExmplClass.launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in\"kevin123\" emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in \"kevin\" passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_passwordfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ExmplClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using negative and positve multiple data parallely",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "ExmplClass.launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in\"johnson123\" emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in \"johnson\" passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_passwordfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ExmplClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using negative and positve multiple data parallely",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "ExmplClass.launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in\"muruga123\" emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in \"muruga\" passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_passwordfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ExmplClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login by using negative and positve multiple data parallely",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Launch the browser and hit the url",
  "keyword": "Given "
});
formatter.match({
  "location": "ExmplClass.launch_the_browser_and_hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in\"saran123\" emailfield",
  "keyword": "When "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_emailfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pass the data in \"saran\" passwordfield",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.pass_the_data_in_passwordfield(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "ExmplClass.click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ExmplClass.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});
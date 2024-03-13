Feature: To validate login fuctionality of Facebook application
Scenario: To validate login by using invalid username and valid password
Given To launch the browser and hit the url
When To pass the data in emailfield
|Kevin|Johnson|Muruga|Mano|
And To pass the data in passwordfield
|aaaaa|bbbbbb|cccccc|ddddd|eeeee|ffff|
|22222|333333|444444|55555|66666|7777|
|sjked|1234hk|cncjfk|45b6b|nsncj|54bk|

And To click the login button
Then To close the browser


Scenario Outline: To validate login by using negative and positve multiple data parallely
Given Launch the browser and hit the url
When  pass the data in"<emailfield>" emailfield
And  pass the data in "<passwordfield>" passwordfield
And  click the login button
Then  close the browser

Examples:
|emailfield|passwordfield|
|kevin123|kevin|
|johnson123|johnson|
|muruga123|muruga|
|saran123|saran|

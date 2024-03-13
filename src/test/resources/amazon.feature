Feature:
validate login functionality of amazon
Scenario: validate the amazon login with username and password
Given Launch the amazon brows and hits url
When Pass the value of email or number
And Clic the continue button
And Pass the value of password
And Click the signin button
Then Close the amazon browser
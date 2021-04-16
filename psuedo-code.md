## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## My initial thoughts to meet Acceptance Criteria

```
GIVEN I need a new, secure password
```

- Need variable for password

```
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
```

- Use onClick event to launch the start of series of prompts, alerts, confirmation popups

```
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
```

- Need a variable to store user defined password to then be able to store the user defined password length.
  ( var userPassword.length or maybe 2 separate variables?)
- Need to Validate that the password length is at least 8 characters but Not more than 128. If not, throw an alert
  If password length = <8 || >128
  Then Alert message should tell user at least 8 - 128 max characters, or between 8 - 128 characters.
  Else continue to next password question

```
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
```

- Need 4 var types for characters

```
WHEN I answer each prompt
```

- Need 4 yes/no prompts, and store 4 y/n values to know which character types to include in password

```
THEN my input should be validated and at least one character type should be selected
```

- Need to validate at least 1 charcater type is selected.

```
WHEN all prompts are answered
```

- start to build password

```
THEN a password is generated that matches the selected criteria
```

- Build password string containing the total number of characters defined by the user
- From, at least 1, up to all 4 types of characters defined by user
- Then loop through each of the user defined character types
- Use random.math to randomly select characters from each user defined character type list/string
- Until the total number of random characters matches the user defined password length
- Possibly -- Shuffle the randomly selected characters so they are in a random order.

```
WHEN the password is generated
```

- Verify at least 2 characters in password are from each user defined character types
- Possibly -- Verify password does Not list a character from the same character type as the character listed before it (To avoid grouping of similar character types)

```
THEN the password is either displayed in an alert or written to the page
```

- Ideally, write the final password in the text area on the screen to allow the user to highlight, copy, and paste the password in a password management app.
- Else Write to an Alert. (Check if user is able to Highlight and Copy from an alert.)

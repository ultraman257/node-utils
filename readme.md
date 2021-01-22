# node-utils

Designed to splifiy to creation of microservices by abstacting away common functionality such as error responses and validating user information.

## Current Utils

##### validateEmail

```javascript
validateEmail(email)
```

returns either true or false.

##### normaliseKeyFile
Converts the argument into a valid string containing the keyfile and checks to ensure it fits the format for jwt signing and verifying.
```javascript
normaliseKeyFile(String or path)
```


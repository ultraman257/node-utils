# node-utils

Designed to splifiy to creation of microservices by abstacting away common functionality such as error responses and validating user information.

Intsall by running

```npm install git+https://github.com/ultraman257/node-utils.git --save```

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


#### hasPermission
Checks the user has permission
To use prior to version 1.1 add the following near the top of the route method
```javascript
hasPermission(req, res, "[permission]")
```
To use in version 1.1 or above use the following method
```javascript
router.post('*', hasPermission("[permission]")), (req, res)...
```

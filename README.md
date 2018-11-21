# common-model
Common-model is a utility that aims to be a shared package to facilitate data manipulation across different APIs.

## Updating this README.md
Run `npm run generateReadme` to parse the code for JSDoc comment blocks and recreate this README.md file.

## Install
Run  `npm i @pillarwallet/common-models`
Then `npm i mongoose@5.x -E`

## Examples
Instantiate a model with options:

```javascript
const options =
{
  username: 'myUserName',
};

const { platform } = require('@pillarwallet/common-models');
// Create user model
const user = new platform.User(options);

```

# API

## Members

<dl>
<dt><del><a href="#telegram">telegram</a></del></dt>
<dd></dd>
<dt><del><a href="#twitter">twitter</a></del></dt>
<dd></dd>
</dl>

## Objects

<dl>
<dt><a href="#Asset">Asset</a> : <code>object</code></dt>
<dd><p>Asset model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#BlackList">BlackList</a> : <code>object</code></dt>
<dd><p>BlackList model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Connection">Connection</a> : <code>object</code></dt>
<dd><p>Connection model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Notification">Notification</a> : <code>object</code></dt>
<dd><p>Notification model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#NotificationPreferences">NotificationPreferences</a> : <code>object</code></dt>
<dd><p>NotificationPreferences model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#NotificationType">NotificationType</a> : <code>object</code></dt>
<dd><p>NotificationType model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Register">Register</a> : <code>object</code></dt>
<dd><p>Register model</p>
</dd>
<dt><a href="#User">User</a> : <code>object</code></dt>
<dd><p>User model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Wallet">Wallet</a> : <code>object</code></dt>
<dd><p>Wallet model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
</dl>

<a name="telegram"></a>

## ~~telegram~~
***Deprecated***

**Kind**: global variable  
<a name="twitter"></a>

## ~~twitter~~
***Deprecated***

**Kind**: global variable  
<a name="Asset"></a>

## Asset : <code>object</code>
Asset model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Asset](#Asset) : <code>object</code>
    * [~address](#Asset..address) : <code>String</code>
    * [~decimals](#Asset..decimals) : <code>Number</code>
    * [~description](#Asset..description) : <code>String</code>
    * [~name](#Asset..name) : <code>String</code>
    * [~symbol](#Asset..symbol) : <code>String</code>
    * [~wallpaperUrl](#Asset..wallpaperUrl) : <code>String</code>
    * [~iconUrl](#Asset..iconUrl) : <code>String</code>
    * [~email](#Asset..email) : <code>String</code>
    * [~socialMedia](#Asset..socialMedia) : <code>Array</code>
    * [~website](#Asset..website) : <code>String</code>
    * [~whitepaper](#Asset..whitepaper) : <code>String</code>
    * [~isDefault](#Asset..isDefault) : <code>Boolean</code>
    * [~isPreferred](#Asset..isPreferred) : <code>Boolean</code>
    * [~icos](#Asset..icos) : <code>Array</code>

<a name="Asset..address"></a>

### Asset~address : <code>String</code>
The smart contract address.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Unique**:   
**Required**:   
<a name="Asset..decimals"></a>

### Asset~decimals : <code>Number</code>
Refers to how divisible a token can be.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
<a name="Asset..description"></a>

### Asset~description : <code>String</code>
Simple description of one Token.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..name"></a>

### Asset~name : <code>String</code>
Name by which the token contract should be known.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
**Unique**:   
<a name="Asset..symbol"></a>

### Asset~symbol : <code>String</code>
Symbol by which the token contract should be known, it is broadly equivalent to a stock ticker.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
**Unique**:   
<a name="Asset..wallpaperUrl"></a>

### Asset~wallpaperUrl : <code>String</code>
The token's predefined background image.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..iconUrl"></a>

### Asset~iconUrl : <code>String</code>
The token's predefined icon image.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..email"></a>

### Asset~email : <code>String</code>
The token's email.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..socialMedia"></a>

### Asset~socialMedia : <code>Array</code>
The token's social media.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..website"></a>

### Asset~website : <code>String</code>
The token's website.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..whitepaper"></a>

### Asset~whitepaper : <code>String</code>
The token's whitepaper.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..isDefault"></a>

### Asset~isDefault : <code>Boolean</code>
One flag to check if the Token is default on the wallet.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..isPreferred"></a>

### Asset~isPreferred : <code>Boolean</code>
A flag to indicate preferred tokens within the system.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..icos"></a>

### Asset~icos : <code>Array</code>
Ico details of one Token.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="BlackList"></a>

## BlackList : <code>object</code>
BlackList model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 

<a name="Connection"></a>

## Connection : <code>object</code>
Connection model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Connection](#Connection) : <code>object</code>
    * [~userId](#Connection..userId) : <code>String</code>
    * [~accessKey](#Connection..accessKey) : <code>String</code>
    * [~status](#Connection..status) : <code>String</code>

<a name="Connection..userId"></a>

### Connection~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Required**:   
<a name="Connection..accessKey"></a>

### Connection~accessKey : <code>String</code>
Unique identifier for each connection.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Required**:   
<a name="Connection..status"></a>

### Connection~status : <code>String</code>
The status of each connection.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Required**:   
<a name="Notification"></a>

## Notification : <code>object</code>
Notification model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Notification](#Notification) : <code>object</code>
    * [~type](#Notification..type) : <code>String</code>
    * [~meta](#Notification..meta) : <code>Object</code>
    * [~payload](#Notification..payload) : <code>Object</code>

<a name="Notification..type"></a>

### Notification~type : <code>String</code>
The type of one notification.

**Kind**: inner property of [<code>Notification</code>](#Notification)  
**Required**:   
<a name="Notification..meta"></a>

### Notification~meta : <code>Object</code>
Additional important information about one notification.

**Kind**: inner property of [<code>Notification</code>](#Notification)  
**Required**:   
<a name="Notification..payload"></a>

### Notification~payload : <code>Object</code>
The content of one notification.

**Kind**: inner property of [<code>Notification</code>](#Notification)  
**Required**:   
<a name="NotificationPreferences"></a>

## NotificationPreferences : <code>object</code>
NotificationPreferences model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [NotificationPreferences](#NotificationPreferences) : <code>object</code>
    * [~userId](#NotificationPreferences..userId) : <code>String</code>
    * [~newOffer](#NotificationPreferences..newOffer) : <code>Boolean</code>
    * [~newReceipt](#NotificationPreferences..newReceipt) : <code>Boolean</code>
    * [~paymentConfirmation](#NotificationPreferences..paymentConfirmation) : <code>Boolean</code>
    * [~paymentStatusUpdate](#NotificationPreferences..paymentStatusUpdate) : <code>Boolean</code>
    * [~profileUpdate](#NotificationPreferences..profileUpdate) : <code>Boolean</code>
    * [~fundsDeposit](#NotificationPreferences..fundsDeposit) : <code>Boolean</code>
    * [~transactionEvent](#NotificationPreferences..transactionEvent) : <code>Boolean</code>

<a name="NotificationPreferences..userId"></a>

### NotificationPreferences~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
**Unique**:   
<a name="NotificationPreferences..newOffer"></a>

### NotificationPreferences~newOffer : <code>Boolean</code>
One flag for newOffer notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..newReceipt"></a>

### NotificationPreferences~newReceipt : <code>Boolean</code>
One flag for newReceipt notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..paymentConfirmation"></a>

### NotificationPreferences~paymentConfirmation : <code>Boolean</code>
One flag for paymentConfirmation notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..paymentStatusUpdate"></a>

### NotificationPreferences~paymentStatusUpdate : <code>Boolean</code>
One flag for paymentStatusUpdate notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..profileUpdate"></a>

### NotificationPreferences~profileUpdate : <code>Boolean</code>
One flag for profileUpdate notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..fundsDeposit"></a>

### NotificationPreferences~fundsDeposit : <code>Boolean</code>
One flag for fundsDeposit notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..transactionEvent"></a>

### NotificationPreferences~transactionEvent : <code>Boolean</code>
One flag for transactionEvent notification.

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationType"></a>

## NotificationType : <code>object</code>
NotificationType model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [NotificationType](#NotificationType) : <code>object</code>
    * [~type](#NotificationType..type) : <code>String</code>
    * [~name](#NotificationType..name) : <code>String</code>
    * [~actions](#NotificationType..actions) : <code>Object</code>

<a name="NotificationType..type"></a>

### NotificationType~type : <code>String</code>
The type of one notification.

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
**Unique**:   
<a name="NotificationType..name"></a>

### NotificationType~name : <code>String</code>
The name of one notification.

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
<a name="NotificationType..actions"></a>

### NotificationType~actions : <code>Object</code>
Actions related with one notification.

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
<a name="Register"></a>

## Register : <code>object</code>
Register model

**Kind**: global namespace  

* [Register](#Register) : <code>object</code>
    * [~authorizationCode](#Register..authorizationCode) : <code>String</code>
    * [~nonce](#Register..nonce) : <code>String</code>
    * [~nonceExpiry](#Register..nonceExpiry) : <code>String</code>
    * [~publicKey](#Register..publicKey) : <code>String</code>
    * [~uuid](#Register..uuid) : <code>String</code>
    * [~walletId](#Register..walletId) : <code>String</code>

<a name="Register..authorizationCode"></a>

### Register~authorizationCode : <code>String</code>
Authorisation code generated by platform-authentication

**Kind**: inner property of [<code>Register</code>](#Register)  
<a name="Register..nonce"></a>

### Register~nonce : <code>String</code>
A one time code for a request between the wallet and platform-core

**Kind**: inner property of [<code>Register</code>](#Register)  
**Required**:   
<a name="Register..nonceExpiry"></a>

### Register~nonceExpiry : <code>String</code>
The expiry of the nonce

**Kind**: inner property of [<code>Register</code>](#Register)  
**Required**:   
<a name="Register..publicKey"></a>

### Register~publicKey : <code>String</code>
The public key of a wallet

**Kind**: inner property of [<code>Register</code>](#Register)  
**Required**:   
<a name="Register..uuid"></a>

### Register~uuid : <code>String</code>
A random unique identifier used for the registration process

**Kind**: inner property of [<code>Register</code>](#Register)  
**Required**:   
<a name="Register..walletId"></a>

### Register~walletId : <code>String</code>
The ID of a wallet that's created as part of the registration flow

**Kind**: inner property of [<code>Register</code>](#Register)  
<a name="User"></a>

## User : <code>object</code>
User model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [User](#User) : <code>object</code>
    * [~userId](#User..userId) : <code>String</code>
    * [~targetUserId](#User..targetUserId) : <code>String</code>
    * [~username](#User..username) : <code>String</code>
    * [~firstName](#User..firstName) : <code>String</code>
    * [~lastName](#User..lastName) : <code>String</code>
    * [~email](#User..email) : <code>String</code>
    * [~isEmailVerified](#User..isEmailVerified) : <code>Boolean</code>
    * [~emailOneTimePassword](#User..emailOneTimePassword) : <code>String</code>
    * [~phone](#User..phone) : <code>String</code>
    * [~isPhoneVerified](#User..isPhoneVerified) : <code>Boolean</code>
    * [~phoneOneTimePassword](#User..phoneOneTimePassword) : <code>String</code>
    * [~country](#User..country) : <code>String</code>
    * [~state](#User..state) : <code>String</code>
    * [~city](#User..city) : <code>String</code>
    * [~userSearchable](#User..userSearchable) : <code>Boolean</code>
    * [~tagline](#User..tagline) : <code>String</code>
    * [~taglineStatus](#User..taglineStatus) : <code>Boolean</code>
    * [~profileImage](#User..profileImage) : <code>String</code>
    * [~icoService](#User..icoService) : <code>Object</code>
    * [~status](#User..status) : <code>String</code>

<a name="User..userId"></a>

### User~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>User</code>](#User)  
**Required**:   
<a name="User..targetUserId"></a>

### User~targetUserId : <code>String</code>
The blacklisted user identifier.

**Kind**: inner property of [<code>User</code>](#User)  
**Required**:   
<a name="User..username"></a>

### User~username : <code>String</code>
The username.

**Kind**: inner property of [<code>User</code>](#User)  
**Required**:   
**Unique**:   
<a name="User..firstName"></a>

### User~firstName : <code>String</code>
The user's first name.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..lastName"></a>

### User~lastName : <code>String</code>
The user's last name.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..email"></a>

### User~email : <code>String</code>
The user's email.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..isEmailVerified"></a>

### User~isEmailVerified : <code>Boolean</code>
One flag to check user's email.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..emailOneTimePassword"></a>

### User~emailOneTimePassword : <code>String</code>
The user's email one time password.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..phone"></a>

### User~phone : <code>String</code>
The user's phone.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..isPhoneVerified"></a>

### User~isPhoneVerified : <code>Boolean</code>
One flag to check user's phone.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..phoneOneTimePassword"></a>

### User~phoneOneTimePassword : <code>String</code>
The user's phone one time password.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..country"></a>

### User~country : <code>String</code>
The user's country.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..state"></a>

### User~state : <code>String</code>
The user's state.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..city"></a>

### User~city : <code>String</code>
The user's city.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..userSearchable"></a>

### User~userSearchable : <code>Boolean</code>
One flag to check if user is searchable.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..tagline"></a>

### User~tagline : <code>String</code>
The user's tagline.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..taglineStatus"></a>

### User~taglineStatus : <code>Boolean</code>
One flag to check if user's tagline is displayable.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..profileImage"></a>

### User~profileImage : <code>String</code>
The user's profileImage.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..icoService"></a>

### User~icoService : <code>Object</code>
Information related to the user's account with a service provider for ICOs.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..status"></a>

### User~status : <code>String</code>
The user status in the system.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="Wallet"></a>

## Wallet : <code>object</code>
Wallet model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Wallet](#Wallet) : <code>object</code>
    * [~publicKey](#Wallet..publicKey) : <code>String</code>
    * [~userId](#Wallet..userId) : <code>String</code>
    * [~ethAddress](#Wallet..ethAddress) : <code>String</code>
    * [~fcmToken](#Wallet..fcmToken) : <code>String</code>
    * [~signalRegistrationId](#Wallet..signalRegistrationId) : <code>String</code>
    * [~bcxRegistered](#Wallet..bcxRegistered) : <code>Boolean</code>

<a name="Wallet..publicKey"></a>

### Wallet~publicKey : <code>String</code>
The public Key of one user.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..userId"></a>

### Wallet~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..ethAddress"></a>

### Wallet~ethAddress : <code>String</code>
The ethereum address of one user.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..fcmToken"></a>

### Wallet~fcmToken : <code>String</code>
The fcm identifier of one user.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
<a name="Wallet..signalRegistrationId"></a>

### Wallet~signalRegistrationId : <code>String</code>
The user's signal identifier.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..bcxRegistered"></a>

### Wallet~bcxRegistered : <code>Boolean</code>
One flag to check BCX registration.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  

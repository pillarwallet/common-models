# common-model
Common-model is a utility that aims to be a shared package to facilitate Data manipulation across diferent APIs.

## Updating this README.md
Run `npm run generateReadme` to parse the code for JSDoc comment blocks and recreate this README.md file.

## Install
Run `npm i @pillarwallet/common-model`

## Examples
Instantiate a model with options:

```javascript
const options =
{
  username: 'myUserName',
};
const { platform } = require('@pillarwallet/common-model');
// Create user model
const user = new platform.User(options);

```

# API

## Objects

<dl>
<dt><a href="#Asset">Asset</a> : <code>object</code></dt>
<dd><p>Asset model maps to a MongoDB collection and defines the shape of the document.</p>
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
<dt><a href="#Wallet">Wallet</a> : <code>object</code></dt>
<dd><p>Wallet model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
</dl>

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
    * [~icos](#Asset..icos) : <code>Array</code>

<a name="Asset..address"></a>

### Asset~address : <code>String</code>
the smart contract address

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Unique**:   
**Required**:   
<a name="Asset..decimals"></a>

### Asset~decimals : <code>Number</code>
refers to how divisible a token can be

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
<a name="Asset..description"></a>

### Asset~description : <code>String</code>
simple description of one Token

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..name"></a>

### Asset~name : <code>String</code>
name by which the token contract should be known

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
**Unique**:   
<a name="Asset..symbol"></a>

### Asset~symbol : <code>String</code>
symbol by which the token contract should be known, it is broadly equivalent to a stock ticker

**Kind**: inner property of [<code>Asset</code>](#Asset)  
**Required**:   
**Unique**:   
<a name="Asset..wallpaperUrl"></a>

### Asset~wallpaperUrl : <code>String</code>
the token's predefined background image

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..iconUrl"></a>

### Asset~iconUrl : <code>String</code>
the token's predefined icon image

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..email"></a>

### Asset~email : <code>String</code>
the token's email

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..socialMedia"></a>

### Asset~socialMedia : <code>Array</code>
the token's social media

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..website"></a>

### Asset~website : <code>String</code>
the token's website

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..whitepaper"></a>

### Asset~whitepaper : <code>String</code>
the token's whitepaper

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..isDefault"></a>

### Asset~isDefault : <code>Boolean</code>
one flag to check if the Token is default on the wallet

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..icos"></a>

### Asset~icos : <code>Array</code>
ico details of one Token

**Kind**: inner property of [<code>Asset</code>](#Asset)  
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
the user identifier

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Required**:   
<a name="Connection..accessKey"></a>

### Connection~accessKey : <code>String</code>
unique identifier for each connection

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Required**:   
<a name="Connection..status"></a>

### Connection~status : <code>String</code>
the status of each connection

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
the type of one notification

**Kind**: inner property of [<code>Notification</code>](#Notification)  
**Required**:   
<a name="Notification..meta"></a>

### Notification~meta : <code>Object</code>
additional important information about one notification

**Kind**: inner property of [<code>Notification</code>](#Notification)  
**Required**:   
<a name="Notification..payload"></a>

### Notification~payload : <code>Object</code>
the content of one notification

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
The user identifier

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
**Unique**:   
<a name="NotificationPreferences..newOffer"></a>

### NotificationPreferences~newOffer : <code>Boolean</code>
One flag for newOffer notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..newReceipt"></a>

### NotificationPreferences~newReceipt : <code>Boolean</code>
One flag for newReceipt notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..paymentConfirmation"></a>

### NotificationPreferences~paymentConfirmation : <code>Boolean</code>
One flag for paymentConfirmation notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..paymentStatusUpdate"></a>

### NotificationPreferences~paymentStatusUpdate : <code>Boolean</code>
One flag for paymentStatusUpdate notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..profileUpdate"></a>

### NotificationPreferences~profileUpdate : <code>Boolean</code>
One flag for profileUpdate notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..fundsDeposit"></a>

### NotificationPreferences~fundsDeposit : <code>Boolean</code>
One flag for fundsDeposit notification

**Kind**: inner property of [<code>NotificationPreferences</code>](#NotificationPreferences)  
**Required**:   
<a name="NotificationPreferences..transactionEvent"></a>

### NotificationPreferences~transactionEvent : <code>Boolean</code>
One flag for transactionEvent notification

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
The type of one notification

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
**Unique**:   
<a name="NotificationType..name"></a>

### NotificationType~name : <code>String</code>
The name of one notification

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
<a name="NotificationType..actions"></a>

### NotificationType~actions : <code>Object</code>
Actions related with one notification

**Kind**: inner property of [<code>NotificationType</code>](#NotificationType)  
**Required**:   
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
The public Key of one user

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..userId"></a>

### Wallet~userId : <code>String</code>
The user identifier

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..ethAddress"></a>

### Wallet~ethAddress : <code>String</code>
The ethereum address of one user

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
**Unique**:   
<a name="Wallet..fcmToken"></a>

### Wallet~fcmToken : <code>String</code>
The fcm identifier of one user

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
<a name="Wallet..signalRegistrationId"></a>

### Wallet~signalRegistrationId : <code>String</code>
The user's signal identifier

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..bcxRegistered"></a>

### Wallet~bcxRegistered : <code>Boolean</code>
One flag to check BCX registration

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  

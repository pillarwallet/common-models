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

## Objects

<dl>
<dt><a href="#AccessTokenBackup">AccessTokenBackup</a> : <code>object</code></dt>
<dd><p>AccessTokenBackup model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#AccessTokenBlacklist">AccessTokenBlacklist</a> : <code>object</code></dt>
<dd><p>AccessTokenBlacklist model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Asset">Asset</a> : <code>object</code></dt>
<dd><p>Asset model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Badge">Badge</a> : <code>object</code></dt>
<dd><p>Badge model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#BadgeAward">BadgeAward</a> : <code>object</code></dt>
<dd><p>BadgeAward model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Blacklist">Blacklist</a> : <code>object</code></dt>
<dd><p>Blacklist model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#BlacklistedUsernames">BlacklistedUsernames</a> : <code>object</code></dt>
<dd><p>BlacklistedUsernames model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#BtcDeposit">BtcDeposit</a> : <code>object</code></dt>
<dd><p>BtcDeposit model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Connection">Connection</a> : <code>object</code></dt>
<dd><p>Connection model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#IpfsStorage">IpfsStorage</a> : <code>object</code></dt>
<dd><p>IpfsStorage model maps to a MongoDB collection and defines the shape of the document.</p>
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
<dt><a href="#ReferralCampaign">ReferralCampaign</a> : <code>object</code></dt>
<dd><p>ReferralCampaign model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#ReferralDevice">ReferralDevice</a> : <code>object</code></dt>
<dd><p>ReferralDevice model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#ReferralInvitation">ReferralInvitation</a> : <code>object</code></dt>
<dd><p>ReferralInvitation model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#ReferralTransaction">ReferralTransaction</a> : <code>object</code></dt>
<dd><p>ReferralTransaction model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Register">Register</a> : <code>object</code></dt>
<dd><p>Register model</p>
</dd>
<dt><a href="#Story">Story</a> : <code>object</code></dt>
<dd><p>Story model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#StoryPage">StoryPage</a> : <code>object</code></dt>
<dd><p>StoryPage model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#User">User</a> : <code>object</code></dt>
<dd><p>User model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#UserFeatureFlags">UserFeatureFlags</a> : <code>object</code></dt>
<dd><p>UserFeatureFlags model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
<dt><a href="#Wallet">Wallet</a> : <code>object</code></dt>
<dd><p>Wallet model maps to a MongoDB collection and defines the shape of the document.</p>
</dd>
</dl>

<a name="AccessTokenBackup"></a>

## AccessTokenBackup : <code>object</code>
AccessTokenBackup model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [AccessTokenBackup](#AccessTokenBackup) : <code>object</code>
    * [~userId](#AccessTokenBackup..userId) : <code>String</code>
    * [~contactId](#AccessTokenBackup..contactId) : <code>String</code>
    * [~accessKey](#AccessTokenBackup..accessKey) : <code>String</code>

<a name="AccessTokenBackup..userId"></a>

### AccessTokenBackup~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>AccessTokenBackup</code>](#AccessTokenBackup)  
**Required**:   
<a name="AccessTokenBackup..contactId"></a>

### AccessTokenBackup~contactId : <code>String</code>
The contact identifier.

**Kind**: inner property of [<code>AccessTokenBackup</code>](#AccessTokenBackup)  
**Required**:   
<a name="AccessTokenBackup..accessKey"></a>

### AccessTokenBackup~accessKey : <code>String</code>
Unique identifier for each connection.

**Kind**: inner property of [<code>AccessTokenBackup</code>](#AccessTokenBackup)  
**Required**:   
<a name="AccessTokenBlacklist"></a>

## AccessTokenBlacklist : <code>object</code>
AccessTokenBlacklist model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 

<a name="AccessTokenBlacklist..accessToken"></a>

### AccessTokenBlacklist~accessToken : <code>String</code>
A user's valid access token.

**Kind**: inner property of [<code>AccessTokenBlacklist</code>](#AccessTokenBlacklist)  
**Required**:   
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
    * [~iconMonoUrl](#Asset..iconMonoUrl) : <code>String</code>
    * [~patternUrl](#Asset..patternUrl) : <code>String</code>
    * [~email](#Asset..email) : <code>String</code>
    * ~~[~telegram](#Asset..telegram)~~
    * ~~[~twitter](#Asset..twitter)~~
    * [~socialMedia](#Asset..socialMedia) : <code>Array</code>
    * [~website](#Asset..website) : <code>String</code>
    * [~whitepaper](#Asset..whitepaper) : <code>String</code>
    * [~isDefault](#Asset..isDefault) : <code>Boolean</code>
    * [~isPreferred](#Asset..isPreferred) : <code>Boolean</code>
    * [~totalSupply](#Asset..totalSupply) : <code>String</code>
    * [~icos](#Asset..icos) : <code>Array</code>
    * [~isSynthetixAsset](#Asset..isSynthetixAsset) : <code>Boolean</code>

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
<a name="Asset..iconMonoUrl"></a>

### Asset~iconMonoUrl : <code>String</code>
The token's predefined mono icon image.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..patternUrl"></a>

### Asset~patternUrl : <code>String</code>
The token's predefined icon image (bigger).

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..email"></a>

### Asset~email : <code>String</code>
The token's email.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..telegram"></a>

### ~~Asset~telegram~~
***Deprecated***

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..twitter"></a>

### ~~Asset~twitter~~
***Deprecated***

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
<a name="Asset..totalSupply"></a>

### Asset~totalSupply : <code>String</code>
**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..icos"></a>

### Asset~icos : <code>Array</code>
Ico details of one Token.

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Asset..isSynthetixAsset"></a>

### Asset~isSynthetixAsset : <code>Boolean</code>
A boolean flag to indicate whether this is a Synthetix asset

**Kind**: inner property of [<code>Asset</code>](#Asset)  
<a name="Badge"></a>

## Badge : <code>object</code>
Badge model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Badge](#Badge) : <code>object</code>
    * [~name](#Badge..name) : <code>String</code>
    * [~type](#Badge..type) : <code>String</code>
    * [~imageUrl](#Badge..imageUrl) : <code>String</code>
    * [~subtitle](#Badge..subtitle) : <code>String</code>
    * [~description](#Badge..description) : <code>String</code>
    * [~selfAward](#Badge..selfAward) : <code>Boolean</code>

<a name="Badge..name"></a>

### Badge~name : <code>String</code>
Name by which the badge should be known.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
**Required**:   
<a name="Badge..type"></a>

### Badge~type : <code>String</code>
Badge type by which backend could find particular badge.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
**Required**:   
**Unique**:   
<a name="Badge..imageUrl"></a>

### Badge~imageUrl : <code>String</code>
Image url of the badge.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
<a name="Badge..subtitle"></a>

### Badge~subtitle : <code>String</code>
Optional subtitle of the badge.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
<a name="Badge..description"></a>

### Badge~description : <code>String</code>
Simple description of one badge.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
<a name="Badge..selfAward"></a>

### Badge~selfAward : <code>Boolean</code>
A flag to indicate if the badge could be self awarded.

**Kind**: inner property of [<code>Badge</code>](#Badge)  
<a name="BadgeAward"></a>

## BadgeAward : <code>object</code>
BadgeAward model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [BadgeAward](#BadgeAward) : <code>object</code>
    * [~badge](#BadgeAward..badge) : <code>String</code>
    * [~badgeType](#BadgeAward..badgeType) : <code>String</code>
    * [~userId](#BadgeAward..userId) : <code>String</code>
    * [~walletId](#BadgeAward..walletId) : <code>String</code>

<a name="BadgeAward..badge"></a>

### BadgeAward~badge : <code>String</code>
Badge id.

**Kind**: inner property of [<code>BadgeAward</code>](#BadgeAward)  
**Required**:   
<a name="BadgeAward..badgeType"></a>

### BadgeAward~badgeType : <code>String</code>
Badge type.

**Kind**: inner property of [<code>BadgeAward</code>](#BadgeAward)  
**Required**:   
<a name="BadgeAward..userId"></a>

### BadgeAward~userId : <code>String</code>
User Id.

**Kind**: inner property of [<code>BadgeAward</code>](#BadgeAward)  
**Required**:   
<a name="BadgeAward..walletId"></a>

### BadgeAward~walletId : <code>String</code>
Wallet Id.

**Kind**: inner property of [<code>BadgeAward</code>](#BadgeAward)  
**Required**:   
<a name="Blacklist"></a>

## Blacklist : <code>object</code>
Blacklist model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Blacklist](#Blacklist) : <code>object</code>
    * [~userId](#Blacklist..userId) : <code>String</code>
    * [~targetUserId](#Blacklist..targetUserId) : <code>String</code>

<a name="Blacklist..userId"></a>

### Blacklist~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>Blacklist</code>](#Blacklist)  
**Required**:   
<a name="Blacklist..targetUserId"></a>

### Blacklist~targetUserId : <code>String</code>
The blacklisted user identifier.

**Kind**: inner property of [<code>Blacklist</code>](#Blacklist)  
**Required**:   
<a name="BlacklistedUsernames"></a>

## BlacklistedUsernames : <code>object</code>
BlacklistedUsernames model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 

<a name="BlacklistedUsernames..username"></a>

### BlacklistedUsernames~username : <code>String</code>
The blacklisted username.

**Kind**: inner property of [<code>BlacklistedUsernames</code>](#BlacklistedUsernames)  
**Unique**:   
**Required**:   
<a name="BtcDeposit"></a>

## BtcDeposit : <code>object</code>
BtcDeposit model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [BtcDeposit](#BtcDeposit) : <code>object</code>
    * [~status](#BtcDeposit..status) : <code>String</code>
    * [~nonce](#BtcDeposit..nonce) : <code>String</code>
    * [~txHash](#BtcDeposit..txHash) : <code>String</code>
    * [~ethereumTxHash](#BtcDeposit..ethereumTxHash) : <code>String</code>
    * [~method](#BtcDeposit..method) : <code>String</code>
    * [~amount](#BtcDeposit..amount) : <code>Number</code>
    * [~exchangeRate](#BtcDeposit..exchangeRate) : <code>Number</code>
    * [~slippage](#BtcDeposit..slippage) : <code>Number</code>
    * [~sender](#BtcDeposit..sender) : <code>String</code>
    * [~destination](#BtcDeposit..destination) : <code>String</code>
    * [~gateway](#BtcDeposit..gateway) : <code>String</code>
    * [~nHash](#BtcDeposit..nHash) : <code>String</code>
    * [~signature](#BtcDeposit..signature) : <code>String</code>
    * [~vOut](#BtcDeposit..vOut) : <code>Number</code>
    * [~confirmations](#BtcDeposit..confirmations) : <code>Number</code>

<a name="BtcDeposit..status"></a>

### BtcDeposit~status : <code>String</code>
The status of the deposit [awaiting, received, submitted].

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..nonce"></a>

### BtcDeposit~nonce : <code>String</code>
The nonce of the deposit.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..txHash"></a>

### BtcDeposit~txHash : <code>String</code>
Hash of the transaction.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..ethereumTxHash"></a>

### BtcDeposit~ethereumTxHash : <code>String</code>
Hash of the ethereum transaction.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..method"></a>

### BtcDeposit~method : <code>String</code>
The method [mint, burn].

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..amount"></a>

### BtcDeposit~amount : <code>Number</code>
The transaction amount.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
<a name="BtcDeposit..exchangeRate"></a>

### BtcDeposit~exchangeRate : <code>Number</code>
The minimum exchange rate.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
<a name="BtcDeposit..slippage"></a>

### BtcDeposit~slippage : <code>Number</code>
The maximum slippage.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
<a name="BtcDeposit..sender"></a>

### BtcDeposit~sender : <code>String</code>
The sender address.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..destination"></a>

### BtcDeposit~destination : <code>String</code>
The destination address.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..gateway"></a>

### BtcDeposit~gateway : <code>String</code>
The gateway address.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..nHash"></a>

### BtcDeposit~nHash : <code>String</code>
The deposit nhash.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..signature"></a>

### BtcDeposit~signature : <code>String</code>
The deposit signature.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..vOut"></a>

### BtcDeposit~vOut : <code>Number</code>
The deposit vOut.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
<a name="BtcDeposit..confirmations"></a>

### BtcDeposit~confirmations : <code>Number</code>
The number of confirmations.

**Kind**: inner property of [<code>BtcDeposit</code>](#BtcDeposit)  
**Required**:   
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
    * [~sourceIdentityKey](#Connection..sourceIdentityKey) : <code>String</code>
    * [~targetIdentityKey](#Connection..targetIdentityKey) : <code>String</code>
    * [~targetUserId](#Connection..targetUserId) : <code>String</code>
    * [~direction](#Connection..direction) : <code>String</code>
    * [~version](#Connection..version) : <code>String</code>

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
<a name="Connection..sourceIdentityKey"></a>

### Connection~sourceIdentityKey : <code>String</code>
The sourceIdentityKey of each connection.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Unique**:   
<a name="Connection..targetIdentityKey"></a>

### Connection~targetIdentityKey : <code>String</code>
The targetIdentityKey of each connection.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
**Unique**:   
<a name="Connection..targetUserId"></a>

### Connection~targetUserId : <code>String</code>
The target user identifier.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
<a name="Connection..direction"></a>

### Connection~direction : <code>String</code>
The direction of the connection.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
<a name="Connection..version"></a>

### Connection~version : <code>String</code>
Connections supoort version.

**Kind**: inner property of [<code>Connection</code>](#Connection)  
<a name="IpfsStorage"></a>

## IpfsStorage : <code>object</code>
IpfsStorage model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [IpfsStorage](#IpfsStorage) : <code>object</code>
    * [~walletId](#IpfsStorage..walletId) : <code>String</code>
    * [~storageId](#IpfsStorage..storageId) : <code>String</code>
    * [~secretKey](#IpfsStorage..secretKey) : <code>String</code>

<a name="IpfsStorage..walletId"></a>

### IpfsStorage~walletId : <code>String</code>
The id of the wallet.

**Kind**: inner property of [<code>IpfsStorage</code>](#IpfsStorage)  
**Required**:   
<a name="IpfsStorage..storageId"></a>

### IpfsStorage~storageId : <code>String</code>
The id of the IPFS storage.

**Kind**: inner property of [<code>IpfsStorage</code>](#IpfsStorage)  
**Required**:   
**Unique**:   
<a name="IpfsStorage..secretKey"></a>

### IpfsStorage~secretKey : <code>String</code>
Secret key for the IPFS storage.

**Kind**: inner property of [<code>IpfsStorage</code>](#IpfsStorage)  
**Required**:   
**Unique**:   
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
<a name="ReferralCampaign"></a>

## ReferralCampaign : <code>object</code>
ReferralCampaign model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [ReferralCampaign](#ReferralCampaign) : <code>object</code>
    * [~name](#ReferralCampaign..name) : <code>String</code>
    * [~token](#ReferralCampaign..token) : <code>String</code>
    * [~contractAddress](#ReferralCampaign..contractAddress) : <code>String</code>
    * [~wallet](#ReferralCampaign..wallet) : <code>Object</code>
    * [~logoUrl](#ReferralCampaign..logoUrl) : <code>String</code>
    * [~badges](#ReferralCampaign..badges) : <code>Boolean</code>
    * [~isActive](#ReferralCampaign..isActive) : <code>Boolean</code>
    * [~relatedCampaigns](#ReferralCampaign..relatedCampaigns) : <code>[ &#x27;Array&#x27; ].&lt;String&gt;</code>

<a name="ReferralCampaign..name"></a>

### ReferralCampaign~name : <code>String</code>
Name of the campaign.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
**Required**:   
**Unique**:   
<a name="ReferralCampaign..token"></a>

### ReferralCampaign~token : <code>String</code>
Default token issued for the campaign.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
**Required**:   
<a name="ReferralCampaign..contractAddress"></a>

### ReferralCampaign~contractAddress : <code>String</code>
Contract address of the default token.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
**Required**:   
<a name="ReferralCampaign..wallet"></a>

### ReferralCampaign~wallet : <code>Object</code>
The reward wallet.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
**Required**:   
<a name="ReferralCampaign..logoUrl"></a>

### ReferralCampaign~logoUrl : <code>String</code>
Logo URL to S3.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
<a name="ReferralCampaign..badges"></a>

### ReferralCampaign~badges : <code>Boolean</code>
Flag indicating if the campaign should issue badges.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
<a name="ReferralCampaign..isActive"></a>

### ReferralCampaign~isActive : <code>Boolean</code>
Flag indicating if the campaign is active.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
<a name="ReferralCampaign..relatedCampaigns"></a>

### ReferralCampaign~relatedCampaigns : <code>[ &#x27;Array&#x27; ].&lt;String&gt;</code>
An array of related campaigns.

**Kind**: inner property of [<code>ReferralCampaign</code>](#ReferralCampaign)  
<a name="ReferralDevice"></a>

## ReferralDevice : <code>object</code>
ReferralDevice model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [ReferralDevice](#ReferralDevice) : <code>object</code>
    * [~deviceInfo](#ReferralDevice..deviceInfo) : <code>String</code>
    * [~deviceOs](#ReferralDevice..deviceOs) : <code>String</code>
    * [~firstInstall](#ReferralDevice..firstInstall) : <code>String</code>

<a name="ReferralDevice..deviceInfo"></a>

### ReferralDevice~deviceInfo : <code>String</code>
Device info stored as checksum.

**Kind**: inner property of [<code>ReferralDevice</code>](#ReferralDevice)  
**Unique**:   
**Required**:   
<a name="ReferralDevice..deviceOs"></a>

### ReferralDevice~deviceOs : <code>String</code>
Device OS.

**Kind**: inner property of [<code>ReferralDevice</code>](#ReferralDevice)  
**Required**:   
<a name="ReferralDevice..firstInstall"></a>

### ReferralDevice~firstInstall : <code>String</code>
Flag for first install.

**Kind**: inner property of [<code>ReferralDevice</code>](#ReferralDevice)  
**Required**:   
<a name="ReferralInvitation"></a>

## ReferralInvitation : <code>object</code>
ReferralInvitation model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [ReferralInvitation](#ReferralInvitation) : <code>object</code>
    * [~amount](#ReferralInvitation..amount) : <code>Number</code>
    * [~userId](#ReferralInvitation..userId) : <code>String</code>
    * [~email](#ReferralInvitation..email) : <code>String</code>
    * [~phone](#ReferralInvitation..phone) : <code>String</code>
    * [~claimed](#ReferralInvitation..claimed) : <code>Boolean</code>
    * [~invitedUserId](#ReferralInvitation..invitedUserId) : <code>String</code>
    * [~token](#ReferralInvitation..token) : <code>String</code>
    * [~partner](#ReferralInvitation..partner) : <code>Boolean</code>
    * [~campaign](#ReferralInvitation..campaign) : <code>String</code>
    * [~amount](#ReferralInvitation..amount) : <code>Number</code>
    * [~notified](#ReferralInvitation..notified) : <code>Boolean</code>

<a name="ReferralInvitation..amount"></a>

### ReferralInvitation~amount : <code>Number</code>
Default amount to reward.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..userId"></a>

### ReferralInvitation~userId : <code>String</code>
The user identifier of the inviter.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
**Required**:   
<a name="ReferralInvitation..email"></a>

### ReferralInvitation~email : <code>String</code>
Email of the invited person.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..phone"></a>

### ReferralInvitation~phone : <code>String</code>
Phone of the invited person.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..claimed"></a>

### ReferralInvitation~claimed : <code>Boolean</code>
Flag indicating if the user claimed the reward.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..invitedUserId"></a>

### ReferralInvitation~invitedUserId : <code>String</code>
The user identifier of the invited user.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..token"></a>

### ReferralInvitation~token : <code>String</code>
Token generated by Platform-Core API, to validate Branch.io webhooks.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
**Required**:   
<a name="ReferralInvitation..partner"></a>

### ReferralInvitation~partner : <code>Boolean</code>
Flag indicating if it is a partner campaign.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..campaign"></a>

### ReferralInvitation~campaign : <code>String</code>
The campaign identifier.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..amount"></a>

### ReferralInvitation~amount : <code>Number</code>
The amount to reward.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralInvitation..notified"></a>

### ReferralInvitation~notified : <code>Boolean</code>
Flag indicating if the user has been notified when the campaign has been terminated.

**Kind**: inner property of [<code>ReferralInvitation</code>](#ReferralInvitation)  
<a name="ReferralTransaction"></a>

## ReferralTransaction : <code>object</code>
ReferralTransaction model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [ReferralTransaction](#ReferralTransaction) : <code>object</code>
    * [~name](#ReferralTransaction..name) : <code>String</code>
    * [~ethAddress](#ReferralTransaction..ethAddress) : <code>String</code>
    * [~txHash](#ReferralTransaction..txHash) : <code>String</code>
    * [~amount](#ReferralTransaction..amount) : <code>Number</code>
    * [~asset](#ReferralTransaction..asset) : <code>String</code>

<a name="ReferralTransaction..name"></a>

### ReferralTransaction~name : <code>String</code>
The status of the transaction [confirmed, failed].

**Kind**: inner property of [<code>ReferralTransaction</code>](#ReferralTransaction)  
**Required**:   
<a name="ReferralTransaction..ethAddress"></a>

### ReferralTransaction~ethAddress : <code>String</code>
Address of the user to be rewarded.

**Kind**: inner property of [<code>ReferralTransaction</code>](#ReferralTransaction)  
**Required**:   
<a name="ReferralTransaction..txHash"></a>

### ReferralTransaction~txHash : <code>String</code>
Hash of the transaction.

**Kind**: inner property of [<code>ReferralTransaction</code>](#ReferralTransaction)  
**Required**:   
<a name="ReferralTransaction..amount"></a>

### ReferralTransaction~amount : <code>Number</code>
The amount of PLR for the reward.

**Kind**: inner property of [<code>ReferralTransaction</code>](#ReferralTransaction)  
**Required**:   
<a name="ReferralTransaction..asset"></a>

### ReferralTransaction~asset : <code>String</code>
Asset symbol.

**Kind**: inner property of [<code>ReferralTransaction</code>](#ReferralTransaction)  
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
<a name="Story"></a>

## Story : <code>object</code>
Story model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [Story](#Story) : <code>object</code>
    * [~shortTitle](#Story..shortTitle) : <code>String</code>
    * [~imageUrl](#Story..imageUrl) : <code>String</code>
    * [~imageMonoUrl](#Story..imageMonoUrl) : <code>String</code>
    * [~active](#Story..active) : <code>Boolean</code>
    * [~topic](#Story..topic) : <code>String</code>
    * [~title](#Story..title) : <code>String</code>
    * [~likes](#Story..likes) : <code>Number</code>

<a name="Story..shortTitle"></a>

### Story~shortTitle : <code>String</code>
Short title of the story.

**Kind**: inner property of [<code>Story</code>](#Story)  
**Required**:   
<a name="Story..imageUrl"></a>

### Story~imageUrl : <code>String</code>
The story's preview image.

**Kind**: inner property of [<code>Story</code>](#Story)  
<a name="Story..imageMonoUrl"></a>

### Story~imageMonoUrl : <code>String</code>
The story's preview mono image.

**Kind**: inner property of [<code>Story</code>](#Story)  
<a name="Story..active"></a>

### Story~active : <code>Boolean</code>
Flag to enable/disable the story preview.

**Kind**: inner property of [<code>Story</code>](#Story)  
<a name="Story..topic"></a>

### Story~topic : <code>String</code>
Topic for the story page.

**Kind**: inner property of [<code>Story</code>](#Story)  
**Required**:   
<a name="Story..title"></a>

### Story~title : <code>String</code>
Title of the story page.

**Kind**: inner property of [<code>Story</code>](#Story)  
**Required**:   
<a name="Story..likes"></a>

### Story~likes : <code>Number</code>
Counter for the likes of a story page.

**Kind**: inner property of [<code>Story</code>](#Story)  
<a name="StoryPage"></a>

## StoryPage : <code>object</code>
StoryPage model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [StoryPage](#StoryPage) : <code>object</code>
    * [~storyId](#StoryPage..storyId) : <code>String</code>
    * [~pageNumber](#StoryPage..pageNumber) : <code>Number</code>
    * [~body](#StoryPage..body) : <code>String</code>
    * [~imageUrl](#StoryPage..imageUrl) : <code>String</code>
    * [~imageMonoUrl](#StoryPage..imageMonoUrl) : <code>String</code>
    * [~layoutType](#StoryPage..layoutType) : <code>String</code>
    * [~backgroundColor](#StoryPage..backgroundColor) : <code>String</code>
    * [~textContrast](#StoryPage..textContrast) : <code>String</code>

<a name="StoryPage..storyId"></a>

### StoryPage~storyId : <code>String</code>
ID of the story to which the page belongs.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..pageNumber"></a>

### StoryPage~pageNumber : <code>Number</code>
Number of the page in a story.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..body"></a>

### StoryPage~body : <code>String</code>
Body text of the story page.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..imageUrl"></a>

### StoryPage~imageUrl : <code>String</code>
The story's uploaded image.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..imageMonoUrl"></a>

### StoryPage~imageMonoUrl : <code>String</code>
The story's uploaded mono image.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..layoutType"></a>

### StoryPage~layoutType : <code>String</code>
Predefined layout type for the story page.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
**Required**:   
<a name="StoryPage..backgroundColor"></a>

### StoryPage~backgroundColor : <code>String</code>
Background color value.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="StoryPage..textContrast"></a>

### StoryPage~textContrast : <code>String</code>
Text Contrast.

**Kind**: inner property of [<code>StoryPage</code>](#StoryPage)  
<a name="User"></a>

## User : <code>object</code>
User model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [User](#User) : <code>object</code>
    * [~username](#User..username) : <code>String</code>
    * [~registrationId](#User..registrationId) : <code>String</code>
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
    * [~secretId](#User..secretId) : <code>String</code>
    * [~betaProgramParticipant](#User..betaProgramParticipant) : <code>Boolean</code>
    * [~lastSeen](#User..lastSeen) : <code>Date</code>

<a name="User..username"></a>

### User~username : <code>String</code>
The username.

**Kind**: inner property of [<code>User</code>](#User)  
**Required**:   
**Unique**:   
<a name="User..registrationId"></a>

### User~registrationId : <code>String</code>
The user's registration Id.

**Kind**: inner property of [<code>User</code>](#User)  
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
<a name="User..secretId"></a>

### User~secretId : <code>String</code>
The user secretId.

**Kind**: inner property of [<code>User</code>](#User)  
**Required**:   
<a name="User..betaProgramParticipant"></a>

### User~betaProgramParticipant : <code>Boolean</code>
One flag to check if user is beta program participant.

**Kind**: inner property of [<code>User</code>](#User)  
<a name="User..lastSeen"></a>

### User~lastSeen : <code>Date</code>
A timestamp with user last activity

**Kind**: inner property of [<code>User</code>](#User)  
<a name="UserFeatureFlags"></a>

## UserFeatureFlags : <code>object</code>
UserFeatureFlags model maps to a MongoDB collection and defines the shape of the document.

**Kind**: global namespace  

| Param |
| --- |
| schema | 


* [UserFeatureFlags](#UserFeatureFlags) : <code>object</code>
    * [~userId](#UserFeatureFlags..userId) : <code>String</code>
    * [~smartWallet](#UserFeatureFlags..smartWallet) : <code>Boolean</code>
    * [~bitcoin](#UserFeatureFlags..bitcoin) : <code>Boolean</code>

<a name="UserFeatureFlags..userId"></a>

### UserFeatureFlags~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>UserFeatureFlags</code>](#UserFeatureFlags)  
**Required**:   
**Unique**:   
<a name="UserFeatureFlags..smartWallet"></a>

### UserFeatureFlags~smartWallet : <code>Boolean</code>
One flag for Smart Wallet support.

**Kind**: inner property of [<code>UserFeatureFlags</code>](#UserFeatureFlags)  
<a name="UserFeatureFlags..bitcoin"></a>

### UserFeatureFlags~bitcoin : <code>Boolean</code>
One flag for Bitcoin support.

**Kind**: inner property of [<code>UserFeatureFlags</code>](#UserFeatureFlags)  
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
    * [~blocknativeRegistered](#Wallet..blocknativeRegistered) : <code>Boolean</code>
    * [~type](#Wallet..type) : <code>String</code>
    * [~disabled](#Wallet..disabled) : <code>Boolean</code>
    * [~recovery](#Wallet..recovery) : <code>Boolean</code>

<a name="Wallet..publicKey"></a>

### Wallet~publicKey : <code>String</code>
The public Key of one user.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
<a name="Wallet..userId"></a>

### Wallet~userId : <code>String</code>
The user identifier.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
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
<a name="Wallet..signalRegistrationId"></a>

### Wallet~signalRegistrationId : <code>String</code>
The user's signal identifier.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..bcxRegistered"></a>

### Wallet~bcxRegistered : <code>Boolean</code>
One flag to check BCX registration.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..blocknativeRegistered"></a>

### Wallet~blocknativeRegistered : <code>Boolean</code>
One flag to check Blocknative address registration.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..type"></a>

### Wallet~type : <code>String</code>
The type of the wallet.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
<a name="Wallet..disabled"></a>

### Wallet~disabled : <code>Boolean</code>
A flag indicating if the wallet is disabled or not.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   
<a name="Wallet..recovery"></a>

### Wallet~recovery : <code>Boolean</code>
A flag indicating if the wallet is recovery wallet or not.

**Kind**: inner property of [<code>Wallet</code>](#Wallet)  
**Required**:   

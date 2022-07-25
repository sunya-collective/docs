---
part: for developers
title: Authentication Logging
---

### MixPanel

Client-side logging for our verification flow is done using [MixPanel](https://mixpanel.com/project/2762589/). 
* [MixPanel Project](https://mixpanel.com/project/2762589/) (staging and production environments)
* [MixPanel Project](https://mixpanel.com/project/2762575) (dev environment)

### Log Events

So far, we track the following events:

<Tabs>
  <Tab title="General">

    `Page load`

    `Sign in`

    `Sign out`

  </Tab>
  <Tab title="Transactions">

    `Buy click`

    `Buy transaction sent`

    `Buy transaction confirmed`

    `List click`

    `List transaction sent`

    `List transaction confirmed`

    `Cancel click`

    `Cancel transaction sent`

    `Cancel transaction confirmed`

  </Tab>
  <Tab title="Interactions">
    
    `Share`

    `Specifications impression`

    `History impression`

    `Etherscan visit`

    `Opensea visit`

    `Twitter visit`

  </Tab>
</Tabs>

### Additional Data

Each log event comes with additional data attached, most provided by MixPanel such as:

![](/mixpanel_properties.png "title-1")

!> User Identification
After a user logs in, we can use MixPanel to track the user by their wallet address by calling `mixpanel.identify(address)`. MixPanel automatically works to associate future and past events with that user to help piece together the full user's journey.

In addition to MixPanel's supplied fields and user ID, we attach custom fields - the most important are:
1. Environment (production, staging, development)
2. Token address
3. Token ID 

This can look like:
```json dark
{
  "event": "Buy click",
  "properties": {
    "authenticated": false, // User was not logged in while performing this action
    "environment": "production",
    "token_address": "0xE7CD1a35575F7f004C5d0731102A4689eC18D82D",
    "token_id": "22"
  }
}
```
# Lonely Hackers Club website

The site is made using Hugo, and deployed into Github Pages [using Github Actions](https://gohugo.io/hosting-and-deployment/hosting-on-github/)

Any changes merged into the `main` branch of this repo will be visible on https://lonelyhackers.club

## Redirects

To create a redirect, for example to the LHC shop, create a new markdown file `shop.md` in the content directory with the following content:

```
---
menu:
  main:
    name: LHC Shop
    weight: 10
type: redirect
target: https://www.redbubble.com/shop/ap/161645784
---
```

This will redirect https://lonelyhackers.club/shop to the LHC shop as well as add a link to in main menu.

## Developing locally

To develop locally, you will need to install Hugo. You can find instructions on how to do that [here](https://gohugo.io/getting-started/installing/)

Once you have Hugo installed, you can run the site locally by running `hugo server` in the root of the repo. This will start a local server at `http://localhost:1313/` where you can see your changes in real time.

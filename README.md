# Lonely Hackers Club website

The site is made using Hugo, and deployed into Github Pages [using Github Actions](https://gohugo.io/hosting-and-deployment/hosting-on-github/)

Any changes merged into the master branch of this repo will be visible on https://lonelyhackers.club

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
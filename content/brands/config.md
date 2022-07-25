---
part: for brands
title: Brand Config
---

|       |      |
| ----- | ---- |
| ![](/default_screenshot.png "title-1") | ![](/owner_screenshot.png "title-2") |

Brands can customize the look of their product details/authentication page by supplying a standard configuration.

## Configuration Parameters

We support two themes: `default` and `owner`. The first is applied when the viewer is _not_ the owner of the product (or possibly not logged in). For each theme, brands have the ability to specify the following parameters:

| Option | Description                                                 |
| ------ | ------------------------------------------------------------|
| logo   | self-explanatory |
| primary color | used for main text, buttons, etc...                |
| secondary color   | used for background, button text, etc...                        |
| tertiary color | used for supplementary text |


!> Fallback Config
If the `owner` theme is missing, the UX will fallback to using the inverses of the colors provided for the `default` theme. If parameters from the `default` theme are missing, it will fallback to sūnya's default configuration.

### Sunya Default Config

```json dark
default: {
  logoSrc: "https://sunyacollective.com/brand/dark-logo.svg",
  colors: {
    primary: "#1B1B1B",
    secondary: "#E4E4E4",
    tertiary: "#6B6B6B"
  }
},
owner: {
  logoSrc: "https://sunyacollective.com/brand/light-logo.svg",
  colors: {
    primary: "#E4E4E4",
    secondary: "#1B1B1B",
    tertiary: "#949494"
  }
}
```

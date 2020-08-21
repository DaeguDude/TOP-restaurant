```html
  <main>
    <div id="main-container">
      <img src="../img/my-landing-page.jpg" id="landing-img" alt="landing-page">
    </div>
  </main>
```

```css
main {
  border: 1px solid yellow;

  flex: 8.5 0 0;
  min-height: 500px;
}

#landing-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

This above, image will exceed the size of main tag.

However, giving `#main-container` specific width and height, it fits to the `main` tag perfectly. Is it have to do something with containing block?


```css
main {
  border: 1px solid yellow;

  flex: 8.5 0 0;
  min-height: 500px;
}

#main-container {
  width: 100%;
  height: 100%;
}

#landing-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```
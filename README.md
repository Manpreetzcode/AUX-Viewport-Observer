
# **AUX-Viewport-Observer**

`auxObserver` is a lightweight JavaScript utility designed to detect when sections of a webpage enter or exit the viewport. It works similarly to the IntersectionObserver API but gives you **more manual control**, allowing custom scroll offsets and optional visual debugging markers.

This utility is ideal for scroll-based animations, triggers, lazy loading, sticky effects, and any DOM logic based on scroll position.

---

## **✨ Features**

* Detects when elements enter or exit the viewport
* Customizable offsets for fine-tuned control
* Supports multiple elements
* Optional visual debugging markers
* Pure JavaScript — no dependencies
* Simple API with `onEnter` and `onExit` callbacks

---

## **📦 Installation**

No installation required — just include the script in your project.

```html
<script src="auxObserver.js"></script>
```

Or if you're using ES modules, import it directly.

---

## **🚀 Usage Example**

```js
var element = new auxObserver({
    secId: ".viewport",
    offset: {
        scrollOffset: 100,
        xOffset: 50,
        yOffset: 50,
    },
    viewport: {
        onEnter: () => console.log("Entered!"),
        onExit: () => console.log("Exited!"),
    },
    graphs: true,
});
```

---

## **🧩 Options**

### **secId**

CSS selector for the target section(s).

Example:
`".viewport"`

---

### **offset (Object)**

Controls when a section is considered "in view."

| Property       | Description                                 |
| -------------- | ------------------------------------------- |
| `scrollOffset` | Adjusts the right scroll point  |
| `xOffset`      | Shifts the start point of targeted section |
| `yOffset`      | Shifts the End point of targeted section |

---

### **viewport (Object)**
| Option              | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `onEnter: () => {}` | Callback function that runs when the section **enters** the viewport |
| `onExit: () => {}`  | Callback function that runs when the section **exits** the viewport  |


---

## **📊 Debugging Mode (`graphs: true`)**

When enabled, the observer updates these elements (which must exist inside each section):

```html
<div class="scrollMark"></div>
<div class="secStart"></div>
<div class="secEnd"></div>
```

They visually display:

* Current scroll position
* Section start boundary
* Section end boundary

Useful for debugging scroll behaviors.

---

## **📄 HTML Structure Example**

```html
<div class="viewport">
    <div class="scrollMark"></div>
    <div class="secStart"></div>
    <div class="secEnd"></div>
</div>
```

---

## **⚠️ Notes**

* Uses scroll event listeners; consider throttling if necessary.
* Works best when the page layout is stable (avoid layout shifts).
* Debug markers require CSS styling to be visible.

---

## **👨‍💻 Author**

**Manpreet Singh**


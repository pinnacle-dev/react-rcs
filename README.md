# React Texts

React components for RCS Business Messaging.

Maintained by [Pinnacle RCS](https://docs.trypinnacle.app/api-reference/api-reference/send-a-message/rcs).

## Installation

```bash
npm install react-texts
```

Then import the css file:

```tsx
import "react-texts/dist/styles.css";
```

## Usage

![CardCarousel](https://i.ibb.co/1qSkVLH/Screenshot-2024-12-05-at-4-19-15-PM.png)

```tsx
import { CardCarousel } from "react-texts";

<CardCarousel
  showDevtools={true}
  cards={[
    {
      title: "Select Size",
      subtitle: "Choose your preferred size",
      quickReplies: [
        { reply: "Add to Cart", payload: "ADD_TO_CART" },
        { reply: "Share", payload: "SHARE" },
        { reply: "Favorite", payload: "FAVORITE" },
      ],
      options: [
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
      ],
    },
    {
      title: "Select Size",
      subtitle: "Choose your preferred size",
      options: [
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
      ],
    },
    {
      title: "Select Size",
      subtitle: "Choose your preferred size",
      mediaUrl:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
      options: [
        { value: "s", label: "Small" },
        { value: "m", label: "Medium" },
        { value: "l", label: "Large" },
      ],
    },
    {
      title: "Select Color",
      subtitle: "Choose your preferred color",
      options: [
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
        { value: "red", label: "Red" },
      ],
    },
  ]}
/>;
```

See the [Storybook](https://675109b53e691f6fe9ea860b-zbuszmmlmh.chromatic.com/?path=/docs/components-card--docs) for more usage examples.

## Actually sending RCS business messages

We may be a bit biased, but we think [Pinnacle RCS](https://docs.trypinnacle.app/api-reference/api-reference/send-a-message/rcs) is the easiest way to get started sending RCS business messages. If you have any questions, feel free to reach out to me on [X](https://x.com/seanroades) or email us at [founders@trypinnacle.com](mailto:founders@trypinnacle.com).

## Contributing

Feel free to open an issue or submit a PR--contributions are welcome!

import type { Meta, StoryObj } from "@storybook/react";
import { CardCarousel } from "../index";

const meta: Meta<typeof CardCarousel> = {
  title: "Components/CardCarousel",
  component: CardCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardCarousel>;

export const Default: Story = {
  args: {
    cards: [
      {
        title: "First Card",
        subtitle: "This is the first card",
      },
      {
        title: "Second Card",
        subtitle: "This is the second card",
      },
      {
        title: "Second Card",
        subtitle: "This is the second card",
      },
      {
        title: "Second Card",
        subtitle: "This is the second card",
      },
    ],
  },
};

export const WithMedia: Story = {
  args: {
    cards: [
      {
        title: "Skims Shirt Black",
        subtitle: "It's on sale for the first time ever!",
        mediaUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
      },
      {
        title: "New nike shoes are coming out to everyone very soon!",
        subtitle:
          "Perfect for the beach adsnfadsjfjaksdfjkasdk it really is gooo d dsfsdfkjsdfk",
        mediaUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
      },
      {
        title: "Summer Dress",
        subtitle: "Perfect for the beach",
        mediaUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
      },
      {
        title: "Summer Dress",
        subtitle: "Perfect for the beach",
        mediaUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
      },
    ],
  },
};

export const WithQuickReplies: Story = {
  args: {
    cards: [
      {
        title: "Product 1",
        subtitle: "Special offer!",
        quickReplies: ["Add to Cart", "Share", "Favorite"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
      {
        title: "Product 2",
        subtitle: "Limited time deal",
        quickReplies: ["Buy Now", "Save for Later"],
      },
    ],
  },
};

export const WithOptions: Story = {
  args: {
    cards: [
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
        title: "Select Color",
        subtitle: "Choose your preferred color",
        options: [
          { value: "black", label: "Black" },
          { value: "white", label: "White" },
          { value: "red", label: "Red" },
        ],
      },
    ],
  },
};

export const WithQuickRepliesAndOptions: Story = {
  args: {
    showDevtools: true,
    cards: [
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
    ],
  },
};

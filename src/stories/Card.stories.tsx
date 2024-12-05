import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../index";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};

export const WithTitle: Story = {
  args: {
    title: "Example Card",
  },
};

export const WithTitleAndSubtitle: Story = {
  args: {
    title: "Skims Shirt Black",
    subtitle: "It's on sale for the first time ever!",
  },
};

export const WithQuickReplies: Story = {
  args: {
    mediaUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
    title: "Skims Shirt Black",
    subtitle: "It's on sale for the first time ever!",
    quickReplies: ["Add to Cart", "Share", "Favorite"],
  },
};

export const WithOptions: Story = {
  args: {
    mediaUrl:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQf7lYCclFaQwj7IPE6Qg5tVeJYHIWb7YdHsiqAlj4N7nmb5teePbdXEbDSvKsaUhdmPU7oDfzRh0LDlrZEIeAVrVqvA-s2HjS4EWtvDzrNASv6qViSzdOd1g",
    title: "Skims Shirt Black",
    subtitle: "It's on sale for the first time ever!",
    quickReplies: ["Add to Cart", "Share", "Favorite"],
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ],
  },
};

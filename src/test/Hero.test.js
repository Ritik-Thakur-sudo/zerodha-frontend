import { render, screen } from "@testing-library/react";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders the heading text", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /invest in everything/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("renders the description paragraph", () => {
    render(<Hero />);
    const description = screen.getByText(
      /online platform to invest in stocks/i
    );
    expect(description).toBeInTheDocument();
  });

  test("renders the sign up button with correct text", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /sign up for free/i });
    expect(button).toBeInTheDocument();
  });

  test("button has correct styling class", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /sign up for free/i });
    expect(button).toHaveClass("signUp");
  });
});

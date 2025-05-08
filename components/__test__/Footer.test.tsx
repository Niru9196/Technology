import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
    __esModule: true,
    default: ({ src, alt }: { src: string; alt: string }) => (
        <img src={src} alt={alt} />
    ),
}));

describe("Footer", () => {
    it("renders company logo", () => {
        render(<Footer />);
        const logo = screen.getByAltText("Company Logo");
        expect(logo).toBeInTheDocument();
    });

    it("renders all section headings", () => {
        render(<Footer />);
        expect(screen.getByText("Applications")).toBeInTheDocument();
        expect(screen.getByText("Company")).toBeInTheDocument();
        expect(screen.getByText("More")).toBeInTheDocument();
        expect(screen.getByText("Follow Us")).toBeInTheDocument();
    });

    it("renders specific footer links", () => {
        render(<Footer />);
        expect(screen.getByText("Apparel")).toBeInTheDocument();
        expect(screen.getByText("Innovation")).toBeInTheDocument();
        expect(screen.getByText("Careers")).toBeInTheDocument();
        expect(screen.getByLabelText("Twitter")).toBeInTheDocument();
    });

    it("renders contact address and copyright", () => {
        render(<Footer />);
        expect(
            screen.getByText(/Supreme House: 110, 16th Road, Chembur, Mumbai/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/©2023. All Rights Reserved./i)
        ).toBeInTheDocument();
    });

    it("renders decorative image", () => {
        render(<Footer />);
        const decorImg = screen.getByAltText("Decorative element");
        expect(decorImg).toBeInTheDocument();
    });
});

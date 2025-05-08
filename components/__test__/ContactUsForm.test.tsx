import { render, screen, fireEvent } from "@testing-library/react";
import ContactUsForm from "../ContactForm";

beforeAll(() => {
    global.alert = jest.fn();
});

afterEach(() => {
    jest.clearAllMocks();
});

describe("ContactUsForm", () => {
    it("renders static texts and form elements correctly", () => {
        render(<ContactUsForm />);

        expect(
            screen.getByRole("heading", { name: /Get in Touch/i })
        ).toBeInTheDocument();
        expect(screen.getByText(/For general enquiries/i)).toBeInTheDocument();

        expect(
            screen.getByText(/110, 16th Road, Chembur, Mumbai - 400071/i)
        ).toBeInTheDocument();
        expect(screen.getByText("+91 22 25208822")).toBeInTheDocument();
        expect(screen.getByText("info@supremegroup.co.in")).toBeInTheDocument();

        expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();

        expect(
            screen.getByRole("button", { name: /Send/i })
        ).toBeInTheDocument();
    });

    it("submits form and triggers alert with valid data", () => {
        render(<ContactUsForm />);

        fireEvent.change(screen.getByPlaceholderText("Full Name"), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByPlaceholderText("Email"), {
            target: { value: "john@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Subject"), {
            target: { value: "Test Subject" },
        });
        fireEvent.change(screen.getByPlaceholderText("Message"), {
            target: { value: "Test message here." },
        });

        fireEvent.click(screen.getByRole("button", { name: /Send/i }));

        expect(global.alert).toHaveBeenCalledWith("Form submitted!");
    });
});

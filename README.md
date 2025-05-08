# Supreme Group Website – Frontend Implementation

This is a responsive, high-performance, pixel-perfect frontend implementation of the Supreme Group website. The project has been built with a strong focus on maintainability, accessibility, and performance, strictly adhering to the provided Figma design and technical specifications.

## 📍 Live Demo

[View Deployed Site on Vercel](https://technology-inky.vercel.app/)

## ⚙️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (selectively used)
- **Testing**: Jest
- **Build Tool**: Vite

---

## 📦 Project Setup

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/Niru9196/Technology.git

# Navigate into the project directory
cd Technology

# Install dependencies
npm install

# Start the development server
npm run dev



## Component Architecture

The architecture follows a modular approach, separating concerns by feature and promoting reusability.

src/
└── app/
    ├── components/
    │   ├── features/                 # Reusable components
    │   │   ├── FeatureCard.tsx
    │   │   └── SectionHeading.tsx
    │   ├── __test__/                 # Test files
    │   │   ├── ContactUsForm.test.tsx
    │   │   ├── Footer.test.tsx
    │   ├── ContactForm.tsx
    │   ├── Feature.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   └── Navbar.tsx
└── public/
    ├── Car.png
    ├── Logo.png
    └── Group.png


## 📱 Responsive Design Strategy

Responsiveness is handled using:

1) Tailwind's built-in responsive utility classes.
2) Custom breakpoints aligned with the Figma design
3) Manual testing across Chrome DevTools (mobile, tablet, desktop).


## Accessibility Considerations

1) Use of semantic HTML tags for better screen reader support.
2) ARIA attributes where applicable.
3) Keyboard navigation tested and supported.


##  Animation Usage

Framer Motion was used in one key section to enhance user experience with smooth transitions. While CSS could replicate the effect, Framer Motion provided faster implementation and better performance out of the box.


## Testing

Jest and its dependencies are configured. While detailed component-level tests were not written due to time constraints and the static nature of the site, the setup enables easy test scalability moving forward.



## Assumptions & Decisions

1) Assumed this is a static website; hence, no state management was needed.
2) Used Tailwind CSS for a utility-first approach to styling and faster UI development.
3) Chose Next.js for its server-side rendering, built-in routing, image optimization, and scalability.
4) Used Vite to speed up local development and build times.



##  Challenges & Solutions

1) Pixel-perfect implementation: Took time and required precise spacing; solved with Tailwind utilities and positioning.
2) Animation vs performance: Used minimal animation to keep the site performant.
3) Performance optimization: Relying on Next.js optimizations like image optimization, font optimization, metadata handling, and automatic code splitting due to the static nature of the site.



## 🚀 Suggested Improvements

1) Add end-to-end tests using Cypress or Playwright.
2) Set up a CI/CD pipeline for automated deployment.
3) Implement dark mode toggle for enhanced UX.
4) Improve and extend animations where applicable.


## 🤝 Contributing

Pull requests and suggestions are welcome. Please open an issue first to discuss what you would like to change.
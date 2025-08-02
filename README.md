# Syed Awais Hussain - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my experience as a Full-Stack Developer specializing in MEAN stack, MERN Stack, Shopify development, and cloud solutions.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance**: Built with Next.js 14 for optimal performance
- **SEO Optimized**: Meta tags, structured data, and sitemap
- **Interactive**: Smooth animations with Framer Motion
- **Contact Form**: Functional contact form with validation
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── projects/       # Projects page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components
│   │   ├── sections/       # Page sections
│   │   └── ui/             # UI components
│   ├── data/              # Static data and types
│   └── lib/               # Utility functions
├── public/                # Static assets
└── README.md
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Syedawais987/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/data/projects.ts` - Projects, skills, and experience data
- `src/app/layout.tsx` - SEO metadata
- `public/` - Add your images and resume

### Styling
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

### Contact Form
The contact form is currently set up for demo purposes. To make it functional:
1. Set up an email service (Resend, EmailJS, etc.)
2. Create an API route in `src/app/api/contact/route.ts`
3. Update the form submission logic in `ContactForm.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Add `netlify.toml` configuration
- **GitHub Pages**: Enable static export in `next.config.ts`

## 📊 Performance

This portfolio is optimized for performance:
- Server-side rendering with Next.js
- Image optimization
- Code splitting
- Efficient animations
- Minimal bundle size

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

I'm Awais Hussain, a Full-Stack Developer with 3+ years of experience specializing in:
- MEAN Stack Development
- Shopify App Development  
- Cloud Solutions (AWS, Google Cloud)
- E-commerce Applications

**Contact:**
- Email: syedawaishussain987@gmail.com
- LinkedIn: [Syed Awais Hussain](https://www.linkedin.com/in/syed-awais-hussain-7a957b250/)
- GitHub: [Syedawais987](https://github.com/Syedawais987)
- WhatsApp: +92 310 6723901
- Discord: syedawais0337
- Microsoft Teams: syedawaishussain987@gmail.com

---

⭐ Star this repo if you found it helpful!
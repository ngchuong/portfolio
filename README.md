# Personal Portfolio Website

A modern, professional personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimalistic design with professional aesthetics
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Beautiful animations powered by Framer Motion
- 🔍 **SEO Optimized**: Complete SEO setup with meta tags and Open Graph
- 📧 **Contact Form**: Functional contact form with validation
- 🎯 **Accessibility**: Semantic HTML and keyboard navigation support

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal bio, skills, and professional background
- **Portfolio**: Showcase of projects with live demos and source code links
- **Contact**: Contact form and social media links
- **Footer**: Additional links and social media integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd owner
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

1. **`src/app/layout.tsx`** - Update metadata, title, and description
2. **`src/components/layout/Navbar.tsx`** - Change the logo/name
3. **`src/components/sections/Hero.tsx`** - Update name, tagline, and description
4. **`src/components/sections/About.tsx`** - Update bio, skills, and profile image
5. **`src/components/sections/Portfolio.tsx`** - Replace with your projects
6. **`src/components/sections/Contact.tsx`** - Update contact information
7. **`src/components/layout/Footer.tsx`** - Update social links and contact info

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.ts`
- **Fonts**: Change fonts in `src/app/layout.tsx` and `tailwind.config.ts`
- **Animations**: Customize animations in individual components

### Content

#### Hero Section

- Update your name, tagline, and description
- Modify call-to-action button text and links

#### About Section

- Replace the placeholder profile image
- Update your bio and professional background
- Modify the skills array with your technologies

#### Portfolio Section

- Replace project data with your actual projects
- Update project images, descriptions, and links
- Modify technology tags

#### Contact Section

- Update contact information (email, phone, location)
- Configure the contact form to send emails (requires backend setup)
- Update social media links

### Images

Replace placeholder images in the `public` folder:

- Add your profile photo
- Add project screenshots
- Update favicon and social media images

### SEO

Update SEO information in `src/app/layout.tsx`:

- Website URL
- Social media handles
- Keywords
- Open Graph images

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   └── Portfolio.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, please open an issue or contact me directly.

---

**Happy coding! 🚀**

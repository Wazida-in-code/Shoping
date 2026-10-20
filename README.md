# Shoping

A simple shopping demo built with [Next.js](https://nextjs.org) (App Router), Tailwind CSS v4, daisyUI + HeroUI, and [better-auth](https://www.better-auth.com/) with MongoDB. Product data comes from the [Fake Store API](https://fakestoreapi.com/).

## Features

- Home page with hero and featured products
- Product list with search and sort by rating
- Product details page
- Sign up / sign in (email + password, backed by MongoDB)
- Route protection: `/products` requires login
- Responsive layout for mobile, tablet, and desktop

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root:

   ```env
   BETTER_AUTH_SECRET=your-secret
   BETTER_AUTH_URL=http://localhost:3000
   BETTER_AUTH_MONGODB_URI=mongodb://localhost:27017/shoping
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description         |
| ----------------- | ------------------- |
| `npm run dev`     | Development server  |
| `npm run build`   | Production build    |
| `npm start`       | Serve the build     |

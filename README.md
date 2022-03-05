# Kulu: cloning hulu for study

- Request with query to [TMDB](https://www.themoviedb.org/) for getting movies & tv shows.

### Create next.js app
```bash
npx create-next-app kulu
```

### Install tailwindcss
- [A guide for next.js](https://tailwindcss.com/docs/guides/nextjs)
```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Configure your template paths (follow the link above)
- Add the Tailwind directives to your CSS (follow the link above)

### Install [heroicons](https://github.com/tailwindlabs/heroicons) for Icon resource
```bash
yarn add @heroicons/react
```

### Install [tailwind-scrollbar-hide](https://www.npmjs.com/package/tailwind-scrollbar-hide)
```bash
yarn add tailwind-scrollbar-hide
```
- add plugin to tailwind.config.js
```
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
```

### incstall [react-flip-move](https://www.npmjs.com/package/react-flip-move?activeTab=readme)
```bash
yarn add react-flip-move
```


---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

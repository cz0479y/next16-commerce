# DEMO STEPS

## Setup and starting point

- This is a e commerce demo app. Last year when I was here, I focused on dynamic data and how to handle that. This time, I took inspiration from Elkjøp which is the biggest ecommerce platform in the nordics. Thanks to the Prinicipal Software Engineer Tomas Jansson for sparring with me through this demo app.
- The setup is the Next.js App Router, Prisma ORM and an Prisma Postgres DB, Tailwind CSS.
- Demo app. Ecommerce mimic. Everything here looks pretty decent. Home page, browse page, login page, about page, profile page. Performance is pretty good in the CWV plugin.

## Go through the app structure

- I have all my pages here. I'm using feature slicing to keep the app router folder clean and easy to read. Could also use the underscore components. Services and queries talking to my db.
- I'm mostly following React Server Component best practises, like doing data fetching inside components, suspending with fallbacks, extracting client logic to smaller client components.
- Utilizing the route structure to easily suspend the content without duplicating code.
- Composable components like this product and product details that handle their own data fetching, that can be used all over the app.

## Showcase problems

- Improvements based on my exp building with server comp also and other codebases I have seen, and what devs commonly do wrong or struggle to find solutions for.
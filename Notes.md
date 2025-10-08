## React
<li>It's not feasible to create a fully-featured application ready for production</li>
<li>React is a library for building user interfaces</li>
<li>You need to make decisions about other features such as routing, data fetching and more</li>

## Next.js
<li>It uses React for <strong>building user interfaces</strong>.</li>
<li>Provides additional features that enables you to build production-ready applications.</li>
<li>These features include <strong>routing, optimized rendering, data fetching, bundling, compiling, and more.</strong></li>
<li>You don't have to install additional packages as Next.js provides everything you need</li>
<li>Opinions and conventions should be followed to implement these features</li>
<li>The conventions have emerged from a team with years of experience in writing React apps for production</li>
<li><strong>Next.js is a React framework for building full-stack web applications</strong>.</li>

## Installation:

- Node.js
- Editor: VS Code 

## People who can learn

- A React developer looking to level up yur skills
- A beginner curious about Next.js
- An experienced dev wanting to catch up with the latest in Next.js 15

## What you'll Learn

- How to set up a Next.js 15 project from scratch
- The ins and outs of <strong>Server and Client Components</strong>
- Hpw to use new App Router for defining pages and layouts
- How Next.js handles navigation
- Creating API routes 
- Data Fetching strategies
- Data mutation with Server Actions
- Handling Authentication

## Prerequisites

- HTML
- CSS
- Modern JavaScript
- React fundamentals (components, props, state, hooks)


## React Server Components

<li>React Server Components is a new architecture introduced by the React team which was quickly embraced by Next.js</li>
<li>The architecture introduces a new way of creating React components, splitting them into two types:</li>
- Server components <br>
- Client components <br>
(This distinction is not based on the functionality of the components but rather on the specific environments they're designed to interact with.)<br>

| Server Components | Client Components |
|---------|--------| 
| rendered exclusively on the server | rendered in the browser | 
| never sent to the client | rendered to HTML once on the server | 
| faster page loads | immediately see the page's HTML content rather than a blank screen |
| can't use inactivity features like <code>useState</code> or <code>useEffect</code> | can use <code>state</code>, <code>effects</code>, and <code>browser-only APIs</code> |
| server components are default | add 'use client' directive at the top of your file |

- In Next.js 15, react components are server components by default and can't handle state or interactivity to convert this counter server component to a counter client component,capable of  interactivity and the "use client" directive at the very top.

| Server Components | Client Components |
|--------------|--------------|
| fetching data | interactivity and event listeners |
| accessing backend resources | using hooks like <strong>useState</strong> or <strong>useEffect</strong> |
| keeping sensitive information on the server| using browser-only APIs |

## Routing 

- Next.js has a file-system based routing mechanism.
- The way you orgainze your files and folders determines the routes of your application.

### Key Routing Conventions:
- all routes must be placed inside the <strong>app</strong> folder
- every file that represents a route should be named <strong>page.js</strong> or <strong>page.tsx</strong> depending upon whether you're using Javascript or Typescript.
- every folder corresponds to a path segment in the browser URL.
- When these conventions are followed the <strong>page.tsx</strong> file automatically becomes available as a route.

- App Router also introduces a new concept called <strong>route groups</strong>, which lets you logically group routes without affecting the URL structure.
<!-- - Structure to create a route group in the app folder -->
### Layouts
- Layouts allow you to define UI that is shared between multiple pages
- Useful for elements like <strong>headers</strong>, <strong>footers</strong>, or <strong>navigation menus</strong> that you want to appear consistently across different routes
- When navigating between pages that share a layout, only the page components update - the layout doesn't re-render 
- This leads to improved performnce and a smoother user experience
- They also help reduce code duplication and improve the overall structure of your project.

## Route Handlers
- Route handlers allow you to create custom request handlers for your application.
- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints 
- Gives you full control over the response without the need for a separate backend setup
- Perfect for handling everything from form submissions and database queries to secure interactions with third-party APIs
- By running server-side, they ensure sensitive information like API keys remain protected

## Data Fetching
How effortlessly fetch data 
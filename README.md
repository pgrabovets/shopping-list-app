# Shopping List App

It is a small React application for managing a shopping list.

[link](https://shopping-list-app-phi.vercel.app/)

![screenshot](https://shopping-list-app-phi.vercel.app/Screenshot%202025-03-31%20021651.png)

## Setup

```bash
npm install
npm run dev
```

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind css
- Zustand

## Project Structure

- components - directory for aplication compoents such as AppHeader, CategoryList and others.
- shared - component that is used in another component
- ui - for simple user interface component without application state and bissines logic
- lib - directory for libraries
- store - contains application store files

## Features

- Add an item to the shopping list with a name, quantity, and category
- Edit an item in the list
- Remove an item from the list
- Mark an item as "purchased"
- User can filter the list by category

Application use Zustand for global state management. Zustand is a small, fast, and scalable state management solution for React applications. Zustand offers a simple and intuitive API with hooks and middleware support.
For styling is beeing used tailwind and shadch components.
Shopping list is saved in localStorage

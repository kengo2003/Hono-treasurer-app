/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ExpensesImport } from './routes/expenses'
import { Route as CreateExpenseImport } from './routes/create-expense'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ExpensesRoute = ExpensesImport.update({
  id: '/expenses',
  path: '/expenses',
  getParentRoute: () => rootRoute,
} as any)

const CreateExpenseRoute = CreateExpenseImport.update({
  id: '/create-expense',
  path: '/create-expense',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/create-expense': {
      id: '/create-expense'
      path: '/create-expense'
      fullPath: '/create-expense'
      preLoaderRoute: typeof CreateExpenseImport
      parentRoute: typeof rootRoute
    }
    '/expenses': {
      id: '/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-expense': typeof CreateExpenseRoute
  '/expenses': typeof ExpensesRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-expense': typeof CreateExpenseRoute
  '/expenses': typeof ExpensesRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-expense': typeof CreateExpenseRoute
  '/expenses': typeof ExpensesRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/create-expense' | '/expenses'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/create-expense' | '/expenses'
  id: '__root__' | '/' | '/about' | '/create-expense' | '/expenses'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CreateExpenseRoute: typeof CreateExpenseRoute
  ExpensesRoute: typeof ExpensesRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CreateExpenseRoute: CreateExpenseRoute,
  ExpensesRoute: ExpensesRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/create-expense",
        "/expenses"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/create-expense": {
      "filePath": "create-expense.tsx"
    },
    "/expenses": {
      "filePath": "expenses.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
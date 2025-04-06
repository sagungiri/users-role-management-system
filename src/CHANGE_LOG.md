# Changelog

## Added

- Project initialized and styles files added with ITCSS architecture.

### march 13, 2025

- recent enhancements and new functionality implemented
  - **Api config setup**: Added api path configs, added generic service for api calls
  - **Environment**: Added env file for development
  - **Storage service setup**: Implemented session storage management service, Added methods for setting, getting, and removing data from storage
  - **Code formatting**: Installed Prettier and set up formatting rules for uniform code structure
  - **Updated TypeScript Configuration**: Added path variables to `tsconfig.json` for easier imports, Configured alias paths (`@core`, `@shared`, `@features`) to simplify module

### march 15, 2025

- Set up Login component, UI and form fields
- Implemented Auth facade, added auth guard, interceptor
- Added dynamic shared component for button, input text, and error message handler

### march 16, 2025

- Made validation error handler more generic
- Added account activate page
- regex validation added in password with proper validation message

- new implemented functionality

  - forbidden page added
  - basic dashboard layout with sidemenu and header added
  - manage user basic page setup

- generic components added and updated their implementation

  - added generic table component
  - status badge component added
  - pagination component added

- Roles UI added, generic checkbox formcontrol added, added roles in menu

- input type select generic component added, api integration for roles list

### april 6, 2025

- services moved from component to open service folder
- auth guard implemented

- permissions added for role according to admin type
- permission guard added
- button visibility handled according to permssion set up

## Changed

- readme file updated

## Fixed

## Removed

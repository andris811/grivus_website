# Agent Guidelines for Grivus

## Commands
- **Build**: `npm run build`
- **Dev**: `npm run dev`
- **Lint**: `npm run lint`
- **Start**: `npm run start`
- **Test**: No test script configured

## Code Style
- **Language**: TypeScript with strict mode enabled
- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl with locales ['en', 'zh']

### Naming Conventions
- **Components**: PascalCase (e.g., `LanguageSelector.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables/Functions**: camelCase
- **Types/Interfaces**: PascalCase

### Imports
- Group: React imports first, then Next.js, then other libraries
- Use single quotes
- No semicolons

### Components
- Use `'use client'` directive for client components
- Define interfaces for props with PascalCase names
- Use React hooks with proper TypeScript typing
- Export default function components

### Error Handling
- Use TypeScript strict mode for type safety
- Validate locale parameters in i18n config
- Handle click outside events for dropdowns

### Styling
- Use Tailwind utility classes
- Custom color: `#4CD3B7` for accent
- Responsive design with `sm:` breakpoints
- Dark theme with gray color palette
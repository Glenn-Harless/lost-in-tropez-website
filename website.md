# Table of Contents
- Dockerfile.prod
- tsconfig.node.json
- index.html
- tailwind.config.js
- netlify.toml
- Dockerfile
- website.md
- .dockerignore
- .gitignore
- package.json
- tsconfig.json
- docker-compose.yml
- vite.config.ts
- postcss.config.js
- designs/test.html
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/styles/globals.css
- src/components/ContactSection/ContactSection.tsx
- src/components/landing/RetroWaveLanding.tsx
- src/components/layout/Layout.tsx
- src/components/LatestRelease/LatestRelease.tsx
- src/components/StreamingLinks/StreamingLinks.tsx
- src/components/MusicPlayer/MusicPlayer.tsx
- src/components/ArtistSection/ArtistSection.tsx

## File: Dockerfile.prod

- Extension: .prod
- Language: unknown
- Size: 350 bytes
- Created: 2025-01-20 19:45:26
- Modified: 2025-01-20 19:45:26

### Code

```unknown
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## File: tsconfig.node.json

- Extension: .json
- Language: json
- Size: 252 bytes
- Created: 2024-10-24 22:04:52
- Modified: 2024-10-24 22:04:52

### Code

```json
// tsconfig.node.json
{
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
```

## File: index.html

- Extension: .html
- Language: html
- Size: 382 bytes
- Created: 2025-01-18 17:06:38
- Modified: 2024-10-24 22:29:35

### Code

```html
<!DOCTYPE html>
<html lang="en" class="h-full w-full m-0 p-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lost in Tropez</title>
  </head>
  <body class="h-full w-full m-0 p-0">
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: tailwind.config.js

- Extension: .js
- Language: javascript
- Size: 848 bytes
- Created: 2024-10-25 11:19:46
- Modified: 2024-10-25 11:19:46

### Code

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}

```

## File: netlify.toml

- Extension: .toml
- Language: toml
- Size: 110 bytes
- Created: 2025-01-20 19:54:31
- Modified: 2025-01-20 19:54:31

### Code

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  NODE_VERSION = "20"
```

## File: Dockerfile

- Extension: 
- Language: unknown
- Size: 321 bytes
- Created: 2024-10-25 09:34:12
- Modified: 2024-10-25 09:34:12

### Code

```unknown
FROM node:20-alpine

WORKDIR /app

ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NODE_ENV=development

# Copy package files first
COPY package*.json ./

# Regular npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Add these flags to the start command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## File: website.md

- Extension: .md
- Language: markdown
- Size: 260160 bytes
- Created: 2025-03-18 20:35:40
- Modified: 2025-03-18 20:35:40

### Code

```markdown
# Table of Contents
- Dockerfile.prod
- tsconfig.node.json
- index.html
- tailwind.config.js
- netlify.toml
- Dockerfile
- website.md
- .dockerignore
- .gitignore
- package.json
- tsconfig.json
- docker-compose.yml
- vite.config.ts
- postcss.config.js
- designs/test.html
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/styles/globals.css
- src/components/ContactSection/ContactSection.tsx
- src/components/landing/RetroWaveLanding.tsx
- src/components/layout/Layout.tsx
- src/components/LatestRelease/LatestRelease.tsx
- src/components/StreamingLinks/StreamingLinks.tsx
- src/components/MusicPlayer/MusicPlayer.tsx
- src/components/ArtistSection/ArtistSection.tsx

## File: Dockerfile.prod

- Extension: .prod
- Language: unknown
- Size: 350 bytes
- Created: 2025-01-20 19:45:26
- Modified: 2025-01-20 19:45:26

### Code

```unknown
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## File: tsconfig.node.json

- Extension: .json
- Language: json
- Size: 252 bytes
- Created: 2024-10-24 22:04:52
- Modified: 2024-10-24 22:04:52

### Code

```json
// tsconfig.node.json
{
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
```

## File: index.html

- Extension: .html
- Language: html
- Size: 382 bytes
- Created: 2025-01-18 17:06:38
- Modified: 2024-10-24 22:29:35

### Code

```html
<!DOCTYPE html>
<html lang="en" class="h-full w-full m-0 p-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lost in Tropez</title>
  </head>
  <body class="h-full w-full m-0 p-0">
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: tailwind.config.js

- Extension: .js
- Language: javascript
- Size: 848 bytes
- Created: 2024-10-25 11:19:46
- Modified: 2024-10-25 11:19:46

### Code

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}

```

## File: netlify.toml

- Extension: .toml
- Language: toml
- Size: 110 bytes
- Created: 2025-01-20 19:54:31
- Modified: 2025-01-20 19:54:31

### Code

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  NODE_VERSION = "20"
```

## File: Dockerfile

- Extension: 
- Language: unknown
- Size: 321 bytes
- Created: 2024-10-25 09:34:12
- Modified: 2024-10-25 09:34:12

### Code

```unknown
FROM node:20-alpine

WORKDIR /app

ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NODE_ENV=development

# Copy package files first
COPY package*.json ./

# Regular npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Add these flags to the start command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## File: website.md

- Extension: .md
- Language: markdown
- Size: 152428 bytes
- Created: 2025-03-18 20:10:26
- Modified: 2025-03-18 20:10:26

### Code

```markdown
# Table of Contents
- Dockerfile.prod
- tsconfig.node.json
- index.html
- tailwind.config.js
- netlify.toml
- Dockerfile
- website.md
- .dockerignore
- .gitignore
- package.json
- tsconfig.json
- docker-compose.yml
- vite.config.ts
- postcss.config.js
- designs/test.html
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/styles/globals.css
- src/components/ContactSection/ContactSection.tsx
- src/components/landing/RetroWaveLanding.tsx
- src/components/layout/Layout.tsx
- src/components/LatestRelease/LatestRelease.tsx
- src/components/StreamingLinks/StreamingLinks.tsx
- src/components/MusicPlayer/MusicPlayer.tsx
- src/components/ArtistSection/ArtistSection.tsx

## File: Dockerfile.prod

- Extension: .prod
- Language: unknown
- Size: 350 bytes
- Created: 2025-01-20 19:45:26
- Modified: 2025-01-20 19:45:26

### Code

```unknown
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## File: tsconfig.node.json

- Extension: .json
- Language: json
- Size: 252 bytes
- Created: 2024-10-24 22:04:52
- Modified: 2024-10-24 22:04:52

### Code

```json
// tsconfig.node.json
{
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
```

## File: index.html

- Extension: .html
- Language: html
- Size: 382 bytes
- Created: 2025-01-18 17:06:38
- Modified: 2024-10-24 22:29:35

### Code

```html
<!DOCTYPE html>
<html lang="en" class="h-full w-full m-0 p-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lost in Tropez</title>
  </head>
  <body class="h-full w-full m-0 p-0">
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: tailwind.config.js

- Extension: .js
- Language: javascript
- Size: 848 bytes
- Created: 2024-10-25 11:19:46
- Modified: 2024-10-25 11:19:46

### Code

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}

```

## File: netlify.toml

- Extension: .toml
- Language: toml
- Size: 110 bytes
- Created: 2025-01-20 19:54:31
- Modified: 2025-01-20 19:54:31

### Code

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  NODE_VERSION = "20"
```

## File: Dockerfile

- Extension: 
- Language: unknown
- Size: 321 bytes
- Created: 2024-10-25 09:34:12
- Modified: 2024-10-25 09:34:12

### Code

```unknown
FROM node:20-alpine

WORKDIR /app

ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NODE_ENV=development

# Copy package files first
COPY package*.json ./

# Regular npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Add these flags to the start command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## File: website.md

- Extension: .md
- Language: markdown
- Size: 79241 bytes
- Created: 2025-03-18 19:04:23
- Modified: 2025-03-18 19:04:23

### Code

```markdown
# Table of Contents
- Dockerfile.prod
- tsconfig.node.json
- index.html
- tailwind.config.js
- netlify.toml
- Dockerfile
- website.md
- .dockerignore
- .gitignore
- package.json
- tsconfig.json
- docker-compose.yml
- vite.config.ts
- postcss.config.js
- designs/test.html
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/styles/globals.css
- src/components/ContactSection/ContactSection.tsx
- src/components/landing/RetroWaveLanding.tsx
- src/components/layout/Layout.tsx
- src/components/LatestRelease/LatestRelease.tsx
- src/components/StreamingLinks/StreamingLinks.tsx
- src/components/MusicPlayer/MusicPlayer.tsx
- src/components/ArtistSection/ArtistSection.tsx

## File: Dockerfile.prod

- Extension: .prod
- Language: unknown
- Size: 350 bytes
- Created: 2025-01-20 19:45:26
- Modified: 2025-01-20 19:45:26

### Code

```unknown
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## File: tsconfig.node.json

- Extension: .json
- Language: json
- Size: 252 bytes
- Created: 2024-10-24 22:04:52
- Modified: 2024-10-24 22:04:52

### Code

```json
// tsconfig.node.json
{
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
```

## File: index.html

- Extension: .html
- Language: html
- Size: 382 bytes
- Created: 2025-01-18 17:06:38
- Modified: 2024-10-24 22:29:35

### Code

```html
<!DOCTYPE html>
<html lang="en" class="h-full w-full m-0 p-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lost in Tropez</title>
  </head>
  <body class="h-full w-full m-0 p-0">
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: tailwind.config.js

- Extension: .js
- Language: javascript
- Size: 848 bytes
- Created: 2024-10-25 11:19:46
- Modified: 2024-10-25 11:19:46

### Code

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}

```

## File: netlify.toml

- Extension: .toml
- Language: toml
- Size: 110 bytes
- Created: 2025-01-20 19:54:31
- Modified: 2025-01-20 19:54:31

### Code

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  NODE_VERSION = "20"
```

## File: Dockerfile

- Extension: 
- Language: unknown
- Size: 321 bytes
- Created: 2024-10-25 09:34:12
- Modified: 2024-10-25 09:34:12

### Code

```unknown
FROM node:20-alpine

WORKDIR /app

ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NODE_ENV=development

# Copy package files first
COPY package*.json ./

# Regular npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Add these flags to the start command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## File: website.md

- Extension: .md
- Language: markdown
- Size: 27012 bytes
- Created: 2025-03-18 18:49:12
- Modified: 2025-03-18 18:49:12

### Code

```markdown
# Table of Contents
- Dockerfile.prod
- tsconfig.node.json
- index.html
- tailwind.config.js
- netlify.toml
- Dockerfile
- .dockerignore
- .gitignore
- package.json
- tsconfig.json
- docker-compose.yml
- vite.config.ts
- postcss.config.js
- designs/test.html
- src/App.tsx
- src/main.tsx
- src/vite-env.d.ts
- src/styles/globals.css
- src/components/landing/RetroWaveLanding.tsx
- src/components/layout/Layout.tsx

## File: Dockerfile.prod

- Extension: .prod
- Language: unknown
- Size: 350 bytes
- Created: 2025-01-20 19:45:26
- Modified: 2025-01-20 19:45:26

### Code

```unknown
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build for production
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## File: tsconfig.node.json

- Extension: .json
- Language: json
- Size: 252 bytes
- Created: 2024-10-24 22:04:52
- Modified: 2024-10-24 22:04:52

### Code

```json
// tsconfig.node.json
{
    "compilerOptions": {
      "composite": true,
      "skipLibCheck": true,
      "module": "ESNext",
      "moduleResolution": "bundler",
      "allowSyntheticDefaultImports": true
    },
    "include": ["vite.config.ts"]
  }
```

## File: index.html

- Extension: .html
- Language: html
- Size: 382 bytes
- Created: 2025-01-18 17:06:38
- Modified: 2024-10-24 22:29:35

### Code

```html
<!DOCTYPE html>
<html lang="en" class="h-full w-full m-0 p-0">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lost in Tropez</title>
  </head>
  <body class="h-full w-full m-0 p-0">
    <div id="root" class="h-full w-full"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## File: tailwind.config.js

- Extension: .js
- Language: javascript
- Size: 848 bytes
- Created: 2024-10-25 11:19:46
- Modified: 2024-10-25 11:19:46

### Code

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}

```

## File: netlify.toml

- Extension: .toml
- Language: toml
- Size: 110 bytes
- Created: 2025-01-20 19:54:31
- Modified: 2025-01-20 19:54:31

### Code

```toml
[build]
  command = "npm run build"
  publish = "dist"

[context.production.environment]
  NODE_VERSION = "20"
```

## File: Dockerfile

- Extension: 
- Language: unknown
- Size: 321 bytes
- Created: 2024-10-25 09:34:12
- Modified: 2024-10-25 09:34:12

### Code

```unknown
FROM node:20-alpine

WORKDIR /app

ENV NVIDIA_DRIVER_CAPABILITIES=all
ENV NODE_ENV=development

# Copy package files first
COPY package*.json ./

# Regular npm install
RUN npm install

# Copy the rest of the application
COPY . .

# Add these flags to the start command
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

## File: .dockerignore

- Extension: 
- Language: unknown
- Size: 54 bytes
- Created: 2024-10-24 21:57:01
- Modified: 2024-10-24 21:57:01

### Code

```unknown
node_modules
dist
.git
.gitignore
README.md
.env
*.log
```

## File: .gitignore

- Extension: 
- Language: unknown
- Size: 0 bytes
- Created: 2024-10-24 21:56:46
- Modified: 2024-10-24 21:56:46

### Code

```unknown

```

## File: package.json

- Extension: .json
- Language: json
- Size: 800 bytes
- Created: 2024-10-24 21:57:47
- Modified: 2024-10-24 21:57:47

### Code

```json
{
    "name": "lost-in-tropez-website",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "framer-motion": "^10.16.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.15",
      "@types/react-dom": "^18.2.7",
      "@typescript-eslint/eslint-plugin": "^6.0.0",
      "@typescript-eslint/parser": "^6.0.0",
      "@vitejs/plugin-react": "^4.0.3",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.0.2",
      "vite": "^4.4.5"
    }
  }
```

## File: tsconfig.json

- Extension: .json
- Language: json
- Size: 674 bytes
- Created: 2024-10-24 21:58:14
- Modified: 2024-10-24 21:58:14

### Code

```json
{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
```

## File: docker-compose.yml

- Extension: .yml
- Language: yaml
- Size: 177 bytes
- Created: 2024-10-24 22:25:27
- Modified: 2024-10-24 22:25:27

### Code

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

## File: vite.config.ts

- Extension: .ts
- Language: typescript
- Size: 352 bytes
- Created: 2024-10-24 22:03:30
- Modified: 2024-10-24 22:03:30

### Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## File: postcss.config.js

- Extension: .js
- Language: javascript
- Size: 110 bytes
- Created: 2024-10-24 22:09:13
- Modified: 2024-10-24 22:09:13

### Code

```javascript
// postcss.config.js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

## File: designs/test.html

- Extension: .html
- Language: html
- Size: 6905 bytes
- Created: 2024-11-03 21:45:38
- Modified: 2024-11-03 21:45:27

### Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0;
            overflow: hidden;
            background: #000;
            font-family: Arial, sans-serif;
            color: white;
        }
        canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .section-indicator {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 2em;
            opacity: 0.7;
            transition: opacity 0.5s;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 30px;
            z-index: 100;
        }
        .menu a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        .menu a:hover {
            opacity: 1;
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            cursor: pointer;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#section1">SECTION 1</a>
        <a href="#section2">SECTION 2</a>
        <a href="#section3">SECTION 3</a>
        <a href="#section4">SECTION 4</a>
    </div>
    <div class="sound-toggle">🔊</div>
    <div class="section-indicator">PORTAL 1</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let camera, scene, renderer;
        let tunnel, currentSection = 0;
        let scrollPercent = 0;
        const tunnelSegments = [];
        const SECTIONS = ['PORTAL 1', 'DREAM SPACE', 'VOID REALM', 'FINAL DIMENSION'];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create tunnel segments
            for(let i = 0; i < 4; i++) {
                createTunnelSegment(i * 20);
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Event listeners
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onScroll);
            
            // Initialize scroll height
            document.body.style.height = '400vh';
        }

        function createTunnelSegment(zPosition) {
            const geometry = new THREE.CylinderGeometry(3, 3, 20, 16, 20, true);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1.0 },
                    sectionColor: { value: new THREE.Color(Math.random(), Math.random(), Math.random()) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 sectionColor;
                    varying vec2 vUv;
                    void main() {
                        vec2 position = vUv * 2.0 - 1.0;
                        float angle = atan(position.y, position.x);
                        float radius = length(position);
                        
                        float pattern = sin(angle * 8.0 + time) * 0.5 + 0.5;
                        pattern *= sin(radius * 5.0 - time) * 0.5 + 0.5;
                        
                        vec3 color = sectionColor * pattern;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                side: THREE.BackSide
            });

            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = Math.PI / 2;
            segment.position.z = zPosition;
            
            tunnelSegments.push(segment);
            scene.add(segment);
        }

        function onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercent = scrollTop / height;
            
            // Update section indicator
            const sectionIndex = Math.floor(scrollPercent * 4);
            if(sectionIndex !== currentSection && sectionIndex < SECTIONS.length) {
                currentSection = sectionIndex;
                document.querySelector('.section-indicator').textContent = SECTIONS[currentSection];
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            
            // Move camera through tunnel based on scroll
            camera.position.z = -scrollPercent * 60;
            
            // Rotate and animate tunnel segments
            tunnelSegments.forEach((segment, i) => {
                segment.rotation.z = time * 0.2;
                segment.material.uniforms.time.value = time;
                
                // Pulse colors based on section
                const hue = (i / tunnelSegments.length + time * 0.1) % 1;
                segment.material.uniforms.sectionColor.value.setHSL(hue, 0.5, 0.5);
            });

            renderer.render(scene, camera);
        }

        // Sound toggle
        document.querySelector('.sound-toggle').addEventListener('click', function() {
            this.textContent = this.textContent === '🔊' ? '🔇' : '🔊';
            // Add your sound logic here
        });
    </script>
</body>
</html>
```

## File: src/App.tsx

- Extension: .tsx
- Language: typescript
- Size: 235 bytes
- Created: 2025-01-18 17:13:41
- Modified: 2025-01-18 17:13:41

### Code

```typescript
import { SurrealistLanding } from '@/components/landing/RetroWaveLanding'
import { Layout } from '@/components/layout/Layout'

function App() {
  return (
    <Layout>
      <SurrealistLanding />
    </Layout>
  )
}

export default App
```

## File: src/main.tsx

- Extension: .tsx
- Language: typescript
- Size: 240 bytes
- Created: 2024-10-24 21:59:20
- Modified: 2024-10-24 21:59:20

### Code

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## File: src/vite-env.d.ts

- Extension: .ts
- Language: typescript
- Size: 209 bytes
- Created: 2024-10-24 22:05:27
- Modified: 2024-10-24 22:05:27

### Code

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // add more env variables types here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## File: src/styles/globals.css

- Extension: .css
- Language: unknown
- Size: 430 bytes
- Created: 2024-10-25 09:44:39
- Modified: 2024-10-25 09:44:39

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.grid-background {
    background-image: linear-gradient(rgba(45, 48, 71, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 48, 71, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    perspective: 1000px;
    transform: rotateX(60deg);
  }
```

## File: src/components/landing/RetroWaveLanding.tsx

- Extension: .tsx
- Language: typescript
- Size: 10397 bytes
- Created: 2025-01-20 20:11:07
- Modified: 2025-01-20 20:11:07

### Code

```typescript
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {['LISTEN', 'ABOUT'].map((text) => (
            <motion.button
              key={text}
              className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                        hover:bg-gray-50 transition-colors"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {text}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
```

## File: src/components/layout/Layout.tsx

- Extension: .tsx
- Language: typescript
- Size: 260 bytes
- Created: 2024-10-25 09:31:11
- Modified: 2024-10-25 09:31:11

### Code

```typescript
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        {children}
      </div>
    )
  }
```


```

## File: .dockerignore

- Extension: 
- Language: unknown
- Size: 54 bytes
- Created: 2024-10-24 21:57:01
- Modified: 2024-10-24 21:57:01

### Code

```unknown
node_modules
dist
.git
.gitignore
README.md
.env
*.log
```

## File: .gitignore

- Extension: 
- Language: unknown
- Size: 0 bytes
- Created: 2024-10-24 21:56:46
- Modified: 2024-10-24 21:56:46

### Code

```unknown

```

## File: package.json

- Extension: .json
- Language: json
- Size: 800 bytes
- Created: 2024-10-24 21:57:47
- Modified: 2024-10-24 21:57:47

### Code

```json
{
    "name": "lost-in-tropez-website",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "framer-motion": "^10.16.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.15",
      "@types/react-dom": "^18.2.7",
      "@typescript-eslint/eslint-plugin": "^6.0.0",
      "@typescript-eslint/parser": "^6.0.0",
      "@vitejs/plugin-react": "^4.0.3",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.0.2",
      "vite": "^4.4.5"
    }
  }
```

## File: tsconfig.json

- Extension: .json
- Language: json
- Size: 674 bytes
- Created: 2024-10-24 21:58:14
- Modified: 2024-10-24 21:58:14

### Code

```json
{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
```

## File: docker-compose.yml

- Extension: .yml
- Language: yaml
- Size: 177 bytes
- Created: 2024-10-24 22:25:27
- Modified: 2024-10-24 22:25:27

### Code

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

## File: vite.config.ts

- Extension: .ts
- Language: typescript
- Size: 352 bytes
- Created: 2024-10-24 22:03:30
- Modified: 2024-10-24 22:03:30

### Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## File: postcss.config.js

- Extension: .js
- Language: javascript
- Size: 110 bytes
- Created: 2024-10-24 22:09:13
- Modified: 2024-10-24 22:09:13

### Code

```javascript
// postcss.config.js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

## File: designs/test.html

- Extension: .html
- Language: html
- Size: 6905 bytes
- Created: 2024-11-03 21:45:38
- Modified: 2024-11-03 21:45:27

### Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0;
            overflow: hidden;
            background: #000;
            font-family: Arial, sans-serif;
            color: white;
        }
        canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .section-indicator {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 2em;
            opacity: 0.7;
            transition: opacity 0.5s;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 30px;
            z-index: 100;
        }
        .menu a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        .menu a:hover {
            opacity: 1;
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            cursor: pointer;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#section1">SECTION 1</a>
        <a href="#section2">SECTION 2</a>
        <a href="#section3">SECTION 3</a>
        <a href="#section4">SECTION 4</a>
    </div>
    <div class="sound-toggle">🔊</div>
    <div class="section-indicator">PORTAL 1</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let camera, scene, renderer;
        let tunnel, currentSection = 0;
        let scrollPercent = 0;
        const tunnelSegments = [];
        const SECTIONS = ['PORTAL 1', 'DREAM SPACE', 'VOID REALM', 'FINAL DIMENSION'];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create tunnel segments
            for(let i = 0; i < 4; i++) {
                createTunnelSegment(i * 20);
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Event listeners
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onScroll);
            
            // Initialize scroll height
            document.body.style.height = '400vh';
        }

        function createTunnelSegment(zPosition) {
            const geometry = new THREE.CylinderGeometry(3, 3, 20, 16, 20, true);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1.0 },
                    sectionColor: { value: new THREE.Color(Math.random(), Math.random(), Math.random()) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 sectionColor;
                    varying vec2 vUv;
                    void main() {
                        vec2 position = vUv * 2.0 - 1.0;
                        float angle = atan(position.y, position.x);
                        float radius = length(position);
                        
                        float pattern = sin(angle * 8.0 + time) * 0.5 + 0.5;
                        pattern *= sin(radius * 5.0 - time) * 0.5 + 0.5;
                        
                        vec3 color = sectionColor * pattern;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                side: THREE.BackSide
            });

            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = Math.PI / 2;
            segment.position.z = zPosition;
            
            tunnelSegments.push(segment);
            scene.add(segment);
        }

        function onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercent = scrollTop / height;
            
            // Update section indicator
            const sectionIndex = Math.floor(scrollPercent * 4);
            if(sectionIndex !== currentSection && sectionIndex < SECTIONS.length) {
                currentSection = sectionIndex;
                document.querySelector('.section-indicator').textContent = SECTIONS[currentSection];
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            
            // Move camera through tunnel based on scroll
            camera.position.z = -scrollPercent * 60;
            
            // Rotate and animate tunnel segments
            tunnelSegments.forEach((segment, i) => {
                segment.rotation.z = time * 0.2;
                segment.material.uniforms.time.value = time;
                
                // Pulse colors based on section
                const hue = (i / tunnelSegments.length + time * 0.1) % 1;
                segment.material.uniforms.sectionColor.value.setHSL(hue, 0.5, 0.5);
            });

            renderer.render(scene, camera);
        }

        // Sound toggle
        document.querySelector('.sound-toggle').addEventListener('click', function() {
            this.textContent = this.textContent === '🔊' ? '🔇' : '🔊';
            // Add your sound logic here
        });
    </script>
</body>
</html>
```

## File: src/App.tsx

- Extension: .tsx
- Language: typescript
- Size: 235 bytes
- Created: 2025-01-18 17:13:41
- Modified: 2025-01-18 17:13:41

### Code

```typescript
import { SurrealistLanding } from '@/components/landing/RetroWaveLanding'
import { Layout } from '@/components/layout/Layout'

function App() {
  return (
    <Layout>
      <SurrealistLanding />
    </Layout>
  )
}

export default App
```

## File: src/main.tsx

- Extension: .tsx
- Language: typescript
- Size: 240 bytes
- Created: 2024-10-24 21:59:20
- Modified: 2024-10-24 21:59:20

### Code

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## File: src/vite-env.d.ts

- Extension: .ts
- Language: typescript
- Size: 209 bytes
- Created: 2024-10-24 22:05:27
- Modified: 2024-10-24 22:05:27

### Code

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // add more env variables types here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## File: src/styles/globals.css

- Extension: .css
- Language: unknown
- Size: 430 bytes
- Created: 2024-10-25 09:44:39
- Modified: 2024-10-25 09:44:39

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.grid-background {
    background-image: linear-gradient(rgba(45, 48, 71, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 48, 71, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    perspective: 1000px;
    transform: rotateX(60deg);
  }
```

## File: src/components/ContactSection/ContactSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 5316 bytes
- Created: 2025-03-18 19:02:40
- Modified: 2025-03-18 19:02:40

### Code

```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to your actual form submission API
    console.log('Form submitted:', { email, message });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setMessage('');
    
    // Reset success message after delay
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="contact" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-['Marcellus'] text-gray-900 mb-4">Get Connected</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Subscribe for exclusive music drops, behind-the-scenes content, and upcoming events
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitted ? (
              <motion.div 
                className="p-4 bg-mint bg-opacity-20 text-gray-700 rounded text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! You've successfully joined the Lost in Tropez journey.
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple bg-white bg-opacity-80"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple bg-white bg-opacity-80 h-24"
                    placeholder="Bookings, collaborations, or just to say hello..."
                  />
                </div>
                
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="w-4 h-4 text-purple"
                    defaultChecked 
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                    Subscribe to newsletter for exclusive music updates
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-coral to-purple text-white rounded-md font-['Tenor_Sans']"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONNECT
                </motion.button>
              </>
            )}
          </form>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <a href="https://soundcloud.com/lost-in-tropez" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors">
            SoundCloud
          </a>
          <a href="https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors">
            Spotify
          </a>
          <a href="https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors">
            YouTube
          </a>
          <a href="https://lost-in-tropez.bandcamp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors">
            Bandcamp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
```

## File: src/components/landing/RetroWaveLanding.tsx

- Extension: .tsx
- Language: typescript
- Size: 10752 bytes
- Created: 2025-03-18 19:04:00
- Modified: 2025-03-18 19:04:00

### Code

```typescript
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={onListenClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={onAboutClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
```

## File: src/components/layout/Layout.tsx

- Extension: .tsx
- Language: typescript
- Size: 260 bytes
- Created: 2024-10-25 09:31:11
- Modified: 2024-10-25 09:31:11

### Code

```typescript
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        {children}
      </div>
    )
  }
```

## File: src/components/LatestRelease/LatestRelease.tsx

- Extension: .tsx
- Language: typescript
- Size: 5689 bytes
- Created: 2025-03-18 19:02:21
- Modified: 2025-03-18 19:02:21

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const LatestRelease = () => {
  // Latest release details - replace with actual data
  const release = {
    title: "Mediterranean Nights EP",
    releaseDate: "March 2025",
    coverArt: "/api/placeholder/500/500", // Replace with actual image path
    description: "A 5-track journey through coastal soundscapes and nocturnal rhythms.",
    spotifyLink: "https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE",
    appleMusicLink: "#",
    bandcampLink: "https://lost-in-tropez.bandcamp.com",
    tracklist: [
      "Sunset Boulevard",
      "Midnight Drive",
      "Coastal Haze",
      "Azure Dreams",
      "Morning Light"
    ]
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Latest Release</h4>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-gray-900">{release.title}</h2>
          <p className="mt-2 text-gray-600">{release.releaseDate}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album artwork */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-goldenYellow rounded-lg transform rotate-3"></div>
              
              {/* Album cover */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Release details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{release.description}</p>
            
            {/* Tracklist */}
            <div>
              <h3 className="text-lg font-['Tenor_Sans'] mb-3">Tracklist:</h3>
              <ol className="space-y-2">
                {release.tracklist.map((track, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-6 text-gray-400">{index + 1}.</span>
                    {track}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {/* Listen buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <motion.a 
                href={release.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-mint text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Spotify</span>
              </motion.a>
              
              <motion.a 
                href={release.bandcampLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-skyBlue text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Bandcamp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
```

## File: src/components/StreamingLinks/StreamingLinks.tsx

- Extension: .tsx
- Language: typescript
- Size: 3195 bytes
- Created: 2025-03-18 19:02:03
- Modified: 2025-03-18 19:02:03

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const StreamingLinks = () => {
  const platforms = [
    {
      name: 'Soundcloud',
      url: 'https://soundcloud.com/lost-in-tropez',
      icon: '🔊',
      color: 'from-orange to-retroCream'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
      icon: '🎧',
      color: 'from-mint to-sage'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
      icon: '📺',
      color: 'from-coral to-deepPink'
    },
    {
      name: 'Bandcamp',
      url: 'https://lost-in-tropez.bandcamp.com',
      icon: '💿',
      color: 'from-skyBlue to-retroBlue'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300
      }
    }
  };

  return (
    <div className="py-16 bg-cream bg-opacity-40">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl text-center font-['Marcellus'] mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          LISTEN EVERYWHERE
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${platform.color} text-2xl`}>
                {platform.icon}
              </div>
              <h3 className="font-['Tenor_Sans'] text-lg mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-600">Listen Now</p>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 font-['Cormorant_Garamond'] italic text-lg">
            "Music is the space between the notes" — Claude Debussy
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StreamingLinks;
```

## File: src/components/MusicPlayer/MusicPlayer.tsx

- Extension: .tsx
- Language: typescript
- Size: 5510 bytes
- Created: 2025-03-18 19:00:57
- Modified: 2025-03-18 19:00:07

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);
  
  // Featured tracks - replace with actual tracks
  const tracks = [
    {
      title: "Coastal Dreams",
      url: "https://soundcloud.com/lost-in-tropez/coastal-dreams",
      duration: "3:45"
    },
    {
      title: "Midnight in Saint-Tropez",
      url: "https://soundcloud.com/lost-in-tropez/midnight",
      duration: "4:12"
    },
    {
      title: "Azure Waves",
      url: "https://soundcloud.com/lost-in-tropez/azure-waves",
      duration: "3:28"
    }
  ];

  useEffect(() => {
    // Update progress bar
    if (audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current) {
          setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
        }
      };
      
      audioRef.current.addEventListener('timeupdate', updateProgress);
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateProgress);
        }
      };
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        audioRef.current.play();
        setIsPlaying(true);
      }
    }, 100);
  };

  // Visualizer animation variants
  const barVariants = {
    playing: (i) => ({
      height: [5, 15 + Math.random() * 20, 5],
      transition: {
        repeat: Infinity,
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: 5,
    },
  };

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto bg-gray-50 bg-opacity-80 backdrop-blur-sm p-6 rounded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-['Tenor_Sans'] text-gray-800 mb-4">Featured Tracks</h3>
        
        {/* Audio visualizer */}
        <div className="flex items-end justify-center h-20 mb-4 space-x-1">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={barVariants}
              animate={isPlaying ? "playing" : "paused"}
              className="w-1 bg-gradient-to-t from-coral to-skyBlue rounded-t"
            />
          ))}
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-light text-gray-600">
            {tracks[currentTrack].title}
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => changeTrack((currentTrack - 1 + tracks.length) % tracks.length)}
              className="text-gray-600 hover:text-deepPink transition-colors"
            >
              ◀◀
            </button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-purple text-white"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button 
              onClick={() => changeTrack((currentTrack + 1) % tracks.length)}
              className="text-gray-600 hover:text-deepPink transition-colors"
            >
              ▶▶
            </button>
          </div>
          <div className="text-sm font-light text-gray-600">
            {tracks[currentTrack].duration}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-deepPink to-purple"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {/* Track list */}
      <div className="space-y-2">
        {tracks.map((track, i) => (
          <motion.div 
            key={i}
            onClick={() => changeTrack(i)}
            className={`p-2 cursor-pointer flex justify-between items-center ${
              currentTrack === i ? "bg-cream bg-opacity-50" : "hover:bg-cream hover:bg-opacity-30"
            } transition-colors`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-6 text-gray-500">{i + 1}</div>
              <div>{track.title}</div>
            </div>
            <div className="text-sm text-gray-500">{track.duration}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Hidden audio element */}
      <audio 
        ref={audioRef} 
        onEnded={() => changeTrack((currentTrack + 1) % tracks.length)}
      >
        <source src={tracks[currentTrack].url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  );
};

export default MusicPlayer;

```

## File: src/components/ArtistSection/ArtistSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 3668 bytes
- Created: 2025-03-18 19:01:45
- Modified: 2025-03-18 19:01:45

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const ArtistSection = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Italiana'] mb-6 text-gray-900"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LOST IN TROPEZ
          </motion.h2>
          
          <motion.div
            className="space-y-4 text-gray-700 font-['Cormorant_Garamond'] text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Electronic music producer and sound designer creating immersive sonic landscapes inspired 
              by the Mediterranean coastline and surrealist art movements.
            </p>
            <p>
              Lost In Tropez merges organic textures with synthetic rhythms, crafting a distinctive sound that 
              transports listeners to dreamlike seaside escapes and neon-lit promenades.
            </p>
            <p>
              Drawing from influences as diverse as French house, ambient music, and 80s film soundtracks,
              each track tells a story of nostalgia and futurism colliding in perfect harmony.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#contact" 
              className="px-6 py-2 border border-gray-400 text-gray-600 hover:bg-gray-50 transition-colors inline-block"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="order-1 md:order-2 relative h-64 md:h-96"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Artist image with layered effect */}
          <div className="absolute inset-4 bg-gradient-to-br from-retroBlue to-retroOrange opacity-70 rounded"></div>
          <div className="absolute inset-0 border-2 border-sand rounded"></div>
          <div className="absolute inset-8 border border-white rounded"></div>
          
          {/* This would be replaced with an actual artist image */}
          <div className="absolute inset-0 bg-gray-200 rounded flex items-center justify-center">
            <div className="text-sm text-gray-500">Artist Image</div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple opacity-30 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArtistSection;
```


```

## File: .dockerignore

- Extension: 
- Language: unknown
- Size: 54 bytes
- Created: 2024-10-24 21:57:01
- Modified: 2024-10-24 21:57:01

### Code

```unknown
node_modules
dist
.git
.gitignore
README.md
.env
*.log
```

## File: .gitignore

- Extension: 
- Language: unknown
- Size: 0 bytes
- Created: 2024-10-24 21:56:46
- Modified: 2024-10-24 21:56:46

### Code

```unknown

```

## File: package.json

- Extension: .json
- Language: json
- Size: 800 bytes
- Created: 2024-10-24 21:57:47
- Modified: 2024-10-24 21:57:47

### Code

```json
{
    "name": "lost-in-tropez-website",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "framer-motion": "^10.16.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.15",
      "@types/react-dom": "^18.2.7",
      "@typescript-eslint/eslint-plugin": "^6.0.0",
      "@typescript-eslint/parser": "^6.0.0",
      "@vitejs/plugin-react": "^4.0.3",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.0.2",
      "vite": "^4.4.5"
    }
  }
```

## File: tsconfig.json

- Extension: .json
- Language: json
- Size: 674 bytes
- Created: 2024-10-24 21:58:14
- Modified: 2024-10-24 21:58:14

### Code

```json
{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
```

## File: docker-compose.yml

- Extension: .yml
- Language: yaml
- Size: 177 bytes
- Created: 2024-10-24 22:25:27
- Modified: 2024-10-24 22:25:27

### Code

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

## File: vite.config.ts

- Extension: .ts
- Language: typescript
- Size: 352 bytes
- Created: 2024-10-24 22:03:30
- Modified: 2024-10-24 22:03:30

### Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## File: postcss.config.js

- Extension: .js
- Language: javascript
- Size: 110 bytes
- Created: 2024-10-24 22:09:13
- Modified: 2024-10-24 22:09:13

### Code

```javascript
// postcss.config.js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

## File: designs/test.html

- Extension: .html
- Language: html
- Size: 6905 bytes
- Created: 2024-11-03 21:45:38
- Modified: 2024-11-03 21:45:27

### Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0;
            overflow: hidden;
            background: #000;
            font-family: Arial, sans-serif;
            color: white;
        }
        canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .section-indicator {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 2em;
            opacity: 0.7;
            transition: opacity 0.5s;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 30px;
            z-index: 100;
        }
        .menu a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        .menu a:hover {
            opacity: 1;
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            cursor: pointer;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#section1">SECTION 1</a>
        <a href="#section2">SECTION 2</a>
        <a href="#section3">SECTION 3</a>
        <a href="#section4">SECTION 4</a>
    </div>
    <div class="sound-toggle">🔊</div>
    <div class="section-indicator">PORTAL 1</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let camera, scene, renderer;
        let tunnel, currentSection = 0;
        let scrollPercent = 0;
        const tunnelSegments = [];
        const SECTIONS = ['PORTAL 1', 'DREAM SPACE', 'VOID REALM', 'FINAL DIMENSION'];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create tunnel segments
            for(let i = 0; i < 4; i++) {
                createTunnelSegment(i * 20);
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Event listeners
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onScroll);
            
            // Initialize scroll height
            document.body.style.height = '400vh';
        }

        function createTunnelSegment(zPosition) {
            const geometry = new THREE.CylinderGeometry(3, 3, 20, 16, 20, true);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1.0 },
                    sectionColor: { value: new THREE.Color(Math.random(), Math.random(), Math.random()) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 sectionColor;
                    varying vec2 vUv;
                    void main() {
                        vec2 position = vUv * 2.0 - 1.0;
                        float angle = atan(position.y, position.x);
                        float radius = length(position);
                        
                        float pattern = sin(angle * 8.0 + time) * 0.5 + 0.5;
                        pattern *= sin(radius * 5.0 - time) * 0.5 + 0.5;
                        
                        vec3 color = sectionColor * pattern;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                side: THREE.BackSide
            });

            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = Math.PI / 2;
            segment.position.z = zPosition;
            
            tunnelSegments.push(segment);
            scene.add(segment);
        }

        function onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercent = scrollTop / height;
            
            // Update section indicator
            const sectionIndex = Math.floor(scrollPercent * 4);
            if(sectionIndex !== currentSection && sectionIndex < SECTIONS.length) {
                currentSection = sectionIndex;
                document.querySelector('.section-indicator').textContent = SECTIONS[currentSection];
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            
            // Move camera through tunnel based on scroll
            camera.position.z = -scrollPercent * 60;
            
            // Rotate and animate tunnel segments
            tunnelSegments.forEach((segment, i) => {
                segment.rotation.z = time * 0.2;
                segment.material.uniforms.time.value = time;
                
                // Pulse colors based on section
                const hue = (i / tunnelSegments.length + time * 0.1) % 1;
                segment.material.uniforms.sectionColor.value.setHSL(hue, 0.5, 0.5);
            });

            renderer.render(scene, camera);
        }

        // Sound toggle
        document.querySelector('.sound-toggle').addEventListener('click', function() {
            this.textContent = this.textContent === '🔊' ? '🔇' : '🔊';
            // Add your sound logic here
        });
    </script>
</body>
</html>
```

## File: src/App.tsx

- Extension: .tsx
- Language: typescript
- Size: 4777 bytes
- Created: 2025-03-18 19:22:58
- Modified: 2025-03-18 19:22:58

### Code

```typescript
import { Layout } from '@/components/layout/Layout'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import ArtistSection from '@/components/ArtistSection/ArtistSection'
import StreamingLinks from '@/components/StreamingLinks/StreamingLinks'
import LatestRelease from '@/components/LatestRelease/LatestRelease'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Section types
type SectionType = 'home' | 'about' | 'music' | 'release' | 'streaming' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const showSection = (section: SectionType) => {
    if (section === 'home') {
      setIsPanelOpen(false);
      setActiveSection('home');
    } else {
      setActiveSection(section);
      setIsPanelOpen(true);
    }
  };

  return (
    <Layout>
      {/* Main landing content - always visible */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${isPanelOpen ? 'md:left-0 md:right-1/2 md:transform-none' : ''}`}
        style={{ pointerEvents: 'none' }} // Make this container transparent to pointer events
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => showSection('music')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={() => showSection('about')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>

          <motion.button
            onClick={() => showSection('release')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RELEASES
          </motion.button>

          <motion.button
            onClick={() => showSection('streaming')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            PLATFORMS
          </motion.button>

          <motion.button
            onClick={() => showSection('contact')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CONNECT
          </motion.button>
        </div>
      </div>

      {/* Side panel for content */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div 
            className="absolute inset-0 md:left-1/2 backdrop-blur-sm p-4 md:p-8 overflow-auto pointer-events-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close button - visible on mobile and optionally on desktop */}
            <button 
              onClick={() => showSection('home')}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md pointer-events-auto"
            >
              ✕
            </button>

            {/* Dynamic content based on active section */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:p-8 h-full overflow-auto">
              {activeSection === 'about' && <ArtistSection />}
              {activeSection === 'music' && <MusicPlayer />}
              {activeSection === 'release' && <LatestRelease />}
              {activeSection === 'streaming' && <StreamingLinks />}
              {activeSection === 'contact' && <ContactSection />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default App
```

## File: src/main.tsx

- Extension: .tsx
- Language: typescript
- Size: 240 bytes
- Created: 2024-10-24 21:59:20
- Modified: 2024-10-24 21:59:20

### Code

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## File: src/vite-env.d.ts

- Extension: .ts
- Language: typescript
- Size: 209 bytes
- Created: 2024-10-24 22:05:27
- Modified: 2024-10-24 22:05:27

### Code

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // add more env variables types here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## File: src/styles/globals.css

- Extension: .css
- Language: unknown
- Size: 430 bytes
- Created: 2024-10-25 09:44:39
- Modified: 2024-10-25 09:44:39

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.grid-background {
    background-image: linear-gradient(rgba(45, 48, 71, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 48, 71, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    perspective: 1000px;
    transform: rotateX(60deg);
  }
```

## File: src/components/ContactSection/ContactSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 5593 bytes
- Created: 2025-03-18 19:23:15
- Modified: 2025-03-18 19:23:15

### Code

```typescript
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to your actual form submission API
    console.log('Form submitted:', { email, message });
    setSubmitted(true);
    // Reset form
    setEmail('');
    setMessage('');
    
    // Reset success message after delay
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div id="contact" className="py-8 bg-gradient-to-b from-white to-cream">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-['Marcellus'] text-gray-900 mb-4">Get Connected</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Subscribe for exclusive music drops, behind-the-scenes content, and upcoming events
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg pointer-events-auto"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto">
            {submitted ? (
              <motion.div 
                className="p-4 bg-mint bg-opacity-20 text-gray-700 rounded text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Thank you! You've successfully joined the Lost in Tropez journey.
              </motion.div>
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1 pointer-events-auto">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple bg-white bg-opacity-80 pointer-events-auto"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1 pointer-events-auto">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple bg-white bg-opacity-80 h-24 pointer-events-auto"
                    placeholder="Bookings, collaborations, or just to say hello..."
                  />
                </div>
                
                <div className="flex items-center pointer-events-auto">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="w-4 h-4 text-purple pointer-events-auto"
                    defaultChecked 
                  />
                  <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600 pointer-events-auto">
                    Subscribe to newsletter for exclusive music updates
                  </label>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-coral to-purple text-white rounded-md font-['Tenor_Sans'] pointer-events-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  CONNECT
                </motion.button>
              </>
            )}
          </form>
        </motion.div>
        
        <motion.div 
          className="mt-8 flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <a href="https://soundcloud.com/lost-in-tropez" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors pointer-events-auto">
            SoundCloud
          </a>
          <a href="https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors pointer-events-auto">
            Spotify
          </a>
          <a href="https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors pointer-events-auto">
            YouTube
          </a>
          <a href="https://lost-in-tropez.bandcamp.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-coral transition-colors pointer-events-auto">
            Bandcamp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
```

## File: src/components/landing/RetroWaveLanding.tsx

- Extension: .tsx
- Language: typescript
- Size: 10911 bytes
- Created: 2025-03-18 19:14:15
- Modified: 2025-03-18 19:14:15

### Code

```typescript
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SurrealistLandingProps {
  onAboutClick?: () => void;
  onListenClick?: () => void;
}

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC<SurrealistLandingProps> = ({ 
  onAboutClick, 
  onListenClick 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={onListenClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={onAboutClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
```

## File: src/components/layout/Layout.tsx

- Extension: .tsx
- Language: typescript
- Size: 10960 bytes
- Created: 2025-03-18 19:23:00
- Modified: 2025-03-18 19:23:00

### Code

```typescript
import React, { ReactNode, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors outside the component
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    // For mobile, add touch events
    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      
      // Handle all touch points
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        drops.push(new PaintDrop(x, y, true));
      }
    };

    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Canvas - positioned on top but capturing pointer events */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-20 pointer-events-auto"
        style={{ touchAction: 'none' }}
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      {/* Content - positioned above canvas visually but passes pointer events through except for buttons */}
      <div className="relative z-30 w-full h-full pointer-events-none">
        {/* Wrap children in a container that allows specific elements to receive events */}
        <div className="w-full h-full [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_label]:pointer-events-auto [&_div[role='button']]:pointer-events-auto [&_div[onClick]]:pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
```

## File: src/components/LatestRelease/LatestRelease.tsx

- Extension: .tsx
- Language: typescript
- Size: 5740 bytes
- Created: 2025-03-18 20:02:19
- Modified: 2025-03-18 20:02:19

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const LatestRelease = () => {
  // Latest release details - replace with actual data
  const release = {
    title: "Pieces EP",
    releaseDate: "2023",
    coverArt: "/images/full2552release.png", // Fixed path (removed "public/")
    description: "A 3-track journey through a sunny psychadellic carnival.",
    spotifyLink: "https://open.spotify.com/album/4D9KOJauJjpBoxBGJo27ge?si=9QZ3rTiCR9SeJh1745H6Mg",
    // appleMusicLink: "#",
    bandcampLink: "https://lost-in-tropez.bandcamp.com",
    tracklist: [
      "Pieces",
      "Au Revoir",
      "Pero te Dije"
    ]
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Latest Release</h4>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-gray-900">{release.title}</h2>
          <p className="mt-2 text-gray-600">{release.releaseDate}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album artwork - REDUCED SIZE */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-goldenYellow rounded-lg transform rotate-3"></div>
              
              {/* Album cover */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Release details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{release.description}</p>
            
            {/* Tracklist */}
            <div>
              <h3 className="text-lg font-['Tenor_Sans'] mb-3">Tracklist:</h3>
              <ol className="space-y-2">
                {release.tracklist.map((track, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-6 text-gray-400">{index + 1}.</span>
                    {track}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {/* Listen buttons */}
            <div className="pt-4 flex flex-wrap gap-3 pointer-events-auto">
              <motion.a 
                href={release.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-mint text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Spotify</span>
              </motion.a>
              
              {release.bandcampLink && (
                <motion.a 
                  href={release.bandcampLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-skyBlue text-gray-800 rounded-md inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Bandcamp</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
```

## File: src/components/StreamingLinks/StreamingLinks.tsx

- Extension: .tsx
- Language: typescript
- Size: 3195 bytes
- Created: 2025-03-18 19:02:03
- Modified: 2025-03-18 19:02:03

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const StreamingLinks = () => {
  const platforms = [
    {
      name: 'Soundcloud',
      url: 'https://soundcloud.com/lost-in-tropez',
      icon: '🔊',
      color: 'from-orange to-retroCream'
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
      icon: '🎧',
      color: 'from-mint to-sage'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
      icon: '📺',
      color: 'from-coral to-deepPink'
    },
    {
      name: 'Bandcamp',
      url: 'https://lost-in-tropez.bandcamp.com',
      icon: '💿',
      color: 'from-skyBlue to-retroBlue'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { 
        type: "spring", 
        stiffness: 300
      }
    }
  };

  return (
    <div className="py-16 bg-cream bg-opacity-40">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl text-center font-['Marcellus'] mb-12 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          LISTEN EVERYWHERE
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {platforms.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-br ${platform.color} text-2xl`}>
                {platform.icon}
              </div>
              <h3 className="font-['Tenor_Sans'] text-lg mb-2">{platform.name}</h3>
              <p className="text-sm text-gray-600">Listen Now</p>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 font-['Cormorant_Garamond'] italic text-lg">
            "Music is the space between the notes" — Claude Debussy
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default StreamingLinks;
```

## File: src/components/MusicPlayer/MusicPlayer.tsx

- Extension: .tsx
- Language: typescript
- Size: 10589 bytes
- Created: 2025-03-18 19:58:55
- Modified: 2025-03-18 19:58:55

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Tracks using local audio files (place MP3s in your public folder)
  const tracks = [
    {
      title: "Lag",
      file: "/audio/lag_final.mp3", // Path relative to public folder
      duration: "3:45",
      coverArt: "/images/beneath.png" // Optional
    },
    {
      title: "Pero Te Dije",
      file: "/audio/perotedije.mp3",
      duration: "3:25",
      coverArt: "/images/full2552release.png" // Optional
    },
    {
      title: "Junak",
      file: "/audio/junak.mp3",
      duration: "3:12",
      coverArt: "/images/release_junak.png" // Optional
    }
  ];

  // Update progress bar during playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) { // Only update progress if not dragging
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrack, isDragging]);

  // Handle track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Load the new track
    audio.load();
    if (isPlaying) {
      const playPromise = audio.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Play prevented:", error);
      });
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % tracks.length);
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
  };

  // Progress bar scrubbing functionality
  const calculateProgress = (clientX: number) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return 0;
    
    const rect = progressBar.getBoundingClientRect();
    const position = clientX - rect.left;
    const percentage = (position / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const updateAudioPosition = (percentage: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const time = (percentage / 100) * audio.duration;
    if (!isNaN(time)) {
      audio.currentTime = time;
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent) => {
    const newProgress = calculateProgress(e.clientX);
    setProgress(newProgress);
    updateAudioPosition(newProgress);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX;
    if ('clientX' in e) {
      clientX = e.clientX; // Mouse event
    } else {
      clientX = e.touches[0].clientX; // Touch event
    }
    
    const newProgress = calculateProgress(clientX);
    setProgress(newProgress);
  };

  const handleDragEnd = () => {
    if (isDragging) {
      updateAudioPosition(progress);
      setIsDragging(false);
    }
  };

  // Add mouse move and mouse up listeners to window for smooth dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    // Add touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, progress]);

  // Visualizer animation variants
  const barVariants = {
    playing: (i: number) => ({
      height: [5, 15 + Math.random() * 20, 5],
      transition: {
        repeat: Infinity,
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: 5,
    },
  };

  return (
    <motion.div 
      className="w-full h-full max-w-2xl mx-auto bg-opacity-80 backdrop-blur-sm rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-['Tenor_Sans'] text-gray-800 mb-4">Featured Tracks</h3>
        
        {/* Optional: Display current track cover art */}
        {tracks[currentTrack].coverArt && (
          <div className="mb-4 flex justify-center">
            <img 
              src={tracks[currentTrack].coverArt} 
              alt={`${tracks[currentTrack].title} cover`}
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        
        {/* Audio visualizer */}
        <div className="flex items-end justify-center h-20 mb-4 space-x-1">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={barVariants}
              animate={isPlaying ? "playing" : "paused"}
              className="w-1 bg-gradient-to-t from-coral to-skyBlue rounded-t"
            />
          ))}
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-light text-gray-600">
            {tracks[currentTrack].title}
          </div>
          <div className="flex items-center space-x-4 pointer-events-auto">
            <button 
              onClick={handlePrevTrack}
              className="text-gray-600 hover:text-deepPink transition-colors"
            >
              ◀◀
            </button>
            <button 
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-purple text-white"
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button 
              onClick={handleNextTrack}
              className="text-gray-600 hover:text-deepPink transition-colors"
            >
              ▶▶
            </button>
          </div>
          <div className="text-sm font-light text-gray-600">
            {tracks[currentTrack].duration}
          </div>
        </div>
        
        {/* Interactive Progress bar */}
        <div 
          ref={progressBarRef}
          className="w-full h-4 bg-gray-200 rounded-full overflow-hidden pointer-events-auto cursor-pointer relative"
          onClick={handleProgressBarClick}
          onMouseDown={handleDragStart}
          onTouchStart={handleDragStart}
          style={{ touchAction: 'none' }} // Prevents scrolling while dragging on mobile
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-deepPink to-purple"
            style={{ width: `${progress}%` }}
          />
          {/* Draggable handle indicator */}
          <div 
            className={`absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-0 -translate-x-1/2 pointer-events-none ${
              isDragging ? 'scale-110' : ''
            }`}
            style={{ 
              left: `${progress}%`,
              display: isDragging || (progressBarRef.current && progressBarRef.current.matches(':hover')) ? 'block' : 'none',
              transition: 'transform 0.1s ease'
            }}
          />
        </div>
      </div>
      
      {/* Track list */}
      <div className="space-y-2">
        {tracks.map((track, i) => (
          <motion.div 
            key={i}
            onClick={() => changeTrack(i)}
            className={`p-2 cursor-pointer flex justify-between items-center pointer-events-auto ${
              currentTrack === i ? "bg-cream bg-opacity-50" : "hover:bg-cream hover:bg-opacity-30"
            } transition-colors`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center">
              <div className="w-6 text-gray-500">{i + 1}</div>
              <div>{track.title}</div>
            </div>
            <div className="text-sm text-gray-500">{track.duration}</div>
          </motion.div>
        ))}
      </div>
      
      {/* HTML5 Audio Element */}
      <audio ref={audioRef}>
        <source src={tracks[currentTrack].file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </motion.div>
  );
};

export default MusicPlayer;
```

## File: src/components/ArtistSection/ArtistSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 3814 bytes
- Created: 2025-03-18 20:10:12
- Modified: 2025-03-18 20:10:12

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const ArtistSection = () => {
  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Italiana'] mb-6 text-gray-900"
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            LOST IN TROPEZ
          </motion.h2>
          
          <motion.div
            className="space-y-4 text-gray-700 font-['Cormorant_Garamond'] text-lg"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
            Electronic music duo crafting immersive sonic landscapes inspired by the Mediterranean coastline and surrealist art.  
            </p>
            <p>
            Lost In Tropez blends organic textures with pulsing rhythms, creating a distinctive sound that evokes dreamlike escapes and neon-lit nights.  
            </p>
            <p>
            Influenced by Polo & Pan, ODESZA, Louis The Child, Lane 8, and Nora En Pure, their music fuses French house, ambient tones, and cinematic nostalgia.  
            </p>
            <p>
            Based in Southern California with releases dating back to 2020, Lost In Tropez continues to shape sonic journeys with new music on the way.  
            </p>

          </motion.div>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a 
              href="#contact" 
              className="px-6 py-2 border border-gray-400 text-gray-600 hover:bg-gray-50 transition-colors inline-block pointer-events-auto"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="order-1 md:order-2 relative h-64 md:h-96"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Decorative layered effect */}
          <div className="absolute inset-4 bg-gradient-to-br from-retroBlue to-retroOrange opacity-70 rounded"></div>
          <div className="absolute inset-0 border-2 border-sand rounded"></div>
          <div className="absolute inset-8 border border-white rounded"></div>
          
          {/* Actual artist logo image */}
          <div className="absolute inset-0 rounded overflow-hidden flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="Lost in Tropez Logo" 
              className="object-contain w-full h-full p-4"
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple opacity-30 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ArtistSection;
```


```

## File: .dockerignore

- Extension: 
- Language: unknown
- Size: 54 bytes
- Created: 2024-10-24 21:57:01
- Modified: 2024-10-24 21:57:01

### Code

```unknown
node_modules
dist
.git
.gitignore
README.md
.env
*.log
```

## File: .gitignore

- Extension: 
- Language: unknown
- Size: 0 bytes
- Created: 2024-10-24 21:56:46
- Modified: 2024-10-24 21:56:46

### Code

```unknown

```

## File: package.json

- Extension: .json
- Language: json
- Size: 800 bytes
- Created: 2024-10-24 21:57:47
- Modified: 2024-10-24 21:57:47

### Code

```json
{
    "name": "lost-in-tropez-website",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "framer-motion": "^10.16.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.15",
      "@types/react-dom": "^18.2.7",
      "@typescript-eslint/eslint-plugin": "^6.0.0",
      "@typescript-eslint/parser": "^6.0.0",
      "@vitejs/plugin-react": "^4.0.3",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.0.2",
      "vite": "^4.4.5"
    }
  }
```

## File: tsconfig.json

- Extension: .json
- Language: json
- Size: 674 bytes
- Created: 2024-10-24 21:58:14
- Modified: 2024-10-24 21:58:14

### Code

```json
{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
```

## File: docker-compose.yml

- Extension: .yml
- Language: yaml
- Size: 177 bytes
- Created: 2024-10-24 22:25:27
- Modified: 2024-10-24 22:25:27

### Code

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

## File: vite.config.ts

- Extension: .ts
- Language: typescript
- Size: 352 bytes
- Created: 2024-10-24 22:03:30
- Modified: 2024-10-24 22:03:30

### Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## File: postcss.config.js

- Extension: .js
- Language: javascript
- Size: 110 bytes
- Created: 2024-10-24 22:09:13
- Modified: 2024-10-24 22:09:13

### Code

```javascript
// postcss.config.js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

## File: designs/test.html

- Extension: .html
- Language: html
- Size: 6905 bytes
- Created: 2024-11-03 21:45:38
- Modified: 2024-11-03 21:45:27

### Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0;
            overflow: hidden;
            background: #000;
            font-family: Arial, sans-serif;
            color: white;
        }
        canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .section-indicator {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 2em;
            opacity: 0.7;
            transition: opacity 0.5s;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 30px;
            z-index: 100;
        }
        .menu a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        .menu a:hover {
            opacity: 1;
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            cursor: pointer;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#section1">SECTION 1</a>
        <a href="#section2">SECTION 2</a>
        <a href="#section3">SECTION 3</a>
        <a href="#section4">SECTION 4</a>
    </div>
    <div class="sound-toggle">🔊</div>
    <div class="section-indicator">PORTAL 1</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let camera, scene, renderer;
        let tunnel, currentSection = 0;
        let scrollPercent = 0;
        const tunnelSegments = [];
        const SECTIONS = ['PORTAL 1', 'DREAM SPACE', 'VOID REALM', 'FINAL DIMENSION'];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create tunnel segments
            for(let i = 0; i < 4; i++) {
                createTunnelSegment(i * 20);
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Event listeners
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onScroll);
            
            // Initialize scroll height
            document.body.style.height = '400vh';
        }

        function createTunnelSegment(zPosition) {
            const geometry = new THREE.CylinderGeometry(3, 3, 20, 16, 20, true);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1.0 },
                    sectionColor: { value: new THREE.Color(Math.random(), Math.random(), Math.random()) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 sectionColor;
                    varying vec2 vUv;
                    void main() {
                        vec2 position = vUv * 2.0 - 1.0;
                        float angle = atan(position.y, position.x);
                        float radius = length(position);
                        
                        float pattern = sin(angle * 8.0 + time) * 0.5 + 0.5;
                        pattern *= sin(radius * 5.0 - time) * 0.5 + 0.5;
                        
                        vec3 color = sectionColor * pattern;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                side: THREE.BackSide
            });

            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = Math.PI / 2;
            segment.position.z = zPosition;
            
            tunnelSegments.push(segment);
            scene.add(segment);
        }

        function onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercent = scrollTop / height;
            
            // Update section indicator
            const sectionIndex = Math.floor(scrollPercent * 4);
            if(sectionIndex !== currentSection && sectionIndex < SECTIONS.length) {
                currentSection = sectionIndex;
                document.querySelector('.section-indicator').textContent = SECTIONS[currentSection];
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            
            // Move camera through tunnel based on scroll
            camera.position.z = -scrollPercent * 60;
            
            // Rotate and animate tunnel segments
            tunnelSegments.forEach((segment, i) => {
                segment.rotation.z = time * 0.2;
                segment.material.uniforms.time.value = time;
                
                // Pulse colors based on section
                const hue = (i / tunnelSegments.length + time * 0.1) % 1;
                segment.material.uniforms.sectionColor.value.setHSL(hue, 0.5, 0.5);
            });

            renderer.render(scene, camera);
        }

        // Sound toggle
        document.querySelector('.sound-toggle').addEventListener('click', function() {
            this.textContent = this.textContent === '🔊' ? '🔇' : '🔊';
            // Add your sound logic here
        });
    </script>
</body>
</html>
```

## File: src/App.tsx

- Extension: .tsx
- Language: typescript
- Size: 4777 bytes
- Created: 2025-03-18 19:22:58
- Modified: 2025-03-18 19:22:58

### Code

```typescript
import { Layout } from '@/components/layout/Layout'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import ArtistSection from '@/components/ArtistSection/ArtistSection'
import StreamingLinks from '@/components/StreamingLinks/StreamingLinks'
import LatestRelease from '@/components/LatestRelease/LatestRelease'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Section types
type SectionType = 'home' | 'about' | 'music' | 'release' | 'streaming' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const showSection = (section: SectionType) => {
    if (section === 'home') {
      setIsPanelOpen(false);
      setActiveSection('home');
    } else {
      setActiveSection(section);
      setIsPanelOpen(true);
    }
  };

  return (
    <Layout>
      {/* Main landing content - always visible */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${isPanelOpen ? 'md:left-0 md:right-1/2 md:transform-none' : ''}`}
        style={{ pointerEvents: 'none' }} // Make this container transparent to pointer events
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => showSection('music')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={() => showSection('about')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>

          <motion.button
            onClick={() => showSection('release')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RELEASES
          </motion.button>

          <motion.button
            onClick={() => showSection('streaming')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            PLATFORMS
          </motion.button>

          <motion.button
            onClick={() => showSection('contact')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CONNECT
          </motion.button>
        </div>
      </div>

      {/* Side panel for content */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div 
            className="absolute inset-0 md:left-1/2 backdrop-blur-sm p-4 md:p-8 overflow-auto pointer-events-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close button - visible on mobile and optionally on desktop */}
            <button 
              onClick={() => showSection('home')}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md pointer-events-auto"
            >
              ✕
            </button>

            {/* Dynamic content based on active section */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:p-8 h-full overflow-auto">
              {activeSection === 'about' && <ArtistSection />}
              {activeSection === 'music' && <MusicPlayer />}
              {activeSection === 'release' && <LatestRelease />}
              {activeSection === 'streaming' && <StreamingLinks />}
              {activeSection === 'contact' && <ContactSection />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default App
```

## File: src/main.tsx

- Extension: .tsx
- Language: typescript
- Size: 240 bytes
- Created: 2024-10-24 21:59:20
- Modified: 2024-10-24 21:59:20

### Code

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## File: src/vite-env.d.ts

- Extension: .ts
- Language: typescript
- Size: 209 bytes
- Created: 2024-10-24 22:05:27
- Modified: 2024-10-24 22:05:27

### Code

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // add more env variables types here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## File: src/styles/globals.css

- Extension: .css
- Language: unknown
- Size: 430 bytes
- Created: 2024-10-25 09:44:39
- Modified: 2024-10-25 09:44:39

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.grid-background {
    background-image: linear-gradient(rgba(45, 48, 71, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 48, 71, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    perspective: 1000px;
    transform: rotateX(60deg);
  }
```

## File: src/components/ContactSection/ContactSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 15068 bytes
- Created: 2025-03-18 20:35:20
- Modified: 2025-03-18 20:35:20

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  // Setup visibility for staggered animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
    setSubmitted(true);
    setEmail('');
    setMessage('');
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.6, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 6px rgba(138, 138, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for floating elements
  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8
      }
    })
  };

  return (
    <div id="contact" className="py-10 relative overflow-hidden">
      {/* Background decorative elements - matching other components */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl text-center font-['Marcellus'] text-gray-900 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Abstract artistic drawing */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[350px]">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 350" 
                style={{ overflow: 'visible' }}
              >
                {/* Center flowing wave */}
                <motion.path
                  id="centerWave"
                  d="M50,175 C90,145 130,195 170,175 C210,155 250,205 290,175"
                  stroke="#6c94db"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("centerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Upper wave */}
                <motion.path
                  id="upperWave"
                  d="M30,120 C70,90 110,140 150,120 C190,100 230,150 270,130"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "upperWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("upperWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Lower wave */}
                <motion.path
                  id="lowerWave"
                  d="M70,230 C110,200 150,250 190,230 C230,210 270,260 310,230"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "lowerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("lowerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Connecting vertical lines */}
                <motion.path
                  id="connectLine1"
                  d="M90,90 C100,120 80,150 100,175 C120,200 90,230 100,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine2"
                  d="M170,70 C180,100 160,130 170,175 C180,220 160,250 170,280"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine3"
                  d="M250,90 C260,120 240,150 250,175 C260,200 240,230 250,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Accent elements */}
                <motion.circle
                  id="accent1"
                  cx="90"
                  cy="175"
                  r="8"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent2"
                  cx="170"
                  cy="175"
                  r="10"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent3"
                  cx="250"
                  cy="175"
                  r="6"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.4}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Decorative abstract elements */}
                <motion.path
                  id="abstractShape1"
                  d="M50,300 C80,320 120,280 150,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="abstractShape2"
                  d="M200,300 C230,280 260,320 290,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Floating circles */}
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={`float-circle-${i}`}
                    cx={70 + i * 40}
                    cy={80 + (i % 3) * 30}
                    r={3 + (i % 3)}
                    fill="#6c94db"
                    opacity={0.7}
                    custom={8 + i * 0.2}
                    initial="hidden"
                    animate="visible"
                    variants={floatingVariants}
                  />
                ))}
                
                {/* Animated pulsing accent */}
                <motion.circle
                  cx="170"
                  cy="175"
                  r="20"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </svg>
            </div>
          </div>
          
          {/* Right side: Form */}
          <div className="flex-1">
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    className="p-6 text-gray-700 rounded text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="mb-4">
                      <svg width="50" height="50" viewBox="0 0 50 50" className="mx-auto">
                        <motion.circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.path
                          d="M15,25 L22,32 L35,18"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                      </svg>
                    </div>
                    <p className="font-['Cormorant_Garamond'] italic text-lg">
                      Thank you for your message. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="email" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80 h-32"
                        placeholder="Bookings, collaborations, or just to say hello..."
                        required
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-coral to-purple text-white rounded-md font-['Tenor_Sans']"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      SEND MESSAGE
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
```

## File: src/components/landing/RetroWaveLanding.tsx

- Extension: .tsx
- Language: typescript
- Size: 10911 bytes
- Created: 2025-03-18 19:14:15
- Modified: 2025-03-18 19:14:15

### Code

```typescript
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SurrealistLandingProps {
  onAboutClick?: () => void;
  onListenClick?: () => void;
}

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC<SurrealistLandingProps> = ({ 
  onAboutClick, 
  onListenClick 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={onListenClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={onAboutClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
```

## File: src/components/layout/Layout.tsx

- Extension: .tsx
- Language: typescript
- Size: 10960 bytes
- Created: 2025-03-18 19:23:00
- Modified: 2025-03-18 19:23:00

### Code

```typescript
import React, { ReactNode, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors outside the component
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    // For mobile, add touch events
    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      
      // Handle all touch points
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        drops.push(new PaintDrop(x, y, true));
      }
    };

    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Canvas - positioned on top but capturing pointer events */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-20 pointer-events-auto"
        style={{ touchAction: 'none' }}
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      {/* Content - positioned above canvas visually but passes pointer events through except for buttons */}
      <div className="relative z-30 w-full h-full pointer-events-none">
        {/* Wrap children in a container that allows specific elements to receive events */}
        <div className="w-full h-full [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_label]:pointer-events-auto [&_div[role='button']]:pointer-events-auto [&_div[onClick]]:pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
```

## File: src/components/LatestRelease/LatestRelease.tsx

- Extension: .tsx
- Language: typescript
- Size: 5740 bytes
- Created: 2025-03-18 20:02:19
- Modified: 2025-03-18 20:02:19

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const LatestRelease = () => {
  // Latest release details - replace with actual data
  const release = {
    title: "Pieces EP",
    releaseDate: "2023",
    coverArt: "/images/full2552release.png", // Fixed path (removed "public/")
    description: "A 3-track journey through a sunny psychadellic carnival.",
    spotifyLink: "https://open.spotify.com/album/4D9KOJauJjpBoxBGJo27ge?si=9QZ3rTiCR9SeJh1745H6Mg",
    // appleMusicLink: "#",
    bandcampLink: "https://lost-in-tropez.bandcamp.com",
    tracklist: [
      "Pieces",
      "Au Revoir",
      "Pero te Dije"
    ]
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Latest Release</h4>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-gray-900">{release.title}</h2>
          <p className="mt-2 text-gray-600">{release.releaseDate}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album artwork - REDUCED SIZE */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-goldenYellow rounded-lg transform rotate-3"></div>
              
              {/* Album cover */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Release details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{release.description}</p>
            
            {/* Tracklist */}
            <div>
              <h3 className="text-lg font-['Tenor_Sans'] mb-3">Tracklist:</h3>
              <ol className="space-y-2">
                {release.tracklist.map((track, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-6 text-gray-400">{index + 1}.</span>
                    {track}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {/* Listen buttons */}
            <div className="pt-4 flex flex-wrap gap-3 pointer-events-auto">
              <motion.a 
                href={release.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-mint text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Spotify</span>
              </motion.a>
              
              {release.bandcampLink && (
                <motion.a 
                  href={release.bandcampLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-skyBlue text-gray-800 rounded-md inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Bandcamp</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
```

## File: src/components/StreamingLinks/StreamingLinks.tsx

- Extension: .tsx
- Language: typescript
- Size: 15630 bytes
- Created: 2025-03-18 20:27:24
- Modified: 2025-03-18 20:27:24

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// Platform interface
interface Platform {
  name: string;
  url: string;
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  pathId: string;
  nodePosition: { x: number, y: number }
}

// Main component
const StreamingLinks = () => {
  const [activeStroke, setActiveStroke] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Define platforms with richer color schemes and path associations
  const platforms: Platform[] = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
      mainColor: '#1DB954',
      secondaryColor: '#1ED760',
      accentColor: '#B3F0CA',
      pathId: 'face-outline',
      nodePosition: { x: 240, y: 200 }
    },
    {
      name: 'Soundcloud',
      url: 'https://soundcloud.com/lost-in-tropez',
      mainColor: '#FF7700',
      secondaryColor: '#FF8800',
      accentColor: '#FFD1A9',
      pathId: 'hair-line',
      nodePosition: { x: 95, y: 210 }
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
      mainColor: '#FF0000',
      secondaryColor: '#FF3D3D',
      accentColor: '#FFCFCF',
      pathId: 'shoulder-line',
      nodePosition: { x: 260, y: 420 }
    },
    {
      name: 'Bandcamp',
      url: 'https://lost-in-tropez.bandcamp.com',
      mainColor: '#629aa9',
      secondaryColor: '#4FA8BB',
      accentColor: '#C5E0E6',
      pathId: 'ear-detail',
      nodePosition: { x: 300, y: 180 }
    }
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      controls.start({ 
        x: x * 20, 
        y: y * 20,
        transition: { type: 'spring', stiffness: 100, damping: 30 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2.5, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.8, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))",
      strokeWidth: 2.5,
      transition: { duration: 0.3 }
    }
  };
  
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: custom * 0.2 + 0.6
      }
    }),
    highlighted: {
      scale: 1.2,
      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
      transition: { type: "spring", stiffness: 500, damping: 15 }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements - matching LatestRelease style */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Join Us</h4>

      {/* Floating blobs - matching LatestRelease style */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main content container */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Content container */}
        <div className="relative">
          {/* Illustration container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[500px] md:h-[600px]">
              {/* SVG illustration */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 500 600" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Face outline */}
                <motion.path
                  id="face-outline"
                  d="M170,130 C180,90 240,80 280,110 C320,140 340,190 335,240 C330,290 310,330 280,360 C250,390 210,395 180,380 C150,365 135,330 140,290 C145,250 160,170 170,130 Z"
                  stroke={platforms[0].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "face-outline" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("face-outline")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Hair lines */}
                <motion.path
                  id="hair-line"
                  d="M170,130 C160,110 140,100 110,105 C90,110 80,130 85,150 C90,170 100,190 90,220 C80,250 60,260 50,280 C30,320 40,340 60,350 C80,360 110,350 130,325"
                  stroke={platforms[1].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "hair-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("hair-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Shoulder line */}
                <motion.path
                  id="shoulder-line"
                  d="M140,400 C170,440 210,460 260,450 C310,440 350,410 370,380"
                  stroke={platforms[2].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "shoulder-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("shoulder-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Ear detail */}
                <motion.path
                  id="ear-detail"
                  d="M310,200 C320,190 325,180 320,170 C315,160 305,160 295,165 C285,170 280,180 285,190"
                  stroke={platforms[3].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "ear-detail" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("ear-detail")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Additional detail lines */}
                <motion.path
                  d="M210,200 C220,195 230,195 240,200"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M265,195 C275,190 285,190 295,195"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M250,220 C255,235 255,250 250,265"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Lips - highlight with a vibrant color */}
                <motion.path
                  d="M220,290 C235,300 265,300 280,290"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Small details */}
                <motion.path
                  d="M225,185 C225,180 223,177 220,177"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={8}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M280,183 C280,178 282,175 285,175"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={9}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Platform nodes */}
                {platforms.map((platform, index) => {
                  const pathId = platform.pathId;
                  const position = platform.nodePosition;
                  
                  return (
                    <motion.g
                      key={platform.name}
                      custom={index + 4}
                      initial="hidden"
                      animate={isVisible ? 
                        (activeStroke === pathId ? "highlighted" : "visible") : "hidden"}
                      variants={nodeVariants}
                      className="cursor-pointer"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      {/* Platform node background with glow effect */}
                      <defs>
                        <radialGradient id={`grad-${platform.name}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor={platform.accentColor} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={platform.mainColor} stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      
                      {/* Glowing background circle */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="28" 
                        fill={`url(#grad-${platform.name})`} 
                        opacity="0.7"
                      />
                      
                      {/* Platform node foreground */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="22" 
                        fill="white" 
                        className="drop-shadow-sm"
                      />
                      
                      {/* Platform node border */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="20" 
                        fill="white" 
                        stroke={activeStroke === pathId ? platform.mainColor : platform.secondaryColor}
                        strokeWidth="1.5"
                      />
                      
                      {/* Platform name */}
                      <text 
                        x={position.x} 
                        y={position.y + 5}
                        textAnchor="middle" 
                        fontFamily="'Tenor Sans', sans-serif" 
                        fontSize="10" 
                        fill={activeStroke === pathId ? platform.mainColor : "#6c94db"}
                        className="uppercase"
                      >
                        {platform.name}
                      </text>
                      
                      {/* Ripple effect */}
                      <AnimatePresence>
                        {activeStroke === pathId && (
                          <motion.circle
                            cx={position.x}
                            cy={position.y}
                            r="20"
                            fill="none"
                            stroke={platform.secondaryColor}
                            strokeWidth="1.5"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.g>
                  );
                })}
                
                {/* Clothing accent */}
                <motion.path
                  d="M195,450 C200,470 210,500 230,520 C245,535 260,540 270,530"
                  stroke="#9B6EDC"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={10}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingLinks;
```

## File: src/components/MusicPlayer/MusicPlayer.tsx

- Extension: .tsx
- Language: typescript
- Size: 22306 bytes
- Created: 2025-03-18 20:34:43
- Modified: 2025-03-18 20:34:43

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Tracks using local audio files (place MP3s in your public folder)
  const tracks = [
    {
      title: "Lag",
      file: "/audio/lag_final.mp3", // Path relative to public folder
      duration: "3:45",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Pero Te Dije",
      file: "/audio/perotedije.mp3",
      duration: "3:25",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Junak",
      file: "/audio/junak.mp3",
      duration: "3:12",
      coverArt: "/images/release_junak.png" // Optional
    }
  ];

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Update progress bar during playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) { // Only update progress if not dragging
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrack, isDragging]);

  // Handle track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Load the new track
    audio.load();
    if (isPlaying) {
      const playPromise = audio.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Play prevented:", error);
      });
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % tracks.length);
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
  };

  // Progress bar scrubbing functionality
  const calculateProgress = (clientX: number) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return 0;
    
    const rect = progressBar.getBoundingClientRect();
    const position = clientX - rect.left;
    const percentage = (position / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const updateAudioPosition = (percentage: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const time = (percentage / 100) * audio.duration;
    if (!isNaN(time)) {
      audio.currentTime = time;
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent) => {
    const newProgress = calculateProgress(e.clientX);
    setProgress(newProgress);
    updateAudioPosition(newProgress);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX;
    if ('clientX' in e) {
      clientX = e.clientX; // Mouse event
    } else {
      clientX = e.touches[0].clientX; // Touch event
    }
    
    const newProgress = calculateProgress(clientX);
    setProgress(newProgress);
  };

  const handleDragEnd = () => {
    if (isDragging) {
      updateAudioPosition(progress);
      setIsDragging(false);
    }
  };

  // Add mouse move and mouse up listeners to window for smooth dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    // Add touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, progress]);

  // Visualizer animation variants
  const barVariants = {
    playing: (i: number) => ({
      height: [5, 15 + Math.random() * 20, 5],
      transition: {
        repeat: Infinity,
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: 5,
    },
  };

  // Animation variants for SVG paths
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.6, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for record rotation
  const recordVariants = {
    paused: { 
      rotate: 0
    },
    playing: { 
      rotate: 360,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side: Album art with decorative SVG art */}
          <div className="md:w-2/5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* SVG art container */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 300" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Decorative circle frame */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="130"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="1"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  custom={0.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Rotating record outer circle */}
                <motion.g
                  variants={recordVariants}
                  animate={isPlaying ? "playing" : "paused"}
                  style={{ originX: "150px", originY: "150px" }}
                >
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="120"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={0.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                  
                  {/* Record grooves */}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={`groove-${i}`}
                      cx="150"
                      cy="150"
                      r={110 - i * 12}
                      fill="none"
                      stroke="#6c94db"
                      strokeWidth="0.5"
                      strokeDasharray={Math.random() < 0.5 ? "3 1" : "1 2"}
                      custom={0.8 + i * 0.1}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={lineVariants}
                    />
                  ))}
                  
                  {/* Center hole */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="8"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={1.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                </motion.g>
                
                {/* Decorative elements */}
                <motion.path
                  d="M30,150 C30,70 70,30 150,30"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M270,150 C270,230 230,270 150,270"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Album cover mask */}
                <clipPath id="albumCoverClip">
                  <circle cx="150" cy="150" r="110" />
                </clipPath>
              </svg>
              
              {/* Cover art inside */}
              {tracks[currentTrack].coverArt && (
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ clipPath: "circle(110px at center)" }}
                >
                  <motion.img 
                    src={tracks[currentTrack].coverArt} 
                    alt={`${tracks[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{ 
                      transform: isPlaying ? 'rotate(360deg)' : 'rotate(0deg)',
                      transition: isPlaying ? 'transform 3s linear infinite' : 'none'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Right side: Player controls */}
          <motion.div 
            className="md:w-3/5 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-['Tenor_Sans'] text-gray-800 mb-4">Featured Tracks</h3>
            
            {/* Audio visualizer */}
            <div className="relative mb-6">
              {/* SVG elements over visualizer */}
              <svg 
                width="100%" 
                height="80" 
                className="absolute inset-0 pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                {/* Decorative sound wave arcs */}
                <motion.path
                  d="M20,60 C60,20 120,20 160,60 C200,100 260,100 300,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M350,60 C390,20 450,20 490,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3.3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {/* Traditional bar visualizer */}
              <div className="flex items-end justify-center h-20 space-x-1 relative z-10">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={barVariants}
                    animate={isPlaying ? "playing" : "paused"}
                    className="w-1 bg-gradient-to-t from-coral to-skyBlue rounded-t"
                  />
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].title}
              </div>
              <div className="flex items-center space-x-4 pointer-events-auto">
                <button 
                  onClick={handlePrevTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 20L9 12L19 4V20Z" />
                    <line x1="5" y1="19" x2="5" y2="5" />
                  </svg>
                </button>
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-purple text-white"
                >
                  {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="4" width="4" height="16" fill="white" />
                      <rect x="14" y="4" width="4" height="16" fill="white" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5,3 19,12 5,21" fill="white" />
                    </svg>
                  )}
                </button>
                <button 
                  onClick={handleNextTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4L15 12L5 20V4Z" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                  </svg>
                </button>
              </div>
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].duration}
              </div>
            </div>
            
            {/* Interactive Progress bar */}
            <div className="relative mb-8">
              {/* SVG decorative arrow */}
              <svg 
                width="100%" 
                height="20" 
                className="absolute -top-6 pointer-events-none"
              >
                <motion.path
                  d={`M${progress}%,15 L${progress + 1}%,5 L${progress + 2}%,15`}
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              <div 
                ref={progressBarRef}
                className="w-full h-4 bg-gray-200 rounded-full overflow-hidden pointer-events-auto cursor-pointer relative"
                onClick={handleProgressBarClick}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={{ touchAction: 'none' }} // Prevents scrolling while dragging on mobile
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-deepPink to-purple"
                  style={{ width: `${progress}%` }}
                />
                {/* Draggable handle indicator */}
                <div 
                  className={`absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-0 -translate-x-1/2 pointer-events-none ${
                    isDragging ? 'scale-110' : ''
                  }`}
                  style={{ 
                    left: `${progress}%`,
                    display: isDragging || (progressBarRef.current && progressBarRef.current.matches(':hover')) ? 'block' : 'none',
                    transition: 'transform 0.1s ease'
                  }}
                />
              </div>
            </div>
            
            {/* Track list with decorative elements */}
            <div className="space-y-2 relative">
              {/* Decorative line */}
              <svg 
                width="100%" 
                height="100%" 
                className="absolute top-0 left-0 pointer-events-none z-0"
                style={{ overflow: 'visible' }}
              >
                <motion.line
                  x1="0"
                  y1="10"
                  x2="100%"
                  y2="10"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {tracks.map((track, i) => (
                <motion.div 
                  key={i}
                  onClick={() => changeTrack(i)}
                  className={`p-3 cursor-pointer flex justify-between items-center pointer-events-auto ${
                    currentTrack === i ? "bg-cream bg-opacity-50" : "hover:bg-cream hover:bg-opacity-30"
                  } transition-colors rounded-md relative z-10`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center">
                    {/* Track indicator */}
                    {currentTrack === i && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-purple rounded-l-md"
                        layoutId="trackIndicator"
                      />
                    )}
                    <div className="w-6 text-gray-500 flex justify-center">{i + 1}</div>
                    <div className="ml-2">{track.title}</div>
                  </div>
                  <div className="text-sm text-gray-500">{track.duration}</div>
                </motion.div>
              ))}
            </div>
            
            {/* HTML5 Audio Element */}
            <audio ref={audioRef}>
              <source src={tracks[currentTrack].file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
```

## File: src/components/ArtistSection/ArtistSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 4729 bytes
- Created: 2025-03-18 20:30:59
- Modified: 2025-03-18 20:30:59

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const ArtistSection = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements - matching other components */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="w-full max-w-4xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Italiana'] mb-6 text-gray-900"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              LOST IN TROPEZ
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-gray-700 font-['Cormorant_Garamond'] text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Electronic music duo crafting immersive sonic landscapes inspired by the Mediterranean coastline and surrealist art.  
              </p>
              <p>
                Lost In Tropez blends organic textures with pulsing rhythms, creating a distinctive sound that evokes dreamlike escapes and neon-lit nights.  
              </p>
              <p>
                Influenced by Polo & Pan, ODESZA, Louis The Child, Lane 8, and Nora En Pure, their music fuses French house, ambient tones, and cinematic nostalgia.  
              </p>
              <p>
                Based in Southern California with releases dating back to 2020, Lost In Tropez continues to shape sonic journeys with new music on the way.  
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Optional contact button removed as in original code */}
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2 relative h-64 md:h-96"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Decorative layered effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-retroBlue to-retroOrange opacity-70 rounded"></div>
            <div className="absolute inset-0 border-2 border-sand rounded"></div>
            <div className="absolute inset-8 border border-white rounded"></div>
            
            {/* Actual artist logo image */}
            <div className="absolute inset-0 rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Lost in Tropez Logo" 
                className="object-contain w-full h-full p-4"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple opacity-30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistSection;
```


```

## File: .dockerignore

- Extension: 
- Language: unknown
- Size: 54 bytes
- Created: 2024-10-24 21:57:01
- Modified: 2024-10-24 21:57:01

### Code

```unknown
node_modules
dist
.git
.gitignore
README.md
.env
*.log
```

## File: .gitignore

- Extension: 
- Language: unknown
- Size: 0 bytes
- Created: 2024-10-24 21:56:46
- Modified: 2024-10-24 21:56:46

### Code

```unknown

```

## File: package.json

- Extension: .json
- Language: json
- Size: 800 bytes
- Created: 2024-10-24 21:57:47
- Modified: 2024-10-24 21:57:47

### Code

```json
{
    "name": "lost-in-tropez-website",
    "private": true,
    "version": "0.1.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "preview": "vite preview",
      "type-check": "tsc --noEmit"
    },
    "dependencies": {
      "framer-motion": "^10.16.4",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-router-dom": "^6.18.0"
    },
    "devDependencies": {
      "@types/react": "^18.2.15",
      "@types/react-dom": "^18.2.7",
      "@typescript-eslint/eslint-plugin": "^6.0.0",
      "@typescript-eslint/parser": "^6.0.0",
      "@vitejs/plugin-react": "^4.0.3",
      "autoprefixer": "^10.4.16",
      "postcss": "^8.4.31",
      "tailwindcss": "^3.3.5",
      "typescript": "^5.0.2",
      "vite": "^4.4.5"
    }
  }
```

## File: tsconfig.json

- Extension: .json
- Language: json
- Size: 674 bytes
- Created: 2024-10-24 21:58:14
- Modified: 2024-10-24 21:58:14

### Code

```json
{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "module": "ESNext",
      "skipLibCheck": true,
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx",
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }
```

## File: docker-compose.yml

- Extension: .yml
- Language: yaml
- Size: 177 bytes
- Created: 2024-10-24 22:25:27
- Modified: 2024-10-24 22:25:27

### Code

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
```

## File: vite.config.ts

- Extension: .ts
- Language: typescript
- Size: 352 bytes
- Created: 2024-10-24 22:03:30
- Modified: 2024-10-24 22:03:30

### Code

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## File: postcss.config.js

- Extension: .js
- Language: javascript
- Size: 110 bytes
- Created: 2024-10-24 22:09:13
- Modified: 2024-10-24 22:09:13

### Code

```javascript
// postcss.config.js
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
```

## File: designs/test.html

- Extension: .html
- Language: html
- Size: 6905 bytes
- Created: 2024-11-03 21:45:38
- Modified: 2024-11-03 21:45:27

### Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { 
            margin: 0;
            overflow: hidden;
            background: #000;
            font-family: Arial, sans-serif;
            color: white;
        }
        canvas {
            position: fixed;
            top: 0;
            left: 0;
        }
        .overlay {
            position: fixed;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .section-indicator {
            position: fixed;
            right: 40px;
            top: 50%;
            transform: translateY(-50%);
            text-align: right;
            font-size: 2em;
            opacity: 0.7;
            transition: opacity 0.5s;
            text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }
        .menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 30px;
            z-index: 100;
        }
        .menu a {
            color: white;
            text-decoration: none;
            opacity: 0.7;
            transition: opacity 0.3s;
        }
        .menu a:hover {
            opacity: 1;
        }
        .sound-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 100;
            cursor: pointer;
            padding: 10px;
            border: 1px solid rgba(255,255,255,0.3);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="menu">
        <a href="#section1">SECTION 1</a>
        <a href="#section2">SECTION 2</a>
        <a href="#section3">SECTION 3</a>
        <a href="#section4">SECTION 4</a>
    </div>
    <div class="sound-toggle">🔊</div>
    <div class="section-indicator">PORTAL 1</div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        let camera, scene, renderer;
        let tunnel, currentSection = 0;
        let scrollPercent = 0;
        const tunnelSegments = [];
        const SECTIONS = ['PORTAL 1', 'DREAM SPACE', 'VOID REALM', 'FINAL DIMENSION'];

        init();
        animate();

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // Create tunnel segments
            for(let i = 0; i < 4; i++) {
                createTunnelSegment(i * 20);
            }

            // Lights
            const ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xffffff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Event listeners
            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onScroll);
            
            // Initialize scroll height
            document.body.style.height = '400vh';
        }

        function createTunnelSegment(zPosition) {
            const geometry = new THREE.CylinderGeometry(3, 3, 20, 16, 20, true);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 1.0 },
                    sectionColor: { value: new THREE.Color(Math.random(), Math.random(), Math.random()) }
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
                fragmentShader: `
                    uniform float time;
                    uniform vec3 sectionColor;
                    varying vec2 vUv;
                    void main() {
                        vec2 position = vUv * 2.0 - 1.0;
                        float angle = atan(position.y, position.x);
                        float radius = length(position);
                        
                        float pattern = sin(angle * 8.0 + time) * 0.5 + 0.5;
                        pattern *= sin(radius * 5.0 - time) * 0.5 + 0.5;
                        
                        vec3 color = sectionColor * pattern;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
                side: THREE.BackSide
            });

            const segment = new THREE.Mesh(geometry, material);
            segment.rotation.x = Math.PI / 2;
            segment.position.z = zPosition;
            
            tunnelSegments.push(segment);
            scene.add(segment);
        }

        function onScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            scrollPercent = scrollTop / height;
            
            // Update section indicator
            const sectionIndex = Math.floor(scrollPercent * 4);
            if(sectionIndex !== currentSection && sectionIndex < SECTIONS.length) {
                currentSection = sectionIndex;
                document.querySelector('.section-indicator').textContent = SECTIONS[currentSection];
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            
            // Move camera through tunnel based on scroll
            camera.position.z = -scrollPercent * 60;
            
            // Rotate and animate tunnel segments
            tunnelSegments.forEach((segment, i) => {
                segment.rotation.z = time * 0.2;
                segment.material.uniforms.time.value = time;
                
                // Pulse colors based on section
                const hue = (i / tunnelSegments.length + time * 0.1) % 1;
                segment.material.uniforms.sectionColor.value.setHSL(hue, 0.5, 0.5);
            });

            renderer.render(scene, camera);
        }

        // Sound toggle
        document.querySelector('.sound-toggle').addEventListener('click', function() {
            this.textContent = this.textContent === '🔊' ? '🔇' : '🔊';
            // Add your sound logic here
        });
    </script>
</body>
</html>
```

## File: src/App.tsx

- Extension: .tsx
- Language: typescript
- Size: 4777 bytes
- Created: 2025-03-18 19:22:58
- Modified: 2025-03-18 19:22:58

### Code

```typescript
import { Layout } from '@/components/layout/Layout'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'
import ArtistSection from '@/components/ArtistSection/ArtistSection'
import StreamingLinks from '@/components/StreamingLinks/StreamingLinks'
import LatestRelease from '@/components/LatestRelease/LatestRelease'
import ContactSection from '@/components/ContactSection/ContactSection'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Section types
type SectionType = 'home' | 'about' | 'music' | 'release' | 'streaming' | 'contact';

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const showSection = (section: SectionType) => {
    if (section === 'home') {
      setIsPanelOpen(false);
      setActiveSection('home');
    } else {
      setActiveSection(section);
      setIsPanelOpen(true);
    }
  };

  return (
    <Layout>
      {/* Main landing content - always visible */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ${isPanelOpen ? 'md:left-0 md:right-1/2 md:transform-none' : ''}`}
        style={{ pointerEvents: 'none' }} // Make this container transparent to pointer events
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => showSection('music')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={() => showSection('about')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>

          <motion.button
            onClick={() => showSection('release')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            RELEASES
          </motion.button>

          <motion.button
            onClick={() => showSection('streaming')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            PLATFORMS
          </motion.button>

          <motion.button
            onClick={() => showSection('contact')}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            CONNECT
          </motion.button>
        </div>
      </div>

      {/* Side panel for content */}
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div 
            className="absolute inset-0 md:left-1/2 backdrop-blur-sm p-4 md:p-8 overflow-auto pointer-events-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
          >
            {/* Close button - visible on mobile and optionally on desktop */}
            <button 
              onClick={() => showSection('home')}
              className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full bg-white bg-opacity-70 flex items-center justify-center shadow-md pointer-events-auto"
            >
              ✕
            </button>

            {/* Dynamic content based on active section */}
            <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-5 md:p-8 h-full overflow-auto">
              {activeSection === 'about' && <ArtistSection />}
              {activeSection === 'music' && <MusicPlayer />}
              {activeSection === 'release' && <LatestRelease />}
              {activeSection === 'streaming' && <StreamingLinks />}
              {activeSection === 'contact' && <ContactSection />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default App
```

## File: src/main.tsx

- Extension: .tsx
- Language: typescript
- Size: 240 bytes
- Created: 2024-10-24 21:59:20
- Modified: 2024-10-24 21:59:20

### Code

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## File: src/vite-env.d.ts

- Extension: .ts
- Language: typescript
- Size: 209 bytes
- Created: 2024-10-24 22:05:27
- Modified: 2024-10-24 22:05:27

### Code

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string
    // add more env variables types here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
```

## File: src/styles/globals.css

- Extension: .css
- Language: unknown
- Size: 430 bytes
- Created: 2024-10-25 09:44:39
- Modified: 2024-10-25 09:44:39

### Code

```unknown
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.grid-background {
    background-image: linear-gradient(rgba(45, 48, 71, 0.5) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45, 48, 71, 0.5) 1px, transparent 1px);
    background-size: 30px 30px;
    perspective: 1000px;
    transform: rotateX(60deg);
  }
```

## File: src/components/ContactSection/ContactSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 16027 bytes
- Created: 2025-03-18 20:42:57
- Modified: 2025-03-18 20:42:57

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  
  // Setup visibility for staggered animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Submit form data to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        email,
        message
      }).toString()
    })
      .then(() => {
        console.log("Form successfully submitted");
        setSubmitted(true);
        setEmail("");
        setMessage("");
        
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.log("Form submission error:", error);
      });
  };

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.6, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 6px rgba(138, 138, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for floating elements
  const floatingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8
      }
    })
  };

  return (
    <div id="contact" className="py-10 relative overflow-hidden">
      {/* Background decorative elements - matching other components */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl text-center font-['Marcellus'] text-gray-900 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Us
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Abstract artistic drawing */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[350px]">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 350" 
                style={{ overflow: 'visible' }}
              >
                {/* Center flowing wave */}
                <motion.path
                  id="centerWave"
                  d="M50,175 C90,145 130,195 170,175 C210,155 250,205 290,175"
                  stroke="#6c94db"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("centerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Upper wave */}
                <motion.path
                  id="upperWave"
                  d="M30,120 C70,90 110,140 150,120 C190,100 230,150 270,130"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "upperWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("upperWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Lower wave */}
                <motion.path
                  id="lowerWave"
                  d="M70,230 C110,200 150,250 190,230 C230,210 270,260 310,230"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "lowerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveElement("lowerWave")}
                  onMouseLeave={() => setActiveElement(null)}
                />
                
                {/* Connecting vertical lines */}
                <motion.path
                  id="connectLine1"
                  d="M90,90 C100,120 80,150 100,175 C120,200 90,230 100,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine2"
                  d="M170,70 C180,100 160,130 170,175 C180,220 160,250 170,280"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="connectLine3"
                  d="M250,90 C260,120 240,150 250,175 C260,200 240,230 250,260"
                  stroke="#6c94db"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Accent elements */}
                <motion.circle
                  id="accent1"
                  cx="90"
                  cy="175"
                  r="8"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent2"
                  cx="170"
                  cy="175"
                  r="10"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.2}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  id="accent3"
                  cx="250"
                  cy="175"
                  r="6"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  custom={6.4}
                  initial="hidden"
                  animate={isVisible ? (activeElement === "centerWave" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Decorative abstract elements */}
                <motion.path
                  id="abstractShape1"
                  d="M50,300 C80,320 120,280 150,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  id="abstractShape2"
                  d="M200,300 C230,280 260,320 290,300"
                  stroke="#9B6EDC"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={7.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Floating circles */}
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={`float-circle-${i}`}
                    cx={70 + i * 40}
                    cy={80 + (i % 3) * 30}
                    r={3 + (i % 3)}
                    fill="#6c94db"
                    opacity={0.7}
                    custom={8 + i * 0.2}
                    initial="hidden"
                    animate="visible"
                    variants={floatingVariants}
                  />
                ))}
                
                {/* Animated pulsing accent */}
                <motion.circle
                  cx="170"
                  cy="175"
                  r="20"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </svg>
            </div>
          </div>
          
          {/* Right side: Form */}
          <div className="flex-1">
            <motion.div 
              className="bg-white bg-opacity-70 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-sm pointer-events-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    className="p-6 text-gray-700 rounded text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="mb-4">
                      <svg width="50" height="50" viewBox="0 0 50 50" className="mx-auto">
                        <motion.circle
                          cx="25"
                          cy="25"
                          r="20"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5 }}
                        />
                        <motion.path
                          d="M15,25 L22,32 L35,18"
                          fill="none"
                          stroke="#9DC9B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        />
                      </svg>
                    </div>
                    <p className="font-['Cormorant_Garamond'] italic text-lg">
                      Thank you for your message. We'll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                  >
                    {/* Hidden fields for Netlify Forms */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <div>
                      <label htmlFor="email" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-['Tenor_Sans'] text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-skyBlue bg-white bg-opacity-80 h-32"
                        placeholder="Bookings, collaborations, or just to say hello..."
                        required
                      />
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-coral to-purple text-white rounded-md font-['Tenor_Sans']"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      SEND MESSAGE
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
```

## File: src/components/landing/RetroWaveLanding.tsx

- Extension: .tsx
- Language: typescript
- Size: 10911 bytes
- Created: 2025-03-18 19:14:15
- Modified: 2025-03-18 19:14:15

### Code

```typescript
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SurrealistLandingProps {
  onAboutClick?: () => void;
  onListenClick?: () => void;
}

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors object outside the component to be accessible to PaintDrop
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

export const SurrealistLanding: React.FC<SurrealistLandingProps> = ({ 
  onAboutClick, 
  onListenClick 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair"
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <h1 className="font-['Marcellus'] text-6xl md:text-8xl tracking-tight mb-4 text-gray-900 leading-tight">
          LOST IN<br/>TROPEZ
        </h1>

        <motion.div 
          className="mt-12 flex space-x-8 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={onListenClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            LISTEN
          </motion.button>
          
          <motion.button
            onClick={onAboutClick}
            className="px-6 py-2 border border-gray-400 text-gray-600 text-lg font-light
                      hover:bg-gray-50 transition-colors"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            ABOUT
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};
```

## File: src/components/layout/Layout.tsx

- Extension: .tsx
- Language: typescript
- Size: 10960 bytes
- Created: 2025-03-18 19:23:00
- Modified: 2025-03-18 19:23:00

### Code

```typescript
import React, { ReactNode, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Point {
  angle: number;
  variance: number;
  wobbleSpeed: number;
  offset: number;
}

// Define the colors outside the component
const colors = {
  cream: '#F5E6D3',
  azure: '#48ABC9',
  coral: '#FF9671',
  sand: '#D4B483',
  lavender: '#9B6EDC',
  mint: '#9DC9B8'
};

class PaintDrop {
  x: number;
  y: number;
  size: number;
  maxSize: number;
  color: string;
  speedY: number;
  speedX: number;
  age: number;
  maxAge: number;
  rotation: number;
  rotationSpeed: number;
  points: Point[];
  wobble: number;
  time: number;

  constructor(x: number, y: number, isHover: boolean = false) {
    this.x = x;
    this.y = y;
    this.size = isHover ? 25 : Math.random() * 20 + 5;
    this.maxSize = this.size * (isHover ? 8 : 4);
    this.color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
    this.speedY = isHover ? (Math.random() * 2 - 1) : -Math.random() * 0.3;
    this.speedX = isHover ? (Math.random() * 2 - 1) : (Math.random() - 0.5) * 0.5;
    this.age = 0;
    this.maxAge = 200;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.02;
    this.points = this.generateOrganic();
    this.wobble = Math.random() * 0.1;
    this.time = Math.random() * 100;
  }

  generateOrganic(): Point[] {
    const points: Point[] = [];
    const numPoints = 12;
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        variance: 0.8 + Math.random() * 0.4,
        wobbleSpeed: Math.random() * 0.05,
        offset: Math.random() * Math.PI * 2
      });
    }
    return points;
  }

  update(): void {
    this.age++;
    this.time += 0.03;
    this.size = Math.min(this.size * 1.02, this.maxSize);
    this.x += this.speedX + Math.sin(this.time) * this.wobble;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    const alpha = Math.max(0, 1 - (this.age / this.maxAge));
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    ctx.beginPath();
    this.points.forEach((point, i) => {
      const currentVariance = point.variance + 
        Math.sin(this.time * point.wobbleSpeed + point.offset) * 0.2;
      const radius = this.size * currentVariance;
      const x = Math.cos(point.angle) * radius;
      const y = Math.sin(point.angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else {
        const prevPoint = this.points[(i - 1 + this.points.length) % this.points.length];
        const prevRadius = this.size * prevPoint.variance;
        const prevX = Math.cos(prevPoint.angle) * prevRadius;
        const prevY = Math.sin(prevPoint.angle) * prevRadius;
        
        const cpX = (x + prevX) / 2;
        const cpY = (y + prevY) / 2;
        ctx.quadraticCurveTo(cpX, cpY, x, y);
      }
    });
    ctx.closePath();

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 1.5);
    gradient.addColorStop(0, `${this.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(0.5, `${this.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
    gradient.addColorStop(1, `${this.color}00`);
    
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  }

  isDead(): boolean {
    return this.age >= this.maxAge;
  }
}

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let drops: PaintDrop[] = [];

    function animate() {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        drop.update();
        drop.draw(ctx);
      });

      drops = drops.filter(drop => !drop.isDead());

      if (Math.random() < 0.03) {
        drops.push(new PaintDrop(
          Math.random() * canvas.width,
          canvas.height + 20
        ));
      }

      requestAnimationFrame(animate);
    }

    animate();
    
    let isMouseDown = false;

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseLeave = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (Math.random() < 0.3 || isMouseDown) {
        drops.push(new PaintDrop(x, y, true));
        if (isMouseDown) {
          for (let i = 0; i < 2; i++) {
            drops.push(new PaintDrop(
              x + (Math.random() - 0.5) * 40,
              y + (Math.random() - 0.5) * 40,
              true
            ));
          }
        }
      }
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousemove', handleMouseMove);

    // For mobile, add touch events
    const handleTouchMove = (e: TouchEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      
      // Handle all touch points
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        drops.push(new PaintDrop(x, y, true));
      }
    };

    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Canvas texture background with overlay */}
      <div className="absolute inset-0" style={{
        backgroundColor: '#f7f6f2',
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.06) 0px,
            rgba(0, 0, 0, 0.06) 1px,
            transparent 1px,
            transparent 2px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          ),
          repeating-linear-gradient(
            0deg,
            rgba(243, 242, 238, 0.8) 0px,
            rgba(243, 242, 238, 0.8) 1px,
            transparent 1px,
            transparent 3px
          )
        `,
        backgroundSize: '4px 4px, 4px 4px, 6px 6px, 6px 6px',
        backgroundPosition: '0 0, 0 0, 1px 1px, 1px 1px'
      }} />

      {/* Animated waves */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute w-full opacity-5"
          style={{
            height: '1px',
            background: `linear-gradient(90deg, 
              transparent 0%, 
              #000 50%, 
              transparent 100%)`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [-2000, 2000],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            left: `${20 + i * 25}%`,
            top: '10%',
            background: i === 0 
              ? 'radial-gradient(circle at 30% 30%, #FF6B6B, #4ECDC4)'
              : i === 1
              ? 'radial-gradient(circle at 40% 40%, #FFE66D, #FF6B6B, #4ECDC4)'
              : 'radial-gradient(circle at 50% 50%, #A9E4EF, #81F5FF, #7A89FF)',
            opacity: 0.6,
            mixBlendMode: 'multiply'
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            scale: [1, 1.1, 1],
            rotate: [0, 180]
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Canvas - positioned on top but capturing pointer events */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-20 pointer-events-auto"
        style={{ touchAction: 'none' }}
      />
      
      {/* Import Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital@1&family=Italiana&family=Tenor+Sans&display=swap');
        `}
      </style>

      {/* Content - positioned above canvas visually but passes pointer events through except for buttons */}
      <div className="relative z-30 w-full h-full pointer-events-none">
        {/* Wrap children in a container that allows specific elements to receive events */}
        <div className="w-full h-full [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_input]:pointer-events-auto [&_textarea]:pointer-events-auto [&_label]:pointer-events-auto [&_div[role='button']]:pointer-events-auto [&_div[onClick]]:pointer-events-auto">
          {children}
        </div>
      </div>
    </div>
  )
}
```

## File: src/components/LatestRelease/LatestRelease.tsx

- Extension: .tsx
- Language: typescript
- Size: 5740 bytes
- Created: 2025-03-18 20:02:19
- Modified: 2025-03-18 20:02:19

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const LatestRelease = () => {
  // Latest release details - replace with actual data
  const release = {
    title: "Pieces EP",
    releaseDate: "2023",
    coverArt: "/images/full2552release.png", // Fixed path (removed "public/")
    description: "A 3-track journey through a sunny psychadellic carnival.",
    spotifyLink: "https://open.spotify.com/album/4D9KOJauJjpBoxBGJo27ge?si=9QZ3rTiCR9SeJh1745H6Mg",
    // appleMusicLink: "#",
    bandcampLink: "https://lost-in-tropez.bandcamp.com",
    tracklist: [
      "Pieces",
      "Au Revoir",
      "Pero te Dije"
    ]
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Latest Release</h4>
          <h2 className="text-4xl md:text-5xl font-['Marcellus'] text-gray-900">{release.title}</h2>
          <p className="mt-2 text-gray-600">{release.releaseDate}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album artwork - REDUCED SIZE */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 border-2 border-goldenYellow rounded-lg transform rotate-3"></div>
              
              {/* Album cover */}
              <motion.div 
                className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Release details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700">{release.description}</p>
            
            {/* Tracklist */}
            <div>
              <h3 className="text-lg font-['Tenor_Sans'] mb-3">Tracklist:</h3>
              <ol className="space-y-2">
                {release.tracklist.map((track, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center text-gray-700"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <span className="w-6 text-gray-400">{index + 1}.</span>
                    {track}
                  </motion.li>
                ))}
              </ol>
            </div>
            
            {/* Listen buttons */}
            <div className="pt-4 flex flex-wrap gap-3 pointer-events-auto">
              <motion.a 
                href={release.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-mint text-gray-800 rounded-md inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Spotify</span>
              </motion.a>
              
              {release.bandcampLink && (
                <motion.a 
                  href={release.bandcampLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-skyBlue text-gray-800 rounded-md inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Bandcamp</span>
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
```

## File: src/components/StreamingLinks/StreamingLinks.tsx

- Extension: .tsx
- Language: typescript
- Size: 15630 bytes
- Created: 2025-03-18 20:27:24
- Modified: 2025-03-18 20:27:24

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// Platform interface
interface Platform {
  name: string;
  url: string;
  mainColor: string;
  secondaryColor: string;
  accentColor: string;
  pathId: string;
  nodePosition: { x: number, y: number }
}

// Main component
const StreamingLinks = () => {
  const [activeStroke, setActiveStroke] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  
  // Define platforms with richer color schemes and path associations
  const platforms: Platform[] = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/096eAkqw7ujpqZSDcELHlE',
      mainColor: '#1DB954',
      secondaryColor: '#1ED760',
      accentColor: '#B3F0CA',
      pathId: 'face-outline',
      nodePosition: { x: 240, y: 200 }
    },
    {
      name: 'Soundcloud',
      url: 'https://soundcloud.com/lost-in-tropez',
      mainColor: '#FF7700',
      secondaryColor: '#FF8800',
      accentColor: '#FFD1A9',
      pathId: 'hair-line',
      nodePosition: { x: 95, y: 210 }
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UC8117gg7ZoJ9lXtXPW2xcxQ',
      mainColor: '#FF0000',
      secondaryColor: '#FF3D3D',
      accentColor: '#FFCFCF',
      pathId: 'shoulder-line',
      nodePosition: { x: 260, y: 420 }
    },
    {
      name: 'Bandcamp',
      url: 'https://lost-in-tropez.bandcamp.com',
      mainColor: '#629aa9',
      secondaryColor: '#4FA8BB',
      accentColor: '#C5E0E6',
      pathId: 'ear-detail',
      nodePosition: { x: 300, y: 180 }
    }
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      controls.start({ 
        x: x * 20, 
        y: y * 20,
        transition: { type: 'spring', stiffness: 100, damping: 30 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2.5, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.8, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 6px rgba(255, 255, 255, 0.7))",
      strokeWidth: 2.5,
      transition: { duration: 0.3 }
    }
  };
  
  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom) => ({ 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        delay: custom * 0.2 + 0.6
      }
    }),
    highlighted: {
      scale: 1.2,
      filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))",
      transition: { type: "spring", stiffness: 500, damping: 15 }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden" ref={containerRef}>
      {/* Background decorative elements - matching LatestRelease style */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-['Tenor_Sans']">Join Us</h4>

      {/* Floating blobs - matching LatestRelease style */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main content container */}
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Content container */}
        <div className="relative">
          {/* Illustration container */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-[500px] md:h-[600px]">
              {/* SVG illustration */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 500 600" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Face outline */}
                <motion.path
                  id="face-outline"
                  d="M170,130 C180,90 240,80 280,110 C320,140 340,190 335,240 C330,290 310,330 280,360 C250,390 210,395 180,380 C150,365 135,330 140,290 C145,250 160,170 170,130 Z"
                  stroke={platforms[0].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "face-outline" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("face-outline")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Hair lines */}
                <motion.path
                  id="hair-line"
                  d="M170,130 C160,110 140,100 110,105 C90,110 80,130 85,150 C90,170 100,190 90,220 C80,250 60,260 50,280 C30,320 40,340 60,350 C80,360 110,350 130,325"
                  stroke={platforms[1].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={1}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "hair-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("hair-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Shoulder line */}
                <motion.path
                  id="shoulder-line"
                  d="M140,400 C170,440 210,460 260,450 C310,440 350,410 370,380"
                  stroke={platforms[2].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "shoulder-line" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("shoulder-line")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Ear detail */}
                <motion.path
                  id="ear-detail"
                  d="M310,200 C320,190 325,180 320,170 C315,160 305,160 295,165 C285,170 280,180 285,190"
                  stroke={platforms[3].secondaryColor}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? (activeStroke === "ear-detail" ? "highlighted" : "visible") : "hidden"}
                  variants={lineVariants}
                  onMouseEnter={() => setActiveStroke("ear-detail")}
                  onMouseLeave={() => setActiveStroke(null)}
                  className="cursor-pointer"
                />
                
                {/* Additional detail lines */}
                <motion.path
                  d="M210,200 C220,195 230,195 240,200"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M265,195 C275,190 285,190 295,195"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={5}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M250,220 C255,235 255,250 250,265"
                  stroke="#8396b0"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  custom={6}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Lips - highlight with a vibrant color */}
                <motion.path
                  d="M220,290 C235,300 265,300 280,290"
                  stroke="#FF6B6B"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={7}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Small details */}
                <motion.path
                  d="M225,185 C225,180 223,177 220,177"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={8}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M280,183 C280,178 282,175 285,175"
                  stroke="#8396b0"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={9}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Platform nodes */}
                {platforms.map((platform, index) => {
                  const pathId = platform.pathId;
                  const position = platform.nodePosition;
                  
                  return (
                    <motion.g
                      key={platform.name}
                      custom={index + 4}
                      initial="hidden"
                      animate={isVisible ? 
                        (activeStroke === pathId ? "highlighted" : "visible") : "hidden"}
                      variants={nodeVariants}
                      className="cursor-pointer"
                      onClick={() => window.open(platform.url, '_blank')}
                    >
                      {/* Platform node background with glow effect */}
                      <defs>
                        <radialGradient id={`grad-${platform.name}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                          <stop offset="0%" stopColor={platform.accentColor} stopOpacity="0.8" />
                          <stop offset="100%" stopColor={platform.mainColor} stopOpacity="0.2" />
                        </radialGradient>
                      </defs>
                      
                      {/* Glowing background circle */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="28" 
                        fill={`url(#grad-${platform.name})`} 
                        opacity="0.7"
                      />
                      
                      {/* Platform node foreground */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="22" 
                        fill="white" 
                        className="drop-shadow-sm"
                      />
                      
                      {/* Platform node border */}
                      <circle 
                        cx={position.x} 
                        cy={position.y} 
                        r="20" 
                        fill="white" 
                        stroke={activeStroke === pathId ? platform.mainColor : platform.secondaryColor}
                        strokeWidth="1.5"
                      />
                      
                      {/* Platform name */}
                      <text 
                        x={position.x} 
                        y={position.y + 5}
                        textAnchor="middle" 
                        fontFamily="'Tenor Sans', sans-serif" 
                        fontSize="10" 
                        fill={activeStroke === pathId ? platform.mainColor : "#6c94db"}
                        className="uppercase"
                      >
                        {platform.name}
                      </text>
                      
                      {/* Ripple effect */}
                      <AnimatePresence>
                        {activeStroke === pathId && (
                          <motion.circle
                            cx={position.x}
                            cy={position.y}
                            r="20"
                            fill="none"
                            stroke={platform.secondaryColor}
                            strokeWidth="1.5"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.8, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.g>
                  );
                })}
                
                {/* Clothing accent */}
                <motion.path
                  d="M195,450 C200,470 210,500 230,520 C245,535 260,540 270,530"
                  stroke="#9B6EDC"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  custom={10}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingLinks;
```

## File: src/components/MusicPlayer/MusicPlayer.tsx

- Extension: .tsx
- Language: typescript
- Size: 22306 bytes
- Created: 2025-03-18 20:34:43
- Modified: 2025-03-18 20:34:43

### Code

```typescript
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  
  // Tracks using local audio files (place MP3s in your public folder)
  const tracks = [
    {
      title: "Lag",
      file: "/audio/lag_final.mp3", // Path relative to public folder
      duration: "3:45",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Pero Te Dije",
      file: "/audio/perotedije.mp3",
      duration: "3:25",
      coverArt: "/images/release_junak.png" // Optional
    },
    {
      title: "Junak",
      file: "/audio/junak.mp3",
      duration: "3:12",
      coverArt: "/images/release_junak.png" // Optional
    }
  ];

  // Initialize visibility for animation sequencing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Update progress bar during playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (!isDragging) { // Only update progress if not dragging
        const currentProgress = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('play', () => setIsPlaying(true));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('ended', handleNextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('play', () => setIsPlaying(true));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('ended', handleNextTrack);
    };
  }, [currentTrack, isDragging]);

  // Handle track change
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    // Load the new track
    audio.load();
    if (isPlaying) {
      const playPromise = audio.play();
      
      // Handle autoplay restrictions
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.log("Play prevented:", error);
      });
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrack(prev => (prev - 1 + tracks.length) % tracks.length);
  };

  const handleNextTrack = () => {
    setCurrentTrack(prev => (prev + 1) % tracks.length);
  };

  const changeTrack = (index: number) => {
    setCurrentTrack(index);
  };

  // Progress bar scrubbing functionality
  const calculateProgress = (clientX: number) => {
    const progressBar = progressBarRef.current;
    if (!progressBar) return 0;
    
    const rect = progressBar.getBoundingClientRect();
    const position = clientX - rect.left;
    const percentage = (position / rect.width) * 100;
    return Math.max(0, Math.min(100, percentage));
  };

  const updateAudioPosition = (percentage: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const time = (percentage / 100) * audio.duration;
    if (!isNaN(time)) {
      audio.currentTime = time;
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent) => {
    const newProgress = calculateProgress(e.clientX);
    setProgress(newProgress);
    updateAudioPosition(newProgress);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    let clientX;
    if ('clientX' in e) {
      clientX = e.clientX; // Mouse event
    } else {
      clientX = e.touches[0].clientX; // Touch event
    }
    
    const newProgress = calculateProgress(clientX);
    setProgress(newProgress);
  };

  const handleDragEnd = () => {
    if (isDragging) {
      updateAudioPosition(progress);
      setIsDragging(false);
    }
  };

  // Add mouse move and mouse up listeners to window for smooth dragging
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newProgress = calculateProgress(e.clientX);
        setProgress(newProgress);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    // Add touch event handlers for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length > 0) {
        const newProgress = calculateProgress(e.touches[0].clientX);
        setProgress(newProgress);
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        updateAudioPosition(progress);
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, progress]);

  // Visualizer animation variants
  const barVariants = {
    playing: (i: number) => ({
      height: [5, 15 + Math.random() * 20, 5],
      transition: {
        repeat: Infinity,
        duration: 0.8 + Math.random() * 0.5,
        delay: i * 0.1,
      },
    }),
    paused: {
      height: 5,
    },
  };

  // Animation variants for SVG paths
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom) => ({ 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { type: "spring", duration: 2, bounce: 0, delay: custom * 0.2 },
        opacity: { duration: 0.6, delay: custom * 0.2 }
      }
    }),
    highlighted: {
      filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
      strokeWidth: 3,
      transition: { duration: 0.3 }
    }
  };

  // Animation variants for record rotation
  const recordVariants = {
    paused: { 
      rotate: 0
    },
    playing: { 
      rotate: 360,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left side: Album art with decorative SVG art */}
          <div className="md:w-2/5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* SVG art container */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 300 300" 
                style={{ overflow: 'visible' }}
                className="absolute inset-0"
              >
                {/* Decorative circle frame */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="130"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="1"
                  custom={0}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.circle
                  cx="150"
                  cy="150"
                  r="140"
                  fill="none"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  custom={0.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Rotating record outer circle */}
                <motion.g
                  variants={recordVariants}
                  animate={isPlaying ? "playing" : "paused"}
                  style={{ originX: "150px", originY: "150px" }}
                >
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="120"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={0.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                  
                  {/* Record grooves */}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={`groove-${i}`}
                      cx="150"
                      cy="150"
                      r={110 - i * 12}
                      fill="none"
                      stroke="#6c94db"
                      strokeWidth="0.5"
                      strokeDasharray={Math.random() < 0.5 ? "3 1" : "1 2"}
                      custom={0.8 + i * 0.1}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={lineVariants}
                    />
                  ))}
                  
                  {/* Center hole */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="8"
                    fill="none"
                    stroke="#6c94db"
                    strokeWidth="1"
                    custom={1.5}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={lineVariants}
                  />
                </motion.g>
                
                {/* Decorative elements */}
                <motion.path
                  d="M30,150 C30,70 70,30 150,30"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M270,150 C270,230 230,270 150,270"
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  custom={2.2}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                {/* Album cover mask */}
                <clipPath id="albumCoverClip">
                  <circle cx="150" cy="150" r="110" />
                </clipPath>
              </svg>
              
              {/* Cover art inside */}
              {tracks[currentTrack].coverArt && (
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ clipPath: "circle(110px at center)" }}
                >
                  <motion.img 
                    src={tracks[currentTrack].coverArt} 
                    alt={`${tracks[currentTrack].title} cover`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    style={{ 
                      transform: isPlaying ? 'rotate(360deg)' : 'rotate(0deg)',
                      transition: isPlaying ? 'transform 3s linear infinite' : 'none'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Right side: Player controls */}
          <motion.div 
            className="md:w-3/5 bg-white bg-opacity-80 backdrop-blur-sm rounded-lg p-6 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-xl font-['Tenor_Sans'] text-gray-800 mb-4">Featured Tracks</h3>
            
            {/* Audio visualizer */}
            <div className="relative mb-6">
              {/* SVG elements over visualizer */}
              <svg 
                width="100%" 
                height="80" 
                className="absolute inset-0 pointer-events-none"
                style={{ overflow: 'visible' }}
              >
                {/* Decorative sound wave arcs */}
                <motion.path
                  d="M20,60 C60,20 120,20 160,60 C200,100 260,100 300,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
                
                <motion.path
                  d="M350,60 C390,20 450,20 490,60"
                  stroke="#6c94db"
                  strokeWidth="1"
                  fill="none"
                  strokeLinecap="round"
                  custom={3.3}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {/* Traditional bar visualizer */}
              <div className="flex items-end justify-center h-20 space-x-1 relative z-10">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={barVariants}
                    animate={isPlaying ? "playing" : "paused"}
                    className="w-1 bg-gradient-to-t from-coral to-skyBlue rounded-t"
                  />
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].title}
              </div>
              <div className="flex items-center space-x-4 pointer-events-auto">
                <button 
                  onClick={handlePrevTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 20L9 12L19 4V20Z" />
                    <line x1="5" y1="19" x2="5" y2="5" />
                  </svg>
                </button>
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-coral to-purple text-white"
                >
                  {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="6" y="4" width="4" height="16" fill="white" />
                      <rect x="14" y="4" width="4" height="16" fill="white" />
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="5,3 19,12 5,21" fill="white" />
                    </svg>
                  )}
                </button>
                <button 
                  onClick={handleNextTrack}
                  className="text-gray-600 hover:text-deepPink transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 4L15 12L5 20V4Z" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                  </svg>
                </button>
              </div>
              <div className="text-sm font-light text-gray-600">
                {tracks[currentTrack].duration}
              </div>
            </div>
            
            {/* Interactive Progress bar */}
            <div className="relative mb-8">
              {/* SVG decorative arrow */}
              <svg 
                width="100%" 
                height="20" 
                className="absolute -top-6 pointer-events-none"
              >
                <motion.path
                  d={`M${progress}%,15 L${progress + 1}%,5 L${progress + 2}%,15`}
                  stroke="#FF6B6B"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              
              <div 
                ref={progressBarRef}
                className="w-full h-4 bg-gray-200 rounded-full overflow-hidden pointer-events-auto cursor-pointer relative"
                onClick={handleProgressBarClick}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                style={{ touchAction: 'none' }} // Prevents scrolling while dragging on mobile
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-deepPink to-purple"
                  style={{ width: `${progress}%` }}
                />
                {/* Draggable handle indicator */}
                <div 
                  className={`absolute top-0 bottom-0 w-4 h-4 bg-white rounded-full shadow-md transform -translate-y-0 -translate-x-1/2 pointer-events-none ${
                    isDragging ? 'scale-110' : ''
                  }`}
                  style={{ 
                    left: `${progress}%`,
                    display: isDragging || (progressBarRef.current && progressBarRef.current.matches(':hover')) ? 'block' : 'none',
                    transition: 'transform 0.1s ease'
                  }}
                />
              </div>
            </div>
            
            {/* Track list with decorative elements */}
            <div className="space-y-2 relative">
              {/* Decorative line */}
              <svg 
                width="100%" 
                height="100%" 
                className="absolute top-0 left-0 pointer-events-none z-0"
                style={{ overflow: 'visible' }}
              >
                <motion.line
                  x1="0"
                  y1="10"
                  x2="100%"
                  y2="10"
                  stroke="#6c94db"
                  strokeWidth="0.5"
                  strokeDasharray="2 4"
                  custom={4}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={lineVariants}
                />
              </svg>
              
              {tracks.map((track, i) => (
                <motion.div 
                  key={i}
                  onClick={() => changeTrack(i)}
                  className={`p-3 cursor-pointer flex justify-between items-center pointer-events-auto ${
                    currentTrack === i ? "bg-cream bg-opacity-50" : "hover:bg-cream hover:bg-opacity-30"
                  } transition-colors rounded-md relative z-10`}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center">
                    {/* Track indicator */}
                    {currentTrack === i && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-purple rounded-l-md"
                        layoutId="trackIndicator"
                      />
                    )}
                    <div className="w-6 text-gray-500 flex justify-center">{i + 1}</div>
                    <div className="ml-2">{track.title}</div>
                  </div>
                  <div className="text-sm text-gray-500">{track.duration}</div>
                </motion.div>
              ))}
            </div>
            
            {/* HTML5 Audio Element */}
            <audio ref={audioRef}>
              <source src={tracks[currentTrack].file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
```

## File: src/components/ArtistSection/ArtistSection.tsx

- Extension: .tsx
- Language: typescript
- Size: 4729 bytes
- Created: 2025-03-18 20:30:59
- Modified: 2025-03-18 20:30:59

### Code

```typescript
import React from 'react';
import { motion } from 'framer-motion';

const ArtistSection = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background decorative elements - matching other components */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-skyBlue opacity-10"
        animate={{
          x: [0, 10, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple opacity-10"
        animate={{
          x: [0, -15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="w-full max-w-4xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Italiana'] mb-6 text-gray-900"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              LOST IN TROPEZ
            </motion.h2>
            
            <motion.div
              className="space-y-4 text-gray-700 font-['Cormorant_Garamond'] text-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Electronic music duo crafting immersive sonic landscapes inspired by the Mediterranean coastline and surrealist art.  
              </p>
              <p>
                Lost In Tropez blends organic textures with pulsing rhythms, creating a distinctive sound that evokes dreamlike escapes and neon-lit nights.  
              </p>
              <p>
                Influenced by Polo & Pan, ODESZA, Louis The Child, Lane 8, and Nora En Pure, their music fuses French house, ambient tones, and cinematic nostalgia.  
              </p>
              <p>
                Based in Southern California with releases dating back to 2020, Lost In Tropez continues to shape sonic journeys with new music on the way.  
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Optional contact button removed as in original code */}
            </motion.div>
          </div>
          
          <motion.div 
            className="order-1 md:order-2 relative h-64 md:h-96"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Decorative layered effect */}
            <div className="absolute inset-4 bg-gradient-to-br from-retroBlue to-retroOrange opacity-70 rounded"></div>
            <div className="absolute inset-0 border-2 border-sand rounded"></div>
            <div className="absolute inset-8 border border-white rounded"></div>
            
            {/* Actual artist logo image */}
            <div className="absolute inset-0 rounded overflow-hidden flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Lost in Tropez Logo" 
                className="object-contain w-full h-full p-4"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple opacity-30 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArtistSection;
```


# Module Federation Setup

This Next.js application has been configured with Module Federation to enable micro-frontend architecture.

## Configuration

### Files Modified/Created:

- `next.config.ts` - Added webpack configuration with Module Federation
- `package.json` - Removed turbopack flag, added webpack dependency
- `src/components/Button.tsx` - Sample component exposed via Module Federation
- `src/components/index.ts` - Component exports
- `webpack.config.js` - External webpack configuration (optional)

## How to Use

### 1. Running the Application

```bash
npm run dev
```

### 2. Exposed Components

The following components are exposed and can be consumed by other applications:

- `./Button` - A reusable Button component
- `./components` - All components from the components directory

### 3. Adding Remote Applications

To connect to remote applications, uncomment and modify the remotes section in `next.config.ts`:

```typescript
remotes: {
  remote: 'remote@http://localhost:3001/remoteEntry.js',
},
```

### 4. Exposing More Components

To expose additional components, add them to the exposes section:

```typescript
exposes: {
  './Button': './src/components/Button',
  './components': './src/components/index',
  './NewComponent': './src/components/NewComponent',
},
```

### 5. Consuming Remote Components

To consume components from remote applications:

```typescript
import { Button } from "remote/Button";
```

## Shared Dependencies

React and React-DOM are configured as shared dependencies to ensure singleton instances across all federated modules.

## Notes

- Module Federation only works on the client-side
- The application now uses webpack instead of turbopack
- All exposed components must be compatible with the shared React instance

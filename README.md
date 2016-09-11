# Sass Themes

A sass folder structure for generating separate theme CSS files.

## Single file

Generates a single stylesheet containing all styles and themed variations. Relies on theme context classes on parent containers to apply overriding styles. Best for when an app's theme changes frequently.

- Theme switching for subsections of an app.

**main.css**
```
h1 {
  color: black;
}

.theme-ocean h1 {
  color: blue;
}
```

## Multiple files

Generates a standalone stylesheet for each theme. Best for when an app's theme rarely changes. For example:

- Generating themes for white label apps.
- Theme switching as a user preference.

**main.css**
```
h1 {
  color: black;
}
```

**ocean.css**
```
h1 {
  color: blue;
}
```

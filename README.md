# My First Server Project

A small Express server that serves a welcome message and a sample collection of
songs.

## Requirements

- Node.js 18 or later
- npm

## Run the server

Install dependencies, then start the server:

```sh
npm install
node index.js
```

The server listens on port `3000`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | Returns a welcome message. |
| `GET` | `/about` | Returns the about-page message. |
| `GET` | `/songs` | Returns the full song collection as JSON. |
| `GET` | `/songs/:song` | Returns a song matching its title,
case-insensitively. |

For example, `GET /songs/Pyramids` returns the matching song as JSON. A title
that does not match returns `Song not found`.

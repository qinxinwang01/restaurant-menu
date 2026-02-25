# Menu Search + Category Filter – Build Plan (React)

## Goal
Add a search input and category filter to the restaurant menu so users can quickly find items by keyword (name/description) and category. Filters should work together, plus a clear button and small UX improvements.

---

## Step 1 — Create/confirm menu data shape
Create or verify a menu items array in React with consistent fields:
`id`, `name`, `description`, `category`, `price` (optional `image`).

Test: Render the list of items on the page to confirm data displays correctly.

---

## Step 2 — Add search input UI + state (no filtering yet)
Add a search input above the menu and store its value in `searchQuery` state.

Test: Type in the input and confirm the value updates (temporarily display the query on screen).

---

## Step 3 — Add category filter UI + state (no filtering yet)
Create category options: `All` + unique categories from the menu data.
Add a dropdown or buttons and store selection in `selectedCategory` state.

Test: Change category and confirm the selected value updates (display it on screen).

---

## Step 4 — Implement search filtering
Create a derived array that filters items by `searchQuery` matching `name` or `description` (case-insensitive).

Test: Search a keyword (e.g., “salmon”) and confirm only matching items show.

---

## Step 5 — Implement category filtering
Filter items by `selectedCategory` (if `All`, show everything).

Test: Select “Drinks” (or another category) and confirm only that category shows.

---

## Step 6 — Combine search + category filters
Apply both filters together (intersection):
items must match category AND search query.

Test: Select a category + search a keyword and confirm results are correct.

---

## Step 7 — Add Clear Filters button + empty state
Add a “Clear” button that resets `searchQuery` and `selectedCategory` to defaults.
Add an empty state message when results are zero.

Test: Search nonsense text → empty state appears; click Clear → all items return.

---

## Step 8 — Review and optimize (UX + edge cases)
Run self-review: handle trimming spaces, empty query, and category casing.
Optional: debounce search input for smoother typing.

Test: Try leading/trailing spaces and different capitalization; confirm behavior is stable.
Claude initially proposed a vanilla HTML/JS plan, but my project is React so I adapted the steps to match the component/state workflow
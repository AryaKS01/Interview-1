# React Nested Sidebar Application

A responsive sidebar implementation with nested menus and mobile-friendly burger menu toggle.


## Features

*   📱 Responsive design (mobile/desktop)
*   🍔 Burger menu toggle for mobile
*   🐂 Infinite nesting capability
*   🎨 Clean and minimal UI
*   🛠️ Smooth animations/transitions
*   📜 Automatic scroll for overflow
*   🌳 Recursive component structure

## Technologies Used

*   ⚛️ React 19
*   🚀 Vite
*   💅 CSS3 (Flexbox)
*   🛠️ Vercel (Deployment)

## Installation

1.  Clone repository:

    git clone https://github.com/your-username/react-nested-sidebar.git
    

2.  Install dependencies:

    npm install
    

3.  Run development server:

    npm run dev
    

## Usage

*   Click on menu items with ▶ to expand nested items
*   Toggle burger menu (mobile view)
*   Automatically collapses on mobile screens (<768px)
*   Deeply nested items show ellipsis (...) for overflow
*   Smooth transitions for sidebar open/close

## Data Structure

Sample mock data format in `Sidebar.jsx`:

    {
      sidebar: [
        {
          type: "item",
          title: "Menu Title",
          childs: [
            {
              type: "item",
              title: "Nested Item",
              childs: [] // Add more children here
            }
          ]
        }
      ]
    }
    

## Deployment

1.  Create `vercel.json` in root:

    {
      "builds": [
        {
          "src": "package.json",
          "use": "@vercel/static-build"
        }
      ],
      "rewrites": [
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    }
    

2.  Push to GitHub/GitLab/Bitbucket
    
3.  Import repository to Vercel:
    
    *   Automatic React detection
    *   Keep default build settings
    *   Deploy!

## Folder Structure

    ├── src/
    │   ├── components/
    │   │   ├── Sidebar.jsx
    │   │   └── BurgerMenu.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── vercel.json
    └── package.json
    

## Customization

1.  Modify `mockData` in `Sidebar.jsx`
2.  Update colors in `index.css`
3.  Adjust breakpoints in media queries
4.  Change sidebar width in CSS variables

## Contributing

1.  Fork the project
2.  Create your feature branch
3.  Commit changes
4.  Push to the branch
5.  Open a PR

## License

MIT © \[Your Name\]

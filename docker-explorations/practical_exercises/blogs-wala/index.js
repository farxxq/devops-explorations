const express = require('express');
const app = express();

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Simple in-memory data store for blog posts
const blogs = [
  { title: 'Welcome to the Blog!', content: 'This is your very first post. Start adding more below!' }
];

// GET route to display the blog posts and the "Add Post" form
app.get('/', (req, res) => {
  // Map the blog array to HTML strings
  const blogListHtml = blogs.map(blog => `
    <div style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 8px; background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <h3 style="margin-top: 0; color: #333;">${blog.title}</h3>
      <p style="color: #666; white-space: pre-wrap;">${blog.content}</p>
    </div>
  `).join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Express Blog App</title>
      <style>
        body { font-family: -apple-system, system-ui, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 20px; background-color: #f4f7f6; line-height: 1.6; }
        section { background: #fff; padding: 25px; border-radius: 8px; margin-bottom: 30px; border: 1px solid #eee; }
        input, textarea { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; font-size: 16px; }
        button { background-color: #007bff; color: white; padding: 12px 24px; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; font-weight: bold; }
        button:hover { background-color: #0056b3; }
        hr { border: 0; border-top: 1px solid #ddd; margin: 40px 0; }
      </style>
    </head>
    <body>
      <h1>📝 Simple Express Blog</h1>

      <section>
        <h2>Add a New Post</h2>
        <form action="/add-post" method="POST">
          <input type="text" name="title" placeholder="Post Title" required>
          <textarea name="content" rows="5" placeholder="Write your content here..." required></textarea>
          <button type="submit">Publish Post</button>
        </form>
      </section>

      <h2>Recent Posts</h2>
      ${blogListHtml || '<p>The blog is currently empty.</p>'}
    </body>
    </html>
  `;
  res.send(html);
});

// POST route to handle form submission and add a new blog entry
app.post('/add-post', (req, res) => {
  const { title, content } = req.body;
  if (title && content) {
    blogs.unshift({ title, content }); // Add new posts to the top
  }
  res.redirect('/');
});

const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:\${PORT}`);
  });
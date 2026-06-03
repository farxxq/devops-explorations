## Basic Commands

### 1. Initialize Git Repository

```bash
git init
```

> **NOTE:** Initializes a new Git repository in the current folder.

---

### 2. Add Remote Repository (HTTPS)

```bash
git remote add origin <url>
```

> **NOTE:** `origin` is the default remote repo name; you can use any name.

---

### 3. Add Files

Add all files:

```bash
git add .
```

Add a specific file:

```bash
git add <filename>
```

> **NOTE:** Stages files for the next commit.

---

### 4. Commit Files

```bash
git commit -m "<commit-msg>"
```

> **NOTE:** Creates a commit with a descriptive message.

---

### 5. Push Code to Remote Repository

```bash
git push origin <branch-name>
```

> **NOTE:** Pushes your commits to the specified branch on the remote repository.
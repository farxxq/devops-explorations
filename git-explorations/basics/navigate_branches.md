# Navigate Between Branches

## 1. List Branches

### Local branches

```bash
git branch
```

> **NOTE:** Lists branches in the local repository.

### Remote branches

```bash
git branch -r
```

> **NOTE:** Lists branches in the remote repository.

### All branches

```bash
git branch -a
```

> **NOTE:** Lists all branches in both local and remote repositories.

---

## 2. Switch Branches

### Checkout an existing branch

```bash
git checkout <branch-name>
```

> **NOTE:** Checks out the specified branch.

### Create and checkout a new branch

```bash
git checkout -b <branch-name>
```

> **NOTE:** Creates a new branch and immediately checks it out.

### Switch to an existing branch

```bash
git switch <branch-name>
```

> **NOTE:** Switches to the specified branch (modern alternative to `checkout`).

### Create and switch to a new branch

```bash
git switch -c <branch-name>
```

> **NOTE:** Creates a new branch and immediately switches to it.
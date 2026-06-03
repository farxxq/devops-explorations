# Merge Branches

## 1. Fast forward merge:
Navigate to the branch (e.g.: `main`) you want to merge the `<feature-branch>` into

```bash
git merge <branch-name> -m "<commit-msg>"
```
> **NOTE**: Branches merged directly as there were no changes in the `main`branch

---

## 2. Non fast forward merge:
Navigate to the branch (e.g.: `main-branch`) you want to merge the `feature-branch` into

```bash
git merge <branch-name>
```
Commit msg needs to be set and if there are no conflicts it will merge with the `"<commit-msg>"`
> **NOTE**: Branches merged when there has been changes in the ###main-branch


## 3. Merge conflicts:
Navigate to the branch (e.g.: `"main-branch"`) you want to merge the ###feature-branch into

```bash
git merge <branch-name>
```

> Conflicts, if same line in the same file changed, Manual approval required
``` bash
git status
```

> Files conflicted listed, Open them keep required code, Remove unwanted and stage them again
``` bash
git add <filename>
```

> Commit msg needs to be set or default one ###("Merge branch `<feature-branch>`") will be set 
> **NOTE**: Branches merged when there has been changes in the same line in the same file `main` branch

---

> **NOTE**: Adding for the practical purpose of merge conflict.

---
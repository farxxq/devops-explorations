# Merge Branches

## 1. Fast forward merge

> Navigate to the branch (e.g.: ###<main-branch>) you want to merge the ###<feature-branch> into

```bash
git merge <branch-name> -m "<commit-msg>"
```
> **NOTE**: Branches merged directly as there were no changes in the ###<main-branch>

---

## 2. Non fast forward merge

> Navigate to the branch (e.g.: ###<main-branch>) you want to merge the ###<feature-branch> into

```bash
git merge <branch-name>
```
> **NOTE**: Branches merged when there has been changes in the ###<main-branch>
> Commit msg needs to be set and if there are no conflicts it will merge with the ###commit msg


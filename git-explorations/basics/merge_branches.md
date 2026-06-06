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

# Rebase Branch

> **NOTE**: Rebase like merge but overwrites the commits to have a linear history.

## 1. Command:

- switch to branch needed merge (eg: `main`)
```bash
git fetch <branch-name>
git rebase <branch-name>
```
- if conflicts occur resolve it then run command
```bash
git add .
```
> or 

```bash
git add <filename> 
```
> then

```bash
git rebase --continue
```

- Will replay the commits in `feature-branch` and if conflicts occur perform the same steps
- no conflicts, commit message will show up change or use the default the commit msg

> Push the changes to the remote repo

```bash
git push origin <branch-name> --force-with-lease
```
**NOTE**: 
-`--force-with-lease` mandatory, As Git maintains the commits done to the `feature-branch` (e.g.: `D`), rebase copies these commit to `D'`, as the history is being rewritten had to force push.
- If the remote branch still points to the commit you expect (the one you had before rebasing), Git allows the force push.
- If someone else has pushed new commits, Git refuses to overwrite, preventing you from accidentally deleting their work. 

## 3. Abort rebase

```bash
git rebase --abort
```
- will go back to the previous commit of the `current` branch (e.g.: `main`)

### 4. Interactive Rebase
- Messy commits like
```
commit1# Typo fixed
commit2# Changed spelling
commit3# Added a title tag
commit4# Feature added
```
can be merged to one while rebasing using the following command

```bash
git rebase -i HEAD~<no-of-commit>
```

- Git opens:
```
pick commit#1
pick commit#2
pick commit#3
pick commit#4
```
- change it to
```
pick commit#1
squash commit#2
pick commit#3
squash commit#4
```
- Result
```
Feature Commit 1
Feature Commit 2
```
- a cleaner approach to get rid of `messy commits`
--- 


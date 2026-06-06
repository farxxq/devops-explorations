# Pull Requests(PR)/ Merge Requests(MR)


## Theoritical explanation (github/gitlab ui based)

### 1. Navigate to the remote repo (github/gitlab)

- Go to the repository page.

- Click on [Compare & Pull Request] that appear on the screen of `main`

- Set Base branch: `main` & Compare branch: `<feature-branch>`
```bash
Take code from <feature-branch>
↓
Merge into main
```
> 

- Add a title and description

- Click pull request

- If no merge conflicts, review and click merge request or rebase merge request (for linear history maintainance)

- If no merge conflicts, review and click merge request or rebase merge request (for linear history maintainance).

- If merge conflicts, solve it then

```bash
git add <file-name>
```
```bash
git commit -m "<commit-msg>"
```

- Automatically reflected in the pull request, review and `merge request` or `rebase merge request` (for linear history maintanance).

---

Actual flow in understandable lang:

```
🔄 Full flow samjho:
1. PR bana (feature → main)
2. Conflict aaya ❌
3. Tum feature branch pe gaye
4. main ke changes merge/rebase kiye
5. conflicts resolve kiye
6. commit kiya ✅
7. push kiya remote pe 🚀
👉 Bas iss push ke baad:

✔️ GitHub automatically check karega
✔️ Agar conflicts solve ho gaye →
👉 “This branch has no conflicts” ✅
```
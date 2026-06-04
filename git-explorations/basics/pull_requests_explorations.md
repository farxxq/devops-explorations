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
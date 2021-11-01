let array = ["git add.", "git commit -m `commit title`", "git init",
    "git push origin `branch name`", "git log", "git pull", "git pull --rebase origin `branch name`", "git checkout -b newbranch", " git remote set-url origin `path`", "git clone `path`"
];
for (let i = 0; i < array.length; i++) {
    alert(array[i]);
}
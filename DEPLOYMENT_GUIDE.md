# 🚀 GitHub Pages Deployment Guide

## Quick Deploy Commands

After creating your GitHub repository, run these commands:

### 1. Connect to Your GitHub Repository
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# For example: git remote add origin https://github.com/hrishikeshbodke/portfolio.git
```

### 2. Push Your Code
```bash
git branch -M main
git push -u origin main
```

### 3. Build for Production
```bash
ng build --configuration production --base-href /portfolio/
```
**Note:** Replace `/portfolio/` with `/YOUR_REPO_NAME/` if you named it differently.

### 4. Deploy to GitHub Pages
```bash
npx angular-cli-ghpages --dir=dist/protfolioV1.0/browser
```

### 5. Enable GitHub Pages
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**
4. Click **Save**

### Your site will be live at:
```
https://YOUR_USERNAME.github.io/portfolio/
```

---

## 🔄 Update Deployment (When You Make Changes)

```bash
# 1. Stage changes
git add .

# 2. Commit
git commit -m "Update portfolio"

# 3. Push to GitHub
git push origin main

# 4. Rebuild and redeploy
ng build --configuration production --base-href /hrishikesh-portfolio/
npx angular-cli-ghpages --dir=dist/protfolioV1.0/browser
```

---

## ⚠️ Important Notes

1. **Repository must be PUBLIC** for free GitHub Pages
2. **Base href must match your repo name**: `/your-repo-name/`
3. First deployment takes 2-5 minutes to go live
4. Changes may take 1-2 minutes to appear after updates

---

## 🐛 Troubleshooting

### Issue: 404 Error
- Check base-href matches your repository name
- Ensure gh-pages branch exists
- Wait 2-5 minutes for first deployment

### Issue: "Permission denied"
```bash
# Use HTTPS authentication or set up SSH keys
git remote set-url origin https://github.com/YOUR_USERNAME/portfolio.git
```

### Issue: Changes not appearing
- Clear browser cache (Ctrl+Shift+R)
- Wait 1-2 minutes for GitHub to rebuild

---

## ✅ Verification Checklist

- [ ] GitHub repository created and public
- [ ] Code pushed to main branch
- [ ] Production build completed successfully
- [ ] Deployed to gh-pages branch
- [ ] GitHub Pages enabled in settings
- [ ] Site accessible at github.io URL

---

**Your portfolio will be live and accessible worldwide! 🌐**

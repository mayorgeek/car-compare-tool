# Deployment Guide

This guide explains how to deploy your Car Comparison Tool to production.

## Quick Deploy with Replit

This project is ready to deploy on Replit with one click:

1. Click the **Publish** button in Replit
2. Your tool will be live at `your-project-name.replit.app`
3. Share the URL with your customers!

## Before Deploying

Make sure you've customized:

### 1. Update Configuration
Edit `client/src/config/links.ts`:
```typescript
chatLink: "https://wa.me/YOUR_PHONE_NUMBER"
buyLinkTemplate: "https://yourdealership.com/buy?car={carId}"
```

### 2. Add Your Car Inventory
Edit `client/src/data/cars.ts` with your actual cars and prices.

### 3. Replace Car Images
- Add your car photos to `client/public/cars/`
- Update imports in `client/src/data/cars.ts`

## Alternative Deployment Options

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Copy the `dist` folder to your web server
3. Configure your web server to serve the files

## Environment Variables

This project doesn't require any environment variables or secrets. All configuration is done through the files mentioned above.

## Custom Domain

To use your own domain:

**On Replit:**
1. Go to your repl settings
2. Add your custom domain
3. Update DNS records as instructed

**On Vercel/Netlify:**
1. Follow their custom domain setup guides
2. Update DNS records to point to their servers

## Post-Deployment Checklist

- [ ] Test all car selections
- [ ] Verify buy buttons open correct links
- [ ] Test chat button opens WhatsApp/Telegram/Messenger
- [ ] Check mobile responsiveness
- [ ] Verify all car images load
- [ ] Test on different browsers

## Troubleshooting

### Images Not Loading
- Ensure images are in `client/public/cars/` or using valid URLs
- Check file paths in `client/src/data/cars.ts`
- Verify image formats (JPG, PNG, WebP supported)

### Buy Links Not Working
- Check `buyLinkTemplate` in `client/src/config/links.ts`
- Ensure `{carId}` placeholder is present
- Test links in browser console (they're logged when clicked)

### Chat Button Not Working
- Verify `chatLink` format matches your platform
- WhatsApp: `https://wa.me/1234567890`
- Telegram: `https://t.me/username`
- Test the link directly in a browser first

## Performance Optimization

The tool is already optimized for production:
- ✅ Images are lazy-loaded
- ✅ Minimal JavaScript bundle
- ✅ TailwindCSS purges unused styles
- ✅ No database queries (all data is static)

## Security

Since this tool uses static mock data:
- ✅ No backend security concerns
- ✅ No database to secure
- ✅ No user data stored
- ✅ Safe to deploy as-is

## Maintenance

To update car inventory:
1. Edit `client/src/data/cars.ts`
2. Rebuild the project
3. Redeploy

No database migrations or complex updates needed!

## Support

For deployment issues, check:
1. Replit deployment logs
2. Browser console for errors
3. Network tab for failed requests

---

**Ready to go live? Just click Publish!**

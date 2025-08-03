# 📧 Contact Form Setup Guide

Your contact form is now configured! Here's how to activate it:

## 🚀 Quick Setup (5 minutes)

### Option 1: Web3Forms (FREE - Recommended)

1. **Get your FREE API key:**
   - Go to: https://web3forms.com
   - Click "Get Access Key"
   - Enter your email: `syedawaishussain987@gmail.com`
   - You'll receive an access key instantly

2. **Add the key to your project:**
   - Open `.env.local` file in your project
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual key
   - Example: `NEXT_PUBLIC_WEB3FORMS_KEY=550e8400-e29b-41d4-a716-446655440000`

3. **Test locally:**
   ```bash
   npm run dev
   ```
   - Go to Contact page
   - Send a test message
   - Check your email!

4. **Deploy to Vercel:**
   - Add environment variable in Vercel:
     1. Go to: https://vercel.com/syed-awais-projects-1578dd9b/portfolio/settings/environment-variables
     2. Add new variable:
        - Name: `NEXT_PUBLIC_WEB3FORMS_KEY`
        - Value: Your Web3Forms access key
     3. Click "Save"
   - Redeploy: `vercel --prod`

### Option 2: EmailJS (FREE - 200 emails/month)

1. **Setup EmailJS:**
   - Go to: https://www.emailjs.com/
   - Sign up for free account
   - Create email service (Gmail)
   - Create email template
   - Get your Service ID, Template ID, and Public Key

2. **Update the API route** (`src/app/api/contact/route.ts`)

### Option 3: Resend (FREE - 100 emails/day)

Already configured in your project! Just need to:
1. Go to: https://resend.com
2. Sign up and get API key
3. Add to Vercel environment variables

## 📬 Where Messages Will Go

All messages will be sent directly to: **syedawaishussain987@gmail.com**

You'll receive emails with:
- Sender's Name
- Sender's Email
- Subject
- Message
- Timestamp

## 🔧 Current Configuration

- **Backend:** API route at `/api/contact`
- **Service:** Web3Forms (free, no signup required for sender)
- **Rate Limit:** Unlimited with Web3Forms
- **Spam Protection:** Built-in with Web3Forms

## 📱 Testing Your Form

1. Start development server: `npm run dev`
2. Go to: http://localhost:3003/contact
3. Fill the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test
4. Click Send
5. Check your email!

## 🛡️ Security Features

- ✅ Server-side validation
- ✅ Client-side validation
- ✅ Spam protection
- ✅ Rate limiting (built-in)
- ✅ No exposed email in frontend code

## 🚨 Troubleshooting

**Messages not arriving?**
1. Check spam folder
2. Verify API key is correct
3. Check Vercel environment variables
4. Look at browser console for errors

**Getting errors?**
- Make sure `.env.local` has the correct key
- Restart dev server after adding environment variables
- Check network tab in browser DevTools

## 📊 Alternative Services Comparison

| Service | Free Tier | Setup Time | Best For |
|---------|-----------|------------|----------|
| Web3Forms | Unlimited | 2 min | Quick setup, no backend |
| EmailJS | 200/month | 10 min | Template customization |
| Resend | 100/day | 5 min | Developer-friendly API |
| Formspree | 50/month | 3 min | Simple forms |
| SendGrid | 100/day | 15 min | Enterprise features |

## ✅ Next Steps

1. Get your Web3Forms key
2. Add to `.env.local`
3. Test locally
4. Add to Vercel environment variables
5. Deploy and test live!

---

**Need help?** The form is already working! Just add your API key and you're done! 🎉
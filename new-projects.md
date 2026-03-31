1st:# Shopify Subscription App

A full-featured Shopify subscription management app built with Remix, Express, Prisma, and Polaris. Supports Subscribe & Save plans, volume pricing tiers, subscription contract management, customer self-service portal, in-app billing, and analytics.

---

## Features

### Subscribe & Save
- Create and manage selling plan groups with multiple frequency tiers
- Assign/remove products to plan groups
- Activate/deactivate plan groups
- Per-plan discount configuration (percentage or fixed amount)

### Volume Pricing
- Tier-based pricing per product (quantity ranges with custom prices)
- Multi-product selection when configuring tiers
- Sync/unsync pricing tiers to Shopify metafields
- Activate/deactivate discount function via Shopify Functions
- Automatic discount applied at checkout (Wasm Function)

### Subscription Contracts
- View and manage all active subscription contracts
- Pause, activate, cancel, skip next delivery
- Change billing frequency and quantity
- Swap products, retry failed billing
- Billing history tracking

### Customer Portal
- Self-service subscription management (Customer Account UI Extension)
- Pause/resume, cancel with retention offers
- Change frequency, update quantity
- Add, remove, and swap line items
- Skip/pause limits enforcement
- Cancel age restrictions

### Portal Configuration
- Admin controls for customer self-service permissions
- Cancellation flow with retention offers and exit surveys
- Skip/pause limits and auto-resume settings
- Custom label overrides for portal UI

### Widget Settings
- Storefront subscription widget customization (Liquid theme extension)
- Volume pricing display table configuration

### Analytics — Subscriptions
- Subscription metrics dashboard (MRR, active count, churn rate)
- Top products by subscription count
- Recent activity feed

### Analytics — Volume Pricing
- Config KPIs: total configs, sync rate, avg tiers/product, deepest discount
- Config activity timeline (creations and updates over selected date range)
- Tier range distribution breakdown
- Configured products table with sync status
- Order attribution: orders with discount, units discounted, total discount given, avg discount %
- Revenue impact chart (full price vs discounted price over time)
- Tier adoption breakdown by quantity band
- Top products by discount amount
- Recent discounted orders table

### Customers
- Customer list with search and filtering
- View customer profile, contracts, and order history

### Products
- Product browser with metafield and selling plan status

### Dunning Management
- Failed payment recovery configuration
- Retry scheduling and notification settings

### In-App Billing
- Tiered plan management (Free / Basic / Pro)
- Shopify Billing API integration with plan confirmation flow
- Plan-gated features with upgrade prompts
- Trial period support
- Webhook-driven charge status sync (`app_subscriptions/update`)




2nd :https://aurorawellnesshealth.org/
3rd:https://xero-consultancy-4a6a.vercel.app/
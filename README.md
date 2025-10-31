# Digital ID Performance Dashboard

A GOV.UK style performance dashboard for monitoring Digital Identity service metrics, built with the GOV.UK Prototype Kit.

## Features

The dashboard displays key performance indicators across three main categories:

### 1. Technical Performance
- **System availability**: 99.9% uptime monitoring
- **Response time**: 95th percentile and median metrics
- **Authentication success rate**: Login completion tracking
- **Incident response time**: Mean time to detect/resolve

### 2. Adoption & Reach
- **Registered users**: 2.4M users tracked
- **Active users**: Monthly active user (MAU) metrics
- **Service coverage**: Government service integration tracking
- **Demographic inclusion**: Age, region, and income distribution

### 3. Economic & Efficiency Impact
- **Cost per verified user**: £2.85 per verification
- **Transaction volume**: 4.2M monthly authentications
- **Fraud loss avoided**: £8.4M estimated savings
- **Return on investment**: 3.2x ROI calculation

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
├── app/
│   ├── assets/
│   │   ├── javascripts/   # JavaScript files
│   │   │   └── application.js
│   │   └── sass/          # Custom styles
│   │       └── application.scss
│   ├── views/             # HTML templates (Nunjucks)
│   │   └── index.html     # Main dashboard page
│   └── routes.js          # Application routes
├── package.json
└── govuk-prototype-kit.config.json
```

## Design Patterns

This dashboard follows GOV.UK Design System patterns:

- **Tabs component**: For organizing content into categories
- **Tables**: For displaying detailed performance data
- **Tags**: For status indicators
- **Grid system**: For responsive layout
- **Typography scale**: For hierarchy and readability
- **Color palette**: Standard GOV.UK colors for consistency

## Data

All data in this dashboard is fabricated for demonstration purposes and follows realistic patterns based on:
- HM Treasury Green Book methodology
- Typical government service metrics
- Industry standard KPIs for digital identity services

## Documentation

- [GOV.UK Prototype Kit Documentation](https://prototype-kit.service.gov.uk/docs)
- [GOV.UK Frontend Documentation](https://frontend.design-system.service.gov.uk/)
- [GOV.UK Design System](https://design-system.service.gov.uk/)

## Security

⚠️ **Important**: If you publish this prototype online, it must be protected by a password to prevent members of the public finding it and thinking it's a real service.

# digitaliddashboard

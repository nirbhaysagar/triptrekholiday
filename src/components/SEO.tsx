import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

const SEO = ({ title, description, image, url }: SEOProps) => {
    const siteTitle = "Trip Trek Holiday";
    const fullTitle = `${title} | ${siteTitle}`;
    const defaultImage = "/og-image.png"; // Replace with your actual default OG image
    const defaultUrl = window.location.href;

    return (
        <Helmet>
            {/* Basic SEO */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || defaultUrl} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;

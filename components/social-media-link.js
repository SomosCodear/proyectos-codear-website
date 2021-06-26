const providerLink = {
    twitter: (handler) => `https://twitter.com/${handler}`,
    instagram: (handler) => `https://instagram.com/${handler}`,
    linkedin: (handler) => `https://linkedin.com/${handler}`,
    facebook: (handler) => `https://facebook.com/${handler}`,
}

const SocialMediaLink = ({ provider, handler }) =>
    <a 
        target="_blank" 
        rel="noreferrer noopener" 
        href={providerLink[provider](handler)}
    >
            {provider}
    </a>;

export default SocialMediaLink;
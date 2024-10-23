import React from 'react';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-5">


    {/* twitter */}
    <a href="https://x.com/ripplenexus" target="_blank" rel='noreferrer'>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4043 8.3836L18.538 0.263184H16.8482L10.6514 7.31258L5.70568 0.263184H0L7.48049 10.9241L0 19.4386H1.68986L8.22962 11.9926L13.4538 19.4386H19.1594M2.29977 1.5111H4.89588L16.8469 18.252H14.2502" fill="#D2D2D2" />
        </svg>
    </a>

    {/* instagram */}
    <a href="https://www.instagram.com/ripplenexus/" target="_blank" rel='noreferrer'>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_81_1845)">
                <path d="M10.1854 1.99137C12.7453 1.99137 13.0489 2.00096 14.0604 2.0473C16.6587 2.16554 17.8723 3.39836 17.9906 5.97746C18.0369 6.98816 18.0457 7.29177 18.0457 9.85169C18.0457 12.4124 18.0361 12.7152 17.9906 13.7259C17.8715 16.3026 16.6611 17.5378 14.0604 17.6561C13.0489 17.7024 12.7469 17.712 10.1854 17.712C7.62544 17.712 7.32183 17.7024 6.31113 17.6561C3.70647 17.537 2.49922 16.2986 2.38097 13.7251C2.33463 12.7144 2.32504 12.4116 2.32504 9.85089C2.32504 7.29097 2.33543 6.98816 2.38097 5.97666C2.50002 3.39836 3.71046 2.16475 6.31113 2.0465C7.32263 2.00096 7.62544 1.99137 10.1854 1.99137ZM10.1854 0.263184C7.5815 0.263184 7.25552 0.274369 6.23283 0.32071C2.7509 0.480505 0.815777 2.41243 0.655981 5.89756C0.608842 6.92105 0.597656 7.24703 0.597656 9.85089C0.597656 12.4548 0.608842 12.7815 0.655182 13.8042C0.814978 17.2862 2.7469 19.2213 6.23203 19.3811C7.25552 19.4274 7.5815 19.4386 10.1854 19.4386C12.7892 19.4386 13.116 19.4274 14.1387 19.3811C17.6174 19.2213 19.5573 17.2894 19.7147 13.8042C19.7619 12.7815 19.7731 12.4548 19.7731 9.85089C19.7731 7.24703 19.7619 6.92105 19.7155 5.89836C19.5589 2.41962 17.6246 0.481304 14.1395 0.321509C13.116 0.274369 12.7892 0.263184 10.1854 0.263184ZM10.1854 4.9276C7.46645 4.9276 5.26208 7.13198 5.26208 9.85089C5.26208 12.5698 7.46645 14.775 10.1854 14.775C12.9043 14.775 15.1087 12.5706 15.1087 9.85089C15.1087 7.13198 12.9043 4.9276 10.1854 4.9276ZM10.1854 13.0468C8.42043 13.0468 6.98946 11.6166 6.98946 9.85089C6.98946 8.08595 8.42043 6.65499 10.1854 6.65499C11.9503 6.65499 13.3813 8.08595 13.3813 9.85089C13.3813 11.6166 11.9503 13.0468 10.1854 13.0468ZM15.3036 3.58293C14.6676 3.58293 14.1523 4.09827 14.1523 4.73345C14.1523 5.36864 14.6676 5.88398 15.3036 5.88398C15.9388 5.88398 16.4533 5.36864 16.4533 4.73345C16.4533 4.09827 15.9388 3.58293 15.3036 3.58293Z" fill="#D2D2D2" />
            </g>
            <defs>
                <clipPath id="clip0_81_1845">
                    <rect width="19.1754" height="19.1754" fill="white" transform="translate(0.597656 0.263184)" />
                </clipPath>
            </defs>
        </svg>

    </a>
    {/* linkedIn */}
    <a href="https://www.linkedin.com/company/ripple-nexus/" target="_blank" rel='noreferrer'>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_81_1849)">
                <path d="M16.0048 0.263184H4.8191C2.61312 0.263184 0.824219 2.05209 0.824219 4.25806V15.4437C0.824219 17.6497 2.61312 19.4386 4.8191 19.4386H16.0048C18.2115 19.4386 19.9996 17.6497 19.9996 15.4437V4.25806C19.9996 2.05209 18.2115 0.263184 16.0048 0.263184ZM7.21602 15.4437H4.8191V6.65499H7.21602V15.4437ZM6.01756 5.64189C5.24575 5.64189 4.61935 5.0107 4.61935 4.23249C4.61935 3.45429 5.24575 2.8231 6.01756 2.8231C6.78937 2.8231 7.41577 3.45429 7.41577 4.23249C7.41577 5.0107 6.79017 5.64189 6.01756 5.64189ZM16.8037 15.4437H14.4068V10.9663C14.4068 8.27531 11.2109 8.47905 11.2109 10.9663V15.4437H8.81397V6.65499H11.2109V8.06518C12.3263 5.99903 16.8037 5.84643 16.8037 10.0434V15.4437Z" fill="#D2D2D2" />
            </g>
            <defs>
                <clipPath id="clip0_81_1849">
                    <rect width="19.1754" height="19.1754" fill="white" transform="translate(0.824219 0.263184)" />
                </clipPath>
            </defs>
        </svg>
    </a>

    {/* youtube */}
    {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_81_1847)">
            <path d="M15.8828 2.80702C13.0033 2.61048 6.58996 2.61127 3.71445 2.80702C0.600838 3.01955 0.234108 4.90034 0.210938 9.85079C0.234108 14.7925 0.597642 16.6812 3.71445 16.8946C6.59076 17.0903 13.0033 17.0911 15.8828 16.8946C18.9965 16.682 19.3632 14.8012 19.3864 9.85079C19.3632 4.90913 18.9996 3.02035 15.8828 2.80702ZM7.40172 13.0467V6.65489L13.7935 9.8452L7.40172 13.0467Z" fill="#D2D2D2" />
        </g>
        <defs>
            <clipPath id="clip0_81_1847">
                <rect width="19.1754" height="19.1754" fill="white" transform="translate(0.210938 0.263184)" />
            </clipPath>
        </defs>
    </svg> */}


</div>
  );
};

export default SocialIcons;
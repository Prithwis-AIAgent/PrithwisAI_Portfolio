import React from 'react';

const CatIcon = ({ className = '' }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8V6H8V4H10V6H14V4H16V6H18V8H19V14H21V16H19V18H17V19H7V18H5V16H3V14H5V8H6ZM7 14H5V16H7V14ZM17 14H19V16H17V14ZM7 10H17V14H7V10ZM9 15H11V16H9V15ZM13 15H15V16H13V15Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default CatIcon;

import React from 'react';
import { useDispatch } from 'react-redux';

import { selectUrls } from './urlSlice';

const UrlItem = ({url}) => {
    return (
        <li>
            <p>{url.created_at}</p>
            <p>{url.url_account}</p>
            <p>{url.keyword_num}</p>
            <p>{url.site_name}</p>
        </li>
    );
};

export default UrlItem;
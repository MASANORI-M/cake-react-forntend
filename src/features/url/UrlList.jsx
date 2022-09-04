import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUrls, fetchAsyncGet } from './urlSlice';
import UrlItem from './UrlItem';
import PrimaryButton from '../../components/PrimaryButton';

const UrlList = () => {
    const urls = useSelector(selectUrls);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUrls = async () => {
            await dispatch(fetchAsyncGet());
        };
        fetchUrls();
    }, [dispatch]);

    return (
        <div>
            <PrimaryButton />
            <ul>
                {urls.map((url) => (
                    <UrlItem key={url.id} url={url} />
                ))}
            </ul>
        </div>
    );
};

export default UrlList;